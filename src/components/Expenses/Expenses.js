import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteresExpenseYear = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p className="null-expense">Null Expenses</p>;
  if (filteresExpenseYear.length > 0) {
    expensesContent = filteresExpenseYear.map((expenses) => (
      <ExpenseItems
        key={expenses.id}
        title={expenses.title}
        date={expenses.date}
        amount={expenses.amount}
        location={expenses.location}
      />
    ));
  }
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={onFilterChangeHandler}
      />
      {expensesContent}
      {filteresExpenseYear.length === 1 && (
        <p className="null-expense">
          Only single Expense here. Please add more...
        </p>
      )}
    </Card>
  );
}

export default Expenses;
