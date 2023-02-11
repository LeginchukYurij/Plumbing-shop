const HeroSlide = ({ data }) => {
  const { img, title, href } = data;

  return (
    <div
      className='m-slide'
      style={{ backgroundImage: `url(${img})` }}>
      <div className='m-slide-title'>
        {title}
        <a
          className='accent-btn'
          href={href}>
          Дивитися
        </a>
      </div>
    </div>
  );
};
export default HeroSlide;
