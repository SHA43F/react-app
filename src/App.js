import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import Expenses from './components/Expenses/Expenses'

const App = () => {
  const data = [
    {
      id: 'a1',
      title: 'abc',
      date: new Date(2022, 5, 15),
      amount: 500,
      location: 'IMAX'
    },
    {
      id:'a2',
      title: 'def',
      date: new Date(2022, 5, 15),
      amount: 400,
      location: 'Palani'
    },
    {
      id:'a3',
      title: 'ghi',
      date: new Date(2022, 5, 15),
      amount: 300,
      location: 'SVCS'
    }
  ]
  return (
    <div>
      <ExpenseForm />
      <Expenses data={data} />
    </div>
  );
}

export default App;
