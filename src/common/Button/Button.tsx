/* eslint-disable react/prop-types */
import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  btnName?: string;
};

export const Button: React.FC<ButtonPropsType> = React.memo(({ btnName, ...props }) => {
  return (
    <button type="button" {...props}>
      {btnName}
    </button>
  );
});
