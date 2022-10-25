import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const expTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const expAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const expDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitFormExpense = (e) => {
    e.preventDefault();
    const submitExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.addNewExpense(submitExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitFormExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" value={enteredTitle} onChange={expTitleChange} />
        </div>
        <div className="new-expense__control">
          <label> Expense Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={expAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={expDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
