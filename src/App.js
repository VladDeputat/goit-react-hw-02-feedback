import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(actState => ({ [option]: actState[option] + 1 }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const result = Math.round(
      (100 / this.countTotalFeedback()) * this.state.good,
    );
    return (this.countTotalFeedback() ? result : 0) + '%';
  }

  render() {
    return (
      (
        <FeedbackOptions
          options={('good', 'neutral', 'bad')}
          // options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      ),
      (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      )
    );
  }
}

export default App;
