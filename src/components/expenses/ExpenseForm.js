import React,{useState} from 'react'

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState("")
    const [enterAmount , setEnterAmount] = useState("")
    const [enterDate, setEnterDate] = useState("")
    
         const titleChangeHandler = (event) => {
            setEnterTitle(event.target.value)
         }
    
         const amountChangeHandler = (event) => {
              setEnterAmount(event.target.value)
         }
    
         const dateChangeHandler = event => {
             setEnterDate(event.target.value)
         }
    
         const submitForm = (event) => {
            event.preventDefault()
    
            const expenseData = {
                title:enterTitle,
                amount:enterAmount,
                date:new Date(enterDate)
            }
            console.log(expenseData)
            props.saveExpenseData(expenseData)
            setEnterTitle('')
            setEnterAmount('')
            setEnterDate('')
         }
     
    
      return (
        <div >
            <form onSubmit={submitForm} style={{display:"flex",justifyContent
        :"center"}}>
                <div>
                <label>Title</label>
                <input type="text" value={enterTitle}  onChange={titleChangeHandler} />
                </div>
                <div>
                <label>Amount</label>
                <input type="Number" min="10" max="1000" value={enterAmount} onChange={amountChangeHandler} />
                </div>
                <div>
                <label>Date</label>
                <input type="date" value={enterDate} onChange={dateChangeHandler} />
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
      )
    }

export default ExpenseForm
