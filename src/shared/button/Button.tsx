import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import './button.scss';

interface Buttonprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: React.ReactNode;
}

const Button = (props: Buttonprops) => {
  const { className, children, ...rest } = props;
  return (
    <button className={classNames('btn', className)} {...rest}>
      {' '}
      {children}{' '}
    </button>
  );
};

export default Button;
