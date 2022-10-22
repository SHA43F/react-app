import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  if (props.items.length > 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expenses) => (
          <ExpenseItems
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
            location={expenses.location}
          />
        ))}
      </ul>
    );
  }
  else if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expenses) => (
          <ExpenseItems
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
            location={expenses.location}
          />
        ))}
        <h2 className="expenses-list__fallback"> Only single Expense here. Please add more...</h2>
      </ul>
    );
  }
  return <h2 className="expenses-list__fallback">Null Expenses</h2>;
};

export default ExpensesList;
