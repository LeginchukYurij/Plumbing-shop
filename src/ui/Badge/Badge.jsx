import cn from 'classnames';

export const Badge = ({ children, className }) => {
  return <div className={cn('badge', className)}>{children}</div>;
};
