import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title)
    const addExpense = () => {
       setTitle("Update!")
    }

  return (
    <>
    <div>
        <ExpenseDate date={props.date} />
        <div className='expense_discription'>
            <h4>{title}</h4>
        </div>
        <div className='expense_amount'>
            <h4>{props.amount}</h4>
        </div>
    </div>
    <button onClick={addExpense}>add item</button>
    </>
  )
}

export default ExpenseItem