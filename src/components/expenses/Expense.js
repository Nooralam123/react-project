import React,{useState} from 'react'
import FilterExpense from './FilterExpense';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
        <FilterExpense selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.item.map(expense => <ExpenseItem 
         key = {expense.id}
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
        />)}           
    </div>
  )
}

export default Expense