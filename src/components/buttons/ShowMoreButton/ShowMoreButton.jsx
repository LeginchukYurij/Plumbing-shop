import { ReactComponent as RightArrow } from '@assets/svg-icons/arrow-right-icon.svg';
import { TextButton } from '@ui';

const ShowMoreButton = ({ href = null }) => {
  return (
    <TextButton href={href}>
      <span>Детальніше</span>
      <RightArrow />
    </TextButton>
  );
};

export default ShowMoreButton;
