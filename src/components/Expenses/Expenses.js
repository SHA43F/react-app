import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={onFilterChangeHandler}
      />
      {props.items.map((expenses) => (
        <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
          location={expenses.location}
        />
      ))}
    </Card>
  );
}

export default Expenses;
