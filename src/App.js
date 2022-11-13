
import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem';

function App() {
  let expenses = [
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
      amount:2000
    },
    {
      id:3,
      date: new Date(),
      title:"Food",
      amount:300
    },
  ]
  return (
    <div className="App">
      <h1>ExpenseItem</h1>
                 <ExpenseItem date={expenses[0].date}
                  title={expenses[0].title}
                  amount={expenses[0].amount}/>
                   <ExpenseItem date={expenses[1].date}
                  title={expenses[1].title}
                  amount={expenses[1].amount}/>
                   <ExpenseItem date={expenses[2].date}
                  title={expenses[2].title}
                  amount={expenses[2].amount}/>
    </div>
  );
}

export default App;
