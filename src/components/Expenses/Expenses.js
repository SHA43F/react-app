import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItems from './ExpenseItems'

function Expenses(props){
  let content = []
  for(let i=0;i<props.data.length;i++)
  {
    let item = props.data[i]
    content.push(<ExpenseItems title={item.title} date={item.date} amount={item.amount} location={item.location}></ExpenseItems>)
  }
  return (
    <Card className='expenses'>
        {content}
    </Card>
  )
}

export default Expenses;