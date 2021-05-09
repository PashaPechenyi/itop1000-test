import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

function TimeBlock({ beforeTime, activeDate }) {
  // время для вывода в секундах
  const [activeTime, setActiveTime] = useState(0),
    changeActiveTime = (newActiveTime) => {
      setActiveTime(Math.floor(newActiveTime / 1000));
    };
  useEffect(() => {
    // Если секундомер не активен и не в режиме Wait обнуляем дату для вывода
    if (!activeDate && beforeTime) {
      changeActiveTime(beforeTime);
      return;
    } else if (!activeDate && !beforeTime) {
      setActiveTime(0);
      return;
    }

    // delate setTimeout при первом подсчете времени
    const firstDelate = 1000 - (beforeTime % 1000);
    // Каждую секунду измняем дату для вывода
    let timerId = setTimeout(function recountActiveTime() {
      const dateNow = new Date(),
        differenceDate = dateNow.getTime() - activeDate.getTime(),
        newActiveTime = differenceDate + beforeTime;

      changeActiveTime(newActiveTime);

      timerId = setTimeout(recountActiveTime, 1000); // (*)
    }, firstDelate);

    return () => {
      clearTimeout(timerId);
    };
  }, [beforeTime, activeDate]);

  const timeTitle = useMemo(() => {
    const timeHours = ("00" + Math.floor(activeTime / 3600)).slice(-2),
      timeMinutes = ("00" + Math.floor((activeTime % 3600) / 60)).slice(-2),
      timeSeconds = ("00" + Math.floor(activeTime % 60)).slice(-2),
      timeTitle = `${timeHours}:${timeMinutes}:${timeSeconds}`;

    return timeTitle;
  }, [activeTime]);

  return <div>{timeTitle}</div>;
}

TimeBlock.propTypes = {
  beforeTime: PropTypes.number,
};

TimeBlock.defaultProps = {
  beforeTime: 0,
  activeDate: "",
};
export default TimeBlock;
