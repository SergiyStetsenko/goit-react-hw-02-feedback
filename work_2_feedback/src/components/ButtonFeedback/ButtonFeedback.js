import React from "react";
import FeedbackOptions from "../Button/Button";
import Statistics from "../ListFeed/ListFeed";
import Notification from "../Notification/Notification";
import styles from '../Button/Button.module.css'
import Section from "../Section/Section";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  heandleIncrement = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    const positiv = (this.state.good / total) * 100;
    return Math.round(positiv);
  };
  render() {
    return (
      <>
        <section title='Please leave feedback' className = {styles.section}>
          <FeedbackOptions onIncrement={this.heandleIncrement} />
        </section>
        {this.countTotalFeedback() ? (
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message='No feedback given'/>
        )}
      </>
    );
  }
}
export default Feedback;
