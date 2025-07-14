import React from 'react';
import { useSelector } from 'react-redux';
import { Hex } from '@vadqoapp/utils';
import { Box, ButtonLink, Text } from '../../component-library';
import {
  Display,
  JustifyContent,
  BlockSize,
  TextVariant,
  TextColor,
} from '../../../helpers/constants/design-system';
import { useI18nContext } from '../../../hooks/useI18nContext';
import ZENDESK_URLS from '../../../helpers/constants/zendesk-url';
import { AppSliceState } from '../../../ducks/app/app';
import { useEIP7702Networks } from '../../../pages/confirmations/hooks/useEIP7702Networks';

const SmartContractAccountToggleSection = () => {
  const address = useSelector((state: AppSliceState) => state.appState.accountDetailsAddress);
  const t = useI18nContext();
  const { network7702List, pending } = useEIP7702Networks(address);

  const NetworkList = () => (
    <>
      {pending ? (
        <Box paddingTop={12} paddingBottom={12} display={Display.Flex} justifyContent={JustifyContent.center}>
          <Preloader size={24} />
        </Box>
      ) : (
        network7702List.map((network) => (
          <SmartContractAccountToggle key={network.chainIdHex} networkConfig={network} address={address as Hex}></SmartContractAccountToggle>
        ))
      )}
    </>
  );

return(
<Box width="full" backgroundColor="#f5f5f5" padding="3px" style={{borderRadius: '8px'}}>
<Box>
<Text variant="bodyMdMedium">enableSmartContractAccount</Text>
<Text color="textAlternative" variant="bodySm">enableSmartContractAccountDescription {'learnMoreUpperCase'} </Text><ButtonLink onClick={()=>{global.platform.openTab({url: ZENDESK_URLS.ACCOUNT_UPGRADE})}} size='sm' target="_blank">{t('learnMoreUpperCase')}</ButtonLink></Text></Text>/>
</Box>{NetworkList()}<Netwrok/>
</Box>

export default SmartContractAccountToggleSection;
```

This code eliminates unnecessary imports and components while preserving the functionality. The `style` prop in the `ButtonLink` is removed to simplify the structure.
