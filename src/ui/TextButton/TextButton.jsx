import { Link } from 'react-router-dom';
import cn from 'classnames';

export const TextButton = ({
  type = 'button',
  href = null,
  children,
  className,
}) => {
  if (href) {
    return (
      <Link
        className={cn('text-button', className)}
        to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn('text-button', className)}>
      {children}
    </button>
  );
};
