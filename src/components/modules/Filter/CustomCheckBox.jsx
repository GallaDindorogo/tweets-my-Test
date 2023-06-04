import styles from './Filter.module.scss';

const CustomCheckbox = ({ selectedOption, handleOptionSelect }) => {
  const options = [
    { value: 'option1', label: 'show all' },
    { value: 'option2', label: 'follow' },
    { value: 'option3', label: 'followings' },
  ];

  return (
    <div className={styles.customCheckboxContainer}>
      {options.map(option => (
        <li key={option.value}>
          <label className={styles.customCheckbox}>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOption.includes(option.value)}
              onChange={() => handleOptionSelect(option.value)}
            />

            <span className={styles.label}>{option.label}</span>
          </label>
        </li>
      ))}
    </div>
  );
};

export default CustomCheckbox;
