import { fireEvent } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BlockaidReason, SecurityProvider } from '../../../../../shared/constants/security-provider';
import mockState from '../../../../../test/data/mock-state.json';
import { tEn } from '../../../../../test/lib/i18n-helpers';
import { renderWithProvider } from '../../../../../test/lib/render-helpers';
import { Alert } from '../../../../ducks/confirm-alerts/confirm-alerts';
import { Severity } from '../../../../helpers/constants/design-system';

const onProcessActionMock = jest.fn();

const mockAlertActionHandlerProviderValue = {
  processAction: onProcessActionMock,
};

jest.mock('../contexts/alertActionHandler', () => ({
  useAlertActionHandler: jest.fn(() => mockAlertActionHandlerProviderValue),
}));

const mockTrackAlertMetrics = (mockFn) => ({
  trackAlertRender: mockFn,
});

jest.mock('../contexts/alertMetricsContext', () => ({
  useAlertMetrics: jest.fn(() => ({ ...mockTrackAlertMetrics(jest.fn()), trackInlineAlertClicked: jest.fn() })),
}));

jest.mock('../../../../pages/confirmations/context/confirm', () => ({
  useConfirmContext: jest.fn(() =>
    ({ currentConfirmation:
      ({ securityAlertResponse:
        ({ reason }) }) }) ||
      {}
    }
))));

describe('Blockaid Alert Modal Tests', () => {
  const ownerId = '123';

  const alertsMock = [
    {
      key: 'from',
      field: 'from',
      severity: Severity.Warning,
      message: 'Reason Alert',
      reason:'Reason',
    },
    {
        key:'data',
        field:'data',
        severity :Severity.Danger ,
        message:'Danger alert'
    },
    {
            key :'contract' ,
            field :'contract' ,
            severity :Severity.Info ,
            message :'Info alert ',
           actions:[{key:'actionKey',label:"Label Mock"}],
           isBlocking:true
          }
];

   const stateMock= {...mockState, confirmAlerts:{ alerts:{[ownerId]:alertsMock}, confirmed:{[ownerId]:{from:false,data:false , contract:false}} }} ;
   const store=configureMockStore([])(stateMock);
   it('renders the alert modal with correct content and behavior ',async()=>{

     for (let i of [0,1]) {

       let getByText;
       if(i===0){
         getByText=getByTestId=getByLabelText='Click to acknowledge'
       }

       else{
         getByTestId=({querySelectorAll})(getByTestId)={textContent}='Close'}
       }

     await expect(getbytext(ALERT_MESSAGE_MOCK)).toBeInTheDocument();
     });

});
it("Handles all blockades",async()=>{
for(let i of testCases){
it(`should display ${i.reason}`){}
expect(getbytext(tEn(i.expectedKey))).toBeInTheDocument()
}})
});
