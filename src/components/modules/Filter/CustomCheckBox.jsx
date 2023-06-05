import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

const RadioButtons = ({ options, selectedOption, handleOptionSelect }) => {
  return (
    <div className={styles.customCheckboxContainer}>
      {options.map(option => (
        <li key={option.value}>
          <label className={styles.customCheckbox}>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleOptionSelect(option.value)}
            />
            <span className={styles.label}>{option.label}</span>
          </label>
        </li>
      ))}
    </div>
  );
};

RadioButtons.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleOptionSelect: PropTypes.func.isRequired,
};

export default RadioButtons;
