import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  // const contextData = useContext(ChallengesContext);
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  //console.log(contextData);
  //const hasActiveChallenge = true;

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
            onClick={resetChallenge}
          >
            Falhei
          </button>
          <button
            type="button"
            className={styles.challengeSucceededButton}
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
