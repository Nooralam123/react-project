
import './App.css';
import React,{useState} from 'react';
import NewExpense from './components/expenses/NewExpense';
import Expense from './components/expenses/Expense';

let dummyData = [
  {
    id:1,
    date: new Date("2020-03-22"),
    title:"car insurance",
    amount:200
  },
  {
    id:2,
    date: new Date("2021-06-8"),
    title:"TV price",
    amount:100
  },
  {
    id:3,
    date: new Date("2019-05-26"),
    title:"Food",
    amount:300
  },
]

function App() {
const [expenses , setExpenses] = useState(dummyData)

  
 
const AddExpenseHandler = (expense)=>{
 setExpenses(preExpense =>{
   return [expense, ...preExpense]
 })
}


  return (
    <div className="App">
      <h1>ExpenseItem</h1>
                 <NewExpense onAddExpense={AddExpenseHandler}/>
                 <Expense item={expenses} />              
    </div>
  );
}

export default App;
