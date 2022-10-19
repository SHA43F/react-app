import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'

const ExpenseItems = (props) => {
    const Deletion = () =>{
        console.log("Delete Button gets clicked")
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <ExpenseDetails amount={props.amount} />
            <button onClick={Deletion}>Delete</button>
        </Card>
    ) 
};

export default ExpenseItems;