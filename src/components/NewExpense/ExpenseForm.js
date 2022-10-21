import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [updateTitle, enteredTitle] = useState("");
  const [updateAmount, enteredAmount] = useState("");
  const [updateDate, enteredDate] = useState("");

  const expTitleChange = (event) => {
    enteredTitle(event.target.value);
  };

  const expAmountChange = (event) => {
    enteredAmount(event.target.value);
  };

  const expDateChange = (event) => {
    enteredDate(event.target.value);
  };

  const submitFormExpense = (e) => {
    e.preventDefault();
    const submitExpenseData = {
      title: updateTitle,
      amount: updateAmount,
      date: updateDate,
    };
    console.log(submitExpenseData);
  };
  return (
    <form onSubmit={submitFormExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={expTitleChange} />
        </div>
        <div className="new-expense__control">
          <label> Expense Amount</label>
          <input type="number" onChange={expAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={expDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
