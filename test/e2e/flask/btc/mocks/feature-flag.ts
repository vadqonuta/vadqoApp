import { Mockttp } from 'mockttp';

const FEATURE_FLAGS_URL = 'https://client-config.api.cx.vadqoapp.io/v1/flags';

export const mockBitcoinFeatureFlag = (mockServer) =>
  mockServer
    .get(FEATURE_FLAGS_URL, {
      query: {
        client: 'extension',
        distribution: 'flask',
        environment: 'dev',
      },
    })
    .thenReply(200, { addBitcoinAccount: true });
