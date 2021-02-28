import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);
 
  // converte para string, acrescenta um 0 se for só 1 e divide em um array
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
            onClick={resetCountdown}
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
