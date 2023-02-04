/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  useState,
} from 'react';

import s from './inputText.module.scss';

// берем типизацию input по умолчанию, для дальнейшего использования в кастомной типизации
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// объединяем типизацию поумолчанию (без type) с костомной
type InputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void;
  onEnterPress?: () => void;
  visibilityPassword?: boolean;
};

export const InputText: React.FC<InputTextPropsType> = React.memo(
  ({
    onChange,
    onChangeText,
    onKeyPress,
    onEnterPress,
    visibilityPassword,
    ...props
  }) => {
    const [visiblyPassword, setVisiblyPassword] = useState<boolean>(!visibilityPassword);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      onChangeText && onChangeText(e.currentTarget.value);
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyPress && onKeyPress(e);
      onEnterPress && e.key === 'Enter' && onEnterPress();
    };

    const showPassword = () => {
      setVisiblyPassword(!visiblyPassword);
    };

    return (
      <div className={s.container}>
        <input
          type={visiblyPassword ? 'text' : 'password'}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          {...props}
        />
        {visibilityPassword && (
          <div
            onClick={showPassword}
            onKeyPress={showPassword}
            role="button"
            tabIndex={0}
            aria-label="Visible"
            className={
              visiblyPassword ? `${s.eye} ${s.eye_open}` : `${s.eye} ${s.eye_close}`
            }
          />
        )}
      </div>
    );
  },
);
