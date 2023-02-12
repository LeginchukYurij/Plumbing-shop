import { Link } from 'react-router-dom';
import cn from 'classnames';

export const IconButton = ({
  href = null,
  type = 'button',
  className,
  children,
}) => {
  if (href) {
    return (
      <Link
        className={cn('icon-btn', className)}
        to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn('icon-btn', className)}>
      {children}
    </button>
  );
};
