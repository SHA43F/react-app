import './App.css';
import Expenses from './components/Expenses/Expenses'

const App = () => {
  const data = [
    {
      title: 'abc',
      date: new Date(2022, 5, 15),
      amount: 500,
      location: 'IMAX'
    },
    {
      title: 'def',
      date: new Date(2022, 5, 15),
      amount: 400,
      location: 'Palani'
    },
    {
      title: 'ghi',
      date: new Date(2022, 5, 15),
      amount: 300,
      location: 'SVCS'
    }
  ]
  return (
    <div>
      <h2>Expense Items!</h2>
      <Expenses data={data} />
    </div>
  );
}

export default App;
