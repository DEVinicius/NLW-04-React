import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { completedChallenges } = useContext(ChallengesContext);
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{completedChallenges}</span>
        </div>
    );
}