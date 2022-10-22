import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpenseButton, setButtonCondition] = useState(false);

  const addNewExpenseElement = (enteredExpenseData) => {
    const submitExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(submitExpenseData);
    setFormHandler(false);
  };

  const onAddExpenseHandler = () => {
    setButtonCondition(true);
  };

  const setFormHandler = () => {
    setButtonCondition(false);
  };
  return (
    <div className="new-expense">
      {!addExpenseButton && (
        <button onClick={onAddExpenseHandler}>Add New Expense</button>
      )}
      {addExpenseButton && (
        <ExpenseForm
          addNewExpense={addNewExpenseElement}
          onCancel={setFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
