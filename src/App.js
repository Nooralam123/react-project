
import './App.css';
import React,{useState} from 'react';
import NewExpense from './components/expenses/NewExpense';
import Expense from './components/expenses/Expense';

let dummyData = [
  {
    id:1,
    date: new Date(),
    title:"car insurance",
    amount:200
  },
  {
    id:2,
    date: new Date(),
    title:"TV price",
    amount:100
  },
  {
    id:3,
    date: new Date(),
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
