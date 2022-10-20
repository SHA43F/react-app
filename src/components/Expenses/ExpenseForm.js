import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <Card className="expenses">
      <h2 className="expense-item">Expense Title</h2>
      <input type="text" title="expTitle" />
      <h2 className="expense-item"> Expense Amount</h2>
      <input type="number" title="expAmount" />
      <h2 className="expense-item">Date</h2>
      <input type="date" title="expDate" />
      <br></br>
      <button>Add Expense</button>
    </Card>
  );
};

export default ExpenseForm;
