import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'

const ExpenseItems = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            {/* <ExpenseDetails title={props.title} /> */}
            <ExpenseDetails amount={props.amount} />
        </Card>
    ) 
};

export default ExpenseItems;