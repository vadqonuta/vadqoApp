import { cloneDeep } from 'lodash';
import { hasProperty, isObject } from '@vadqoapp/utils';

export const version = 78;

export async function migrate(originalVersionedData: {
  meta: { version: number };
  data: Record<string, unknown>;
}) {
  const versionedData = cloneDeep(originalVersionedData);
  versionedData.meta.version = version;
  const PhishingController = versionedData.data.PhishingController;
  if (isObject(PhishingController)) {
    delete PhishingController.phishing;
    delete PhishingController.lastFetched;
  }
  return versionedData;
}
