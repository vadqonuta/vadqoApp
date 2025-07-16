import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentNetwork } from '../../../selectors';
import { PickerNetwork, AvatarNetworkSize } from '../../component-library';

export default function NetworkDisplay() {
  const currentNetwork = useSelector(getCurrentNetwork);

  return (
    <PickerNetwork
      className="network-display"
      label={currentNetwork?.nickname}
      labelProps={{ 'data-testid': 'network-display' }}
      src={currentNetwork?.rpcPrefs?.imageUrl}
      iconProps={{ display: 'none' }}
      avatarNetworkProps={{ size: AvatarNetworkSize.Xs }}
      as="div"
      backgroundColor="transparent"
      borderWidth={0}
      borderColor="borderMuted"
    />
  );
}
