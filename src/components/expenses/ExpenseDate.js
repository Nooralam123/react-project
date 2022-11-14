import React from 'react'

const ExpenseDate = (props) => {
    
    const month = props.date.toLocaleString("en-US",{month:"long"});
    const day = props.date.toLocaleString("en-US",{day:"2-digit"})
    const year = props.date.getFullYear();
  return (
    <div>
    <div>
        <div><b>{month}</b></div>
        <div><b>{day}</b></div>
        <div><b>{year}</b></div>
        </div>
        </div>
  )
}

export default ExpenseDate