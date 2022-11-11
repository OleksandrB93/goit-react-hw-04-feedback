import React, { useState } from "react";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";
import FeedbackOption from "components/FeedbackOption/FeedbackOption";
import Section from "components/Section/Section";
import StatisticsTitle from "components/StatisticsTitle/StatisticsTitle";
import { FeedbackContainer } from "components/Feedback/Feedback.styled";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0);

  const onClickBtn = (options) => {
    switch (options) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setbad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const goodPercent = () => {
    return Math.round((good / totalFeedback()) * 100) || 0;
  };

  const options = { good: "good", neutral: "neutral", bad: "bad" };

  return (
    <FeedbackContainer options={options} goodPercent={goodPercent()}>
      <Section title="Please leave feedback" goodPercent={goodPercent()}>
        <FeedbackOption options={options} onLeaveFeedback={onClickBtn} />
      </Section>

      <section>
        <StatisticsTitle title="Statistics 📖" />
        {totalFeedback() ? (
          <div>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              goodPercent={goodPercent()}
            />
          </div>
        ) : (
          <Notification message="There is no feedback 😔" />
        )}
      </section>
    </FeedbackContainer>
  );
}
