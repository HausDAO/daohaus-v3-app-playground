import React, { useEffect } from 'react';
import { spreadOptions } from '../utils/formBuilder';
import { getContractBalance } from '../utils/tokenValue';
import GenericInput from './genericInput';

const Tutorial2 = props => {
  const { registerOptions, decimals, listenTo, localForm } = props;
  const { watch } = localForm;
  const externalDecimals = listenTo && watch(listenTo);

  useEffect(
    () => externalDecimals && console.log('externalDecimals', externalDecimals),
    [externalDecimals],
  );
  const inputOptions = spreadOptions({
    registerOptions,
    setValueAs: val => getContractBalance(val, externalDecimals || decimals),
  });
  return <GenericInput {...props} registerOptions={inputOptions} />;
};

export default Tutorial2;
