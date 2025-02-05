const ButtonLinks = ({
  children,
  currentActive,
  handleOnclick,
  btncategory,
}) => {
  return (
    <button
      className={`btn-link ${
        currentActive === btncategory ? 'active-btn' : ''
      }`}
      onClick={() => handleOnclick(btncategory)}
    >
      {children}
    </button>
  );
};

export default ButtonLinks;
