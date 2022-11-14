import React from 'react'

const FilterExpense = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
    
      return (
        <div className='expenses-filter' style={{margin:"10px 0"}}>
          <div className='expenses-filter__control'>
            <label><b>Filter by year</b></label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
}

export default FilterExpense