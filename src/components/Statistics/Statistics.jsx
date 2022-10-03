import PropTypes from 'prop-types';

export default function Statistics({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
     <div>
      <h3>{title}</h3>
      <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
      </div>
      <div>
        <div>Total feedbacks: {total}</div>
        <div>Positive feedback: {positivePercentage}%</div>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};