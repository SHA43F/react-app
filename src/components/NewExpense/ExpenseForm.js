import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [updateTitle, enteredTitle] = useState("");
  const expTitleChange = (event) => {
    enteredTitle(event.target.value);
    console.log(updateTitle);
  };

  const [updateAmount, enteredAmount] = useState("");
  const expAmountChange = (event) => {
    enteredAmount(event.target.value);
    console.log(updateAmount);
  };

  const [updateDate, enteredDate] = useState("");
  const expDateChange = (event) => {
    enteredDate(event.target.value);
    console.log(updateDate);
  };

  return (
    <form>
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
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
