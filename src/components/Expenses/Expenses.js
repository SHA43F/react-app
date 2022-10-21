import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItems from './ExpenseItems'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');
  const onFilterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  let content = []
  for(let i=0;i<props.data.length;i++)
  {
    let item = props.data[i]
    content.push(<ExpenseItems key={item.id} title={item.title} date={item.date} amount={item.amount} location={item.location}></ExpenseItems>)
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={onFilterChangeHandler} />
        {content}
    </Card>
  )
}

export default Expenses;