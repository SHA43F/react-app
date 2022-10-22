import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItems = (props) => {
    // const [amount, setAmount] = useState(props.amount)
    // const clickHandler = () =>{
    //     setAmount(100);
    //     console.log(amount);
    // }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}$</div>
            {/* <button onClick={clickHandler}>Change Amount</button> */}
        </Card>
    ) 
};

export default ExpenseItems;