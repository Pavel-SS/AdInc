import React, { useState, ChangeEvent } from 'react';

import styled from 'styled-components';

import COLORS from './color';

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 37px;
  height: 18px;
  background: ${({ checked }) => (checked ? COLORS.ON : COLORS.OFF)};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '20px' : 'calc(0% + 3px)')};
    top: 2px;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export const ToggleSwitch = () => {
  const [switchState, setSwitchState] = useState(true);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('---', e.target.checked);
    setSwitchState(!switchState);
  }

  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
};
