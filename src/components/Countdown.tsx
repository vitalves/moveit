import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout; // somente para saber o formato
let timeDefault = 0.05 * 60; //25 * 60;

export function Countdown() {

  // const contextData = useContext(ChallengesContext)
  const { startNewChallenge } = useContext(ChallengesContext)
  // console.log(startNewChallenge);

  const [time, setTime] = useState(timeDefault);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // converte para string, acrescenta um 0 se for só 1 e divide em um array
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(timeDefault);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      },1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          className={styles.countdownButtom}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
          <button 
            type="button" 
            className={`${styles.countdownButtom} ${styles.countdownButtomActive}`}
            onClick={resetCountDown}
          >
            Abandonar ciclo
          </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButtom}
              onClick={startCountdown}
            >
            Iniciar ciclo
          </button>
          )}
        </>
      )}

    </div>
  )
}
