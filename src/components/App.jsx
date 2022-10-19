import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const states = { good, neutral, bad };

  const stateKeys = Object.keys(states);

  const handleFeedbackСlick = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100);
  };

    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={handleFeedbackСlick}
          />

          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  };   


// import { Component } from 'react';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };


//   stateKeys = Object.keys(this.state);

//   options = this.stateKeys;

//     handleFeedbackСlick = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//    countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const totalFeedback = this.countTotalFeedback();
//     const goodFeedback = this.state.good;
//     let result = 0;

//     if (totalFeedback > 0) {
//       result = Math.round((goodFeedback / totalFeedback) * 100);
//     }

//     return `${result}`;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div>
//         <Section title="Please, leave feedback">
//           <FeedbackOptions
//             options={this.stateKeys}
//             onLeaveFeedback={this.handleFeedbackСlick}
//           />

//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               title="Statistics"
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }   


// };