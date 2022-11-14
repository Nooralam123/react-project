import React from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
   

  return (
    <>
    <div style={{display:"flex" , justifyContent:"space-around", border:"2px solid black",
               marginBottom:"10px", marginLeft:"15%",
                 marginTop:"10px", width:"70%"}}>
        <ExpenseDate date={props.date} />
        <div className='expense_discription'>
            <h4>{props.title}</h4>
        </div>
        <div className='expense_amount'>
            <h4>{props.amount}</h4>
        </div>
    </div>
    </>
  )
}

export default ExpenseItem