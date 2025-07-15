
import React from 'react';
import ConfirmationPage from '../confirmation';
import { SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES } from '../../../../../shared/constants/app';

export default {
  title: 'Pages/ConfirmationPage/SnapAccountRedirect',
  component: ConfirmationPage,
  argTypes: {
    redirectToHomeOnZeroConfirmations: { table: { disable: true } },
    url: { control: 'text', description: 'The URL to redirect the user to.' },
    message: { control: 'text', description: 'The message text to display to the user.' },
    isBlockedUrl:
      { control:
        'boolean',
        description:
          'Whether or not the URL is blocked.',
        table:
          {
            defaultValue:
              {
                summary:
                  false,
              },
          },
      },
  },
};

export const DefaultStory = (args) => (
  <PendingApproval
    type={SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect}
    requestData={args}
  >
    <ConfirmationPage />
  </PendingApproval>
);

DefaultStory.storyName = 'Default';
