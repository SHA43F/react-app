import './App.css';
import ExpenseItems from './components/Expenses/ExpenseItems';
import Card from './components/UI/Card'

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
  let content = []
  for(let i=0;i<data.length;i++)
  {
    let item = data[i]
    content.push(<ExpenseItems title={item.title} date={item.date} amount={item.amount} location={item.location}></ExpenseItems>)
  }
  return (
    <Card>
      <h2>Expense Items!</h2>
      <body>
        {content}
      </body>
    </Card>
  );
}

export default App;
