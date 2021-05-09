import React from "react";
import PropTypes from "prop-types";

function ResetButton({ resetActiveDate, resetBeforeTime }) {
  const onClickFunc = () => {
    resetActiveDate();
    resetBeforeTime();
  };

  return (
    <button className="stopwatch__button" onClick={onClickFunc}>
      Reset
    </button>
  );
}

ResetButton.propTypes = {
  resetBeforeTime: PropTypes.func,
  resetActiveDate: PropTypes.func,
};

ResetButton.defaultProps = {
  resetBeforeTime: () => {},
  resetActiveDate: () => {},
};

export default ResetButton;
