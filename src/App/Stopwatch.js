import React, { useCallback, useState } from "react";
import ResetButton from "./components/ResetButton";
import StartButton from "./components/StartButton";
import TimeBlock from "./components/TimeBlock";
import WaitButton from "./components/WaitButton";

const Stopwatch = () => {
  // дата начала отсчета (state пустой когда таймер неактивен в
  // противном случае будет содержать дату начала отсчета)
  const [activeDate, setActiveDate] = useState(""),
    resetActiveDate = useCallback(() => {
      setActiveDate("");
    }, []);
  // время в 1/1000 секунды при остановке таймера
  const [beforeTime, setBeforeTime] = useState(0),
    resetBeforeTime = useCallback(() => {
      setBeforeTime(0);
    }, []),
    changeBeforeTime = useCallback(
      (time) => {
        setBeforeTime(beforeTime + time);
      },
      [beforeTime]
    );

  return (
    <div className="stopwatch">
      <div className="stopwatch__time-block">
        <TimeBlock activeDate={activeDate} beforeTime={beforeTime} />
      </div>

      <div className="stopwatch__buttons-block">
        <StartButton
          setActiveDate={setActiveDate}
          resetActiveDate={resetActiveDate}
          activeDate={activeDate}
          resetBeforeTime={resetBeforeTime}
        />
        <WaitButton
          activeDate={activeDate}
          resetActiveDate={resetActiveDate}
          changeBeforeTime={changeBeforeTime}
        />
        <ResetButton
          resetActiveDate={resetActiveDate}
          resetBeforeTime={resetBeforeTime}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
