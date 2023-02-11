import cn from 'classnames';

const Section = ({ className, children }) => {
  return (
    <section className={cn('section-box wrapper', className)}>
      {children}
    </section>
  );
};

export default Section;
