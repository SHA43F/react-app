import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const dummyExpenses = [
  {
    id: "a1",
    title: "abc",
    date: new Date(2021, 5, 15),
    amount: 500,
    location: "IMAX",
  },
  {
    id: "a2",
    title: "def",
    date: new Date(2020, 6, 29),
    amount: 400,
    location: "Palani",
  },
  {
    id: "a3",
    title: "ghi",
    date: new Date(2022, 2, 14),
    amount: 300,
    location: "SVCS",
  },
  {
    id: "a4",
    title: "pqr",
    date: new Date(2021, 8, 20),
    amount: 900,
    location: "PICS",
  }
];

const App = () => {
  const [expenses, setNewExpense] = useState(dummyExpenses);

  const addNewExpenseData = (expense) => {
    setNewExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
