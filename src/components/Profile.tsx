import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vitalves.png" alt="Profile"/>
      <div>
        <strong>Vital Alves</strong>
        <p>
          <img src="/icons/level.svg" alt="level" /> 
          Level 1
        </p>
      </div>
    </div>
  )
}
