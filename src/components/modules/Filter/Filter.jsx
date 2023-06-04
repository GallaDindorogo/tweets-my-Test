import React, { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { getRequestParams } from 'redux/filter/filterSelectors';
// import { setRequestParams } from 'redux/filter/requestParamsSlice';

import styles from './Filter.module.scss';
import CustomCheckbox from './CustomCheckBox';
import Btn from 'shared/Button/Button';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('show all');
  //   const dispatch = useDispatch();

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    if (selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter(val => val !== option));
    } else {
      setSelectedOption([...selectedOption, option]);
    }
  };

  //   const requestParams = useSelector(getRequestParams);
  //   const selectedOption = requestParams.selectedOption;

  //   const handleOptionSelect = option => {
  //     dispatch(setRequestParams({ ...requestParams, selectedOption: option }));
  //   };

  return (
    <div className={styles.dropdownContainer}>
      <Btn onClick={handleFilterClick}>Filter</Btn>
      {isOpen && (
        <div className={styles.optionsContainer}>
          <CustomCheckbox
            isOpen={isOpen}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
