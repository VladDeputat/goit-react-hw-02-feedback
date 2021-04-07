import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={styles.stat}>Good: {good}</p>
    <p className={styles.stat}>Neutral: {neutral}</p>
    <p className={styles.stat}>Bad: {bad}</p>
    <p className={styles.stat}>Total: {total}</p>
    <p className={styles.stat}>Positive feedback: {positivePercentage}</p>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
