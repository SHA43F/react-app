import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [updateTitle, enteredTitle] = useState("");
  // const [updateAmount, enteredAmount] = useState("");
  // const [updateDate, enteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const expTitleChange = (event) => {
    // enteredTitle(event.target.value);
    // console.log(updateTitle);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        enteredTitle: event.target.value,
      };
    });
  };

  const expAmountChange = (event) => {
    // enteredAmount(event.target.value);
    // console.log(updateAmount);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        enteredAmount: event.target.value,
      };
    });
  };

  const expDateChange = (event) => {
    // enteredDate(event.target.value);
    // console.log(updateDate);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        enteredDate: event.target.value,
      };
    });
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
