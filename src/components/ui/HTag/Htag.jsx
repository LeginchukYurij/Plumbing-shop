const Htag = ({ level, chilren, className }) => {
  switch (level) {
    case 1:
      return <h1 className={className}>{chilren}</h1>;
    case 2:
      return <h2 className={className}>{chilren}</h2>;
    case 3:
      return <h3 className={className}>{chilren}</h3>;
    case 4:
      return <h4 className={className}>{chilren}</h4>;
    case 5:
      return <h5 className={className}>{chilren}</h5>;
    case 6:
      return <h6 className={className}>{chilren}</h6>;
    default:
      return <span className={className}>{chilren}</span>;
  }
};

export default Htag;
