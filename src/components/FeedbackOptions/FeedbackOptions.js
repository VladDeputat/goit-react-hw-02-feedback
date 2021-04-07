import styles from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      className={styles.btn}
    >
      {option}
    </button>
  ));

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
