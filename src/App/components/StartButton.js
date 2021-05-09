import React from "react";
import PropTypes from "prop-types";

function StartButton({
  setActiveDate,
  activeDate,
  resetBeforeTime,
  resetActiveDate,
}) {
  const onClickFunc = () => {
    // Если секундомер активен в данный момент
    if (activeDate) {
      resetActiveDate();
      resetBeforeTime();
      return;
    }

    // В других случаях запускаем.возобновляем его работу
    const dateNow = new Date();
    setActiveDate(dateNow);
  };

  return (
    <button className="stopwatch__button" onClick={onClickFunc}>
      {activeDate ? "Stop" : "Start"}{" "}
    </button>
  );
}

StartButton.propTypes = {
  setActiveDate: PropTypes.func,
  resetBeforeTime: PropTypes.func,
  resetActiveDate: PropTypes.func,
};

StartButton.defaultProps = {
  setActiveDate: () => {},
  resetBeforeTime: () => {},
  resetActiveDate: () => {},
  activeDate: "",
};

export default StartButton;
