import React, { useState } from "react";
import PropTypes from "prop-types";

function WaitButton({ activeDate, changeBeforeTime, resetActiveDate }) {
  const [lastClickTimespamp, setLastClickTimespamp] = useState(null);
  const onClickFunc = () => {
    if (!activeDate) return;

    const dateNowTimespamp = new Date().getTime();

    // Если кнопка была нажата больше чем 300мс назад
    // обнуляем время и выходим из функции
    if (!lastClickTimespamp || dateNowTimespamp - lastClickTimespamp > 300) {
      setLastClickTimespamp(dateNowTimespamp);

      return;
    }

    const differenceDate = Math.floor(dateNowTimespamp - activeDate.getTime());

    setLastClickTimespamp(null);
    changeBeforeTime(differenceDate);
    resetActiveDate();
  };

  return (
    <button className="stopwatch__button" onClick={onClickFunc}>
      Wait
    </button>
  );
}

WaitButton.propTypes = {
  changeBeforeTime: PropTypes.func,
  resetActiveDate: PropTypes.func,
};

WaitButton.defaultProps = {
  changeBeforeTime: () => {},
  resetActiveDate: () => {},
  activeDate: "",
};

export default WaitButton;
