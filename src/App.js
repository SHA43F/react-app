import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
// import { useState } from "react";

const App = () => {
  const [expenses,setData] = useState([
    {
      id: "a1",
      title: "abc",
      date: new Date(2022, 5, 15),
      amount: 500,
      location: "IMAX",
    },
    {
      id: "a2",
      title: "def",
      date: new Date(2022, 5, 15),
      amount: 400,
      location: "Palani",
    },
    {
      id: "a3",
      title: "ghi",
      date: new Date(2022, 5, 15),
      amount: 300,
      location: "SVCS",
    }]
  );
  const addNewExpenseData = (data) =>{
    setData([data])
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseData} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
