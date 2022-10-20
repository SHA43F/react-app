import React, {useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const expTitleChange = (event) => console.log(event.target.value);
    const expAmountChange = (event) => console.log(event.target.value);
    const expDateChange = (event) => console.log(event.target.value);

  return (
    <form className="expenses">
      <label className="expense-item">Expense Title</label>
      <input type="text" onChange={expTitleChange} />
      <label className="expense-item"> Expense Amount</label>
      <input type="number" onChange={expAmountChange}/>
      <label className="expense-item">Date</label>
      <input type="date" onChange={expDateChange}/>
      <br></br>
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
