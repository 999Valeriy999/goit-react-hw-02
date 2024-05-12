import PropTypes from 'prop-types';
import { Button } from './FeedbackOptionsStyles';

const FeedbackOptions = ({ options, onButtonClick }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onButtonClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
