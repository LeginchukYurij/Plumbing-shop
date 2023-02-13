export const Grid = ({ containerTag, columns, children }) => {
  const Container = containerTag || 'div';

  let gridClass = '';

  switch (columns) {
    case 2:
      gridClass = 'grid grid--x2';
      break;

    case 3:
      gridClass = 'grid grid--x3';
      break;

    case 4:
      gridClass = 'grid grid--x4';
      break;

    case 5:
      gridClass = 'grid grid--x5';
      break;

    case 6:
      gridClass = 'grid grid--x6';
      break;

    default:
      gridClass = 'grid';
  }

  return <Container className={gridClass}>{children}</Container>;
};
