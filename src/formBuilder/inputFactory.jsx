import React from 'react';
import AbiInput from './abiInput';

import AddressInput from './addressInput';
import GenericInput from './genericInput';
import GenericTextarea from './genericTextArea';
import InputSelect from './inputSelect';
import LinkInput from './linkInput';
import MinionSelect from './minionSelect';
import PaymentInput from './paymentInput';
import TributeInput from './tributeInput';
import TargetContract from './targetContract';
import MultiInput from './multiInput';
import NftSelect from './nftSelect';

export const InputFactory = props => {
  const { type } = props;
  if (type === 'input') {
    return <GenericInput {...props} />;
  }
  if (type === 'textarea') {
    return <GenericTextarea {...props} />;
  }
  if (type === 'inputSelect') {
    return <InputSelect {...props} />;
  }
  if (type === 'linkInput') {
    return <LinkInput {...props} />;
  }
  if (type === 'applicantInput') {
    return <AddressInput {...props} />;
  }
  if (type === 'tributeInput') {
    return <TributeInput {...props} />;
  }
  if (type === 'paymentInput') {
    return <PaymentInput {...props} />;
  }
  if (type === 'minionSelect') {
    return <MinionSelect {...props} />;
  }
  if (type === 'abiInput') {
    return <AbiInput {...props} />;
  }
  if (type === 'targetContract') {
    return <TargetContract {...props} />;
  }
  if (type === 'multiInput') {
    return <MultiInput {...props} />;
  }
  if (type === 'nftSelect') {
    return <NftSelect {...props} />;
  }
  return null;
};
