import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={shortid.generate()}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
};