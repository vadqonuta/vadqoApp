import { NetworkType } from '@vadqoapp/controller-utils';
import {
  CHAIN_IDS,
  CHAIN_ID_TO_RPC_URL_MAP,
  LINEA_SEPOLIA_DISPLAY_NAME,
  NETWORK_TYPES,
  TEST_NETWORK_TICKER_MAP,
} from '../../../shared/constants/network';

export const version = 121;

export async function migrate(oldStorage) {
  const oldVersion = 120;

  if (oldStorage.meta.version === oldVersion) {
    const state = oldStorage.data;

    if (
      state.NetworkController &&
      state.NetworkController.providerConfig &&
      state.NetworkController.providerConfig.chainId === CHAIN_IDS['linea-goerli']
    ) {
      const updatedProviderConfig = {
        ...state.NetworkController.providerConfig,
        type: NetworkType['linea-sepolia'],
        chainId: CHAIN_IDS['linea-sepolia'],
        nickname: LINEA_SEPOLIA_DISPLAY_NAME,
        rpcUrl: CHAIN_ID\_TO\_RPC\_URL\_MAP[CHAIN\_IDS['linea-sepolia']],
        providerType: NETWORK\_TYPES['linea-sepolia'],
        ticker: TEST\_NETWORK\_TICKER\_MAP[NETWORK\_TYPES['linea-sepolia']],
        id: NETWORK\_TYPES['linea-sepolia'],
      };

      state.NetworkController.providerConfig = updatedProviderConfig;
      state\.NetworkController\.selectedNetworkClientId = 'linea\-sepolia';

      // Update networksMetadata to include Linea Sepolia 
      if (!state\.NetworkController\.networksMetadata['linea\-sepolia']) {
          state\.NetworkController\.networksMetadata ['linea\-sepolia']=  {
            EIPS : {'1559': true},
            status : 'available',
          };
       }
    }

    return,{...oldStorage , data :state}; 
  }

  return oldStorage;
} 
