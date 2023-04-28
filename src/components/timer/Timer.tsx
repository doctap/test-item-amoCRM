import React, { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';

export const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [value, setValue] = useState('');

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elem = event.currentTarget;
    setValue(elem.value);
  };

  const timerId = useRef(0);

  const startTimer = () => {
    if (seconds > 0) clearTimeout(timerId.current);
    const actualValue = Number(normalizeString(value));

    setSeconds(actualValue > 356399 ? 356399 : actualValue);
    setValue('');
  };

  useEffect(() => {
    if (seconds > 0) {
      timerId.current = window.setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      clearTimeout(timerId.current);
    }
  }, [seconds]);

  return (
    <div className={styles.timer}>
      <div className={styles.runTimer}>
        <input
          value={value}
          type="text"
          onChange={getValue}
          placeholder="Seconds"
        />
        <button onClick={startTimer}>Start</button>
      </div>
      {getMoment(seconds)}
    </div>
  );
};

function getMoment (seconds: number) {
  const hours = Math.trunc(seconds / 3600);
  seconds = seconds - (hours * 3600);

  const minutes = Math.trunc(seconds / 60);
  seconds = seconds - (minutes * 60);

  return (
    `${hours < 10 ? `0${hours}` : hours
    }:${minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds
    }`
  );
}

function normalizeString (str: string) {
  return str.replace(/[^0-9]/g, '');
}
