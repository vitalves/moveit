import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  // const contextData = useContext(ChallengesContext);
  const { 
    activeChallenge, 
    resetChallenge, 
    completeChallenge 
  } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return(
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.ChallengeActive}>
        <header>Ganhe {activeChallenge.amount} xp</header>
        <main>
          <img src={`/icons/${activeChallenge.type}.svg`} alt="novo"/>
          <strong>Novo desafio</strong>
          <p>{activeChallenge.description}</p>
        </main>
        <footer>
          <button
            type="button"
            className={styles.challengeFailedButton}
            onClick={handleChallengeFailed}
          >
            Falhei
          </button>
          <button
            type="button"
            className={styles.challengeSucceededButton}
            onClick={handleChallengeSucceeded}
          >
            Completei
          </button>
        </footer>
      </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="/icons/level-up.svg" alt="level up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
      
    </div>
  )
}
