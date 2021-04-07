const FeedbackOptions = (options, onLeaveFeedback) => (
  <>
    {options.map(option => (
      <button
        type="{button}"
        onClick={() => onLeaveFeedback(option)}
        className="{btn}"
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
