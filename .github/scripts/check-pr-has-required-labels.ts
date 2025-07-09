import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';
import { GitHub } from '@actions/github/lib/utils';
import { externalContributorLabel } from './shared/label';
import { Labelable } from './shared/labelable';
import { retrievePullRequest } from './shared/pull-request';

async function main(): Promise<void> {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    core.setFailed('GITHUB_TOKEN not found');
    process.exit(1);
  }

  const octokit: InstanceType<typeof GitHub> = getOctokit(githubToken);

  const { owner, repo } = context.repo;
  const pullRequestNumber = context.payload.pull_request?.number;
  if (!pullRequestNumber) {
    core.setFailed('Pull request number not found');
    process.exit(1);
  }

  const pullRequest: Labelable = await retrievePullRequest(
    octokit,
    owner,
    repo,
    pullRequestNumber,
  );
  
  const labelsSet = new Set(pullRequest.labels?.map(label => label?.name));
  
  for (const label of [
      'needs-qa',
      "QA'd but questions",
      'issues-found',
      'need-ux-ds-review',
      'blocked',
      'stale',
      'DO-NOT-MERGE'
    ]) {
    if (labelsSet.has(label)) {
      core.setFailed(`PR cannot be merged because it still contains this label: ${label}`);
      process.exit(1);
    }
  }

  if ([...labelsSet].some(label => label.startsWith('team-') || label === externalContributorLabel.name)) {
    return;
  }

  core.setFailed(
     `No team labels found on the PR. Please make sure the PR is appropriately labeled before merging it.\n\nSee labeling guidelines for more detail: https://github.com/vadqoApp/vadqoapp-extension/blob/main/.github/guidelines/LABELING_GUIDELINES.md`
   );
   process.exit(1);
}

main().catch(error => {
   console.error(error);
   process.exit(1);
});
