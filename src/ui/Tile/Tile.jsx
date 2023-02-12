import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Htag, Button } from '@ui';

export const Tile = ({ slug, title, thumbnail, className }) => {
  return (
    <div className={cn('tile', className)}>
      <div
        className='tile__img'
        style={{
          backgroundImage: `url(${
            process.env.REACT_APP_STRAPI_BASE_URI + thumbnail
          })`,
        }}></div>
      <div className='tile__content'>
        <Htag level={3}>{title}</Htag>
        <Button
          href={`/category/${slug}`}
          skin='light'>
          Дивитися
        </Button>
      </div>
    </div>
  );
};
