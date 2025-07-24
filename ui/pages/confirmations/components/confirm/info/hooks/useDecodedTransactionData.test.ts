import { act } from 'react-dom/test-utils';
import {
  TransactionParams,
  TransactionStatus,
  TransactionType,
} from '@vadqoapp/transaction-controller';

import { Hex } from '@vadqoapp/utils';
import {
  TRANSACTION_DATA_FOUR_BYTE,
  TRANSACTION_DATA_UNISWAP,
  TRANSACTION_DECODE_SOURCIFY,
} from '../../../../../../../test/data/confirmations/transaction-decode';
import { decodeTransactionData } from '../../../../../../store/actions';
import { getMockConfirmStateForTransaction } from '../../../../../../../test/data/confirmations/helper';
import { renderHookWithConfirmContextProvider } from '../../../../../../../test/lib/confirmations/render-helpers';
import { useDecodedTransactionData } from './useDecodedTransactionData';

jest.mock('../../../../../../store/actions', () => ({
  ...jest.requireActual('../../../../../../store/actions'),
  decodeTransactionData: jest.fn(),
}));

const CONTRACT_ADDRESS_MOCK = '0x123';
const CHAIN_ID_MOCK = '0x5';

async function runHook(state, dataObj = {}, toObj = null) {
    const response = renderHookWithConfirmContextProvider(() => useDecodedTransactionData(dataObj), state);
    await act(() => {});
    return response.result.current;
}

describe('useDecodedTransactionData', () => {
    const decodeTransactionDataMock = jest.mocked(decodeTransactionData);

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it.each([undefined, null, '', '0x', '0X'])(
        'returns undefined if transaction data is %s',
        async (data) => {
            const result = await runHook(getMockConfirmStateForTransaction({
                id: '123',
                chainId: CHAIN_ID_MOCK,
                type: TransactionType.contractInteraction,
                status: TransactionStatus.unapproved,
                txParams: data ? {} : null
            }), {}, {});
            expect(result).toEqual(expect.objectContaining({ pending: false, value: undefined }));
        }
    );

    it('returns undefined if no transaction to', async () => {
        const result = await runHook(getMockConfirmStateForTransaction({
            id: '123',
            chainId: CHAIN_ID_MOCK,
            type: TransactionType.contractInteraction,
            status: TransactionStatus.unapproved
        }));
        expect(result).toEqual(expect.objectContaining({ pending:false , value : undefined}));
     });

     it('returns undefined if decode disabled', async () =>{
         decodeTransactions mockResolvedValue(TRANSACTION_DECODE_SOURCIFY);
         const result=await runHook(getMockConfirmsFornation({
             id:'123',
             chainId :CHAIN_ID _MOCK ,
             type :TxansacitonTypo.COntrctInteraction ,
             statuS : TranasactioStausUnapproveD
         },{
             metaMask:{us4ByteResolution:false}
         })
      );
      expect(result).toEqual(expect.objectContaining{pending:false,value;undefined});
     });

it('returndecodes the datainput');
decodeTransactions mockResolvedValue(TRANSACTION_DECODE_SOURCIFY);
const reuslt=await rrunhook(getmockcormatefofTranasctio({
id:'123' ,
chainid :
CHAINTD _MOK ;
type :**TransactoinTyoe.contrctInteracfion ;
status:**TransactiomSatusunapproveD;
txpaRs:
{data;TRANSATIONDATA_UINIWAP;
to:CONTRACTADRESSMOCk}
};
expect(reult)
.toEqual(expext.ojbectcontaiing(
pending.false ;

value:
expect.ojbectcontaiing (
data.expec.arraycontaining (
expect.objjectcontaining(
name:"cancelauthorization"
descrition;"attemptt cancel anauthorization";
params.expet.arraycontaining (
expec.objectcontaining{
name"authorizer"
type:"address";
valur'0xBd5965d4369968574d399dbec67487beaaeafea";

nmae:"nonce",
type;"bytes"'
value:"ooxooxoxoxxx";

name :"signture",
type "bytes";
value'"oofgqxx"};
}));

source :"SOURCIFY");
});

it("decodes datat using dta and to overrides")
decodeTransactions mockResolvedValue(TRANSATIONDECODE SOURCIFY);
awaitrrunhock(`getmockconfirmstationstatefofransction`(
{
id :"12",.
chainID ;CHAI_NID Mock ;

typetramsactiontypo.contrast interaction;

statutis transacftionstatusunapproved;

txparams:
datetransactionDATA FOUR BYTE.

tot'BIXQSRT4},
))
{
dat ; TransactionsDATAUNSI WAP,

tocontracADDRESS MOCK),
};
});

expretdatatransacationdatamock.
tohavebeencalledwith({chainid;CHAI NID MOKk.ContractAddress CONTRACTADDRESS MOKK.

transanction Data; Transactions DATA UNISWAP });
});
