import { ButtonHTMLAttributes } from 'react';
import { MyButton } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MyButton {...props} />
  );
}
