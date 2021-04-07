import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
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
      <>
        <Section
          title={'Please leave your feedback'}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />

        <Section
          title={'Statistics'}
          children={
            this.countTotalFeedback() < 1 ? (
              <Notification message={'No feedback given'} />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )
          }
        />
      </>
    );
  }
}

export default App;
