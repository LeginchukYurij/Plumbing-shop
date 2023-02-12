import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Button = ({
  skin = 'dark',
  href = null,
  type = 'button',
  className,
  children,
}) => {
  if (href) {
    return (
      <Link
        className={cn(className, {
          'accent-btn': skin === 'dark',
          'w-btn': skin === 'light',
        })}
        to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn('accent-btn', className)}>
      {children}
    </button>
  );
};
