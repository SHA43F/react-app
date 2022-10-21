import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const addNewExpenseElement = (enteredExpenseData) =>{
        const submitExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(submitExpenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm addNewExpense={addNewExpenseElement} />
        </div>
    )
}

export default NewExpense;