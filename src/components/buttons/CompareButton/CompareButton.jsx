import { ReactComponent as CompareIcon } from '@assets/svg-icons/compare-icon.svg';
import { IconButton } from '@ui';

const CompareButton = ({ className, clickHandler }) => {
  return (
    <IconButton className={className}>
      <CompareIcon />
      <span className='visually-hidden'>Порівняти</span>
    </IconButton>
  );
};

export default CompareButton;
