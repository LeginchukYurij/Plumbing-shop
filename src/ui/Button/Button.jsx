import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Button = ({
  href = null,
  type = 'button',
  className,
  children,
}) => {
  if (href) {
    return (
      <Link
        className={cn('accent-btn', className)}
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
