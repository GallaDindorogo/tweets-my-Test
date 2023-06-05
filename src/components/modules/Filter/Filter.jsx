import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.scss';
import RadioButtons from './CustomCheckBox';
import Btn from 'shared/Button/Button';
import { setFilterOption } from 'redux/Filter/filterSlice';
import { options } from './options';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('show all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterOption(selectedOption));
  }, [dispatch, selectedOption]);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    if (selectedOption === option) {
      setSelectedOption('');
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <Btn onClick={handleFilterClick}>Filter</Btn>
      {isOpen && (
        <div className={styles.optionsContainer}>
          <RadioButtons
            options={options}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
