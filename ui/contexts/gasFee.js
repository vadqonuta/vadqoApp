import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useGasFeeInputs } from '../pages/confirmations/hooks/useGasFeeInputs';

const GasFeeContext = createContext();

const GasFeeContextProvider = ({ children, defaultEstimateToUse, transaction, minimumGasLimit, editGasMode }) => {
  const gasFeeDetails = useGasFeeInputs(defaultEstimateToUse, transaction, minimumGasLimit, editGasMode);
  return <GasFeeContext.Provider value={gasFeeDetails}>{children}</GasFeeContext.Provider>;
};

const useGasFeeContext = () => useContext(GasFeeContext);

GasFeeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultEstimateToUse: PropTypes.string,
  transaction: PropTypes.object,
  minimumGasLimit: PropTypes.string,
  editGasMode: PropTypes.string,
};

export { GasFeeContextProvider, useGasFeeContext };
