import { ButtonProps } from '../../@types/button.d';
import { MyButton } from './style';

export function Button({ isOutline = false, ...props }: ButtonProps) {
  return (
    <MyButton
      className={`${isOutline} ? 'outlined'`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
