import React,{useState} from 'react'
import FilterExpense from './FilterExpense';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  })

  let expenseContent = <p>No content found</p>
  if(filterExpenses.length>0){
    expenseContent =  filterExpenses.map(expense => <ExpenseItem 
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
       />)
  }

  return (
    <div>
        <FilterExpense selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseContent}
                     
    </div>
  )
}

export default Expense