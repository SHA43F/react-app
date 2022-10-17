import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  return (
    <div>
      <h2>Expense Items!</h2>
      <body>
        <ExpenseItems></ExpenseItems>
      </body>
    </div>
  );
}

export default App;







// import './App.css';
// import ExpenseItems from './components/ExpenseItems';

// function App() {
//   const data = [
//     {
//       title: 'abc',
//       date: new Date(2022, 5, 15),
//       amount: 500,
//       location: 'IMAX'
//     },
//     {
//       title: 'def',
//       date: new Date(2022, 5, 15),
//       amount: 400,
//       location: 'Palani'
//     },
//     {
//       title: 'ghi',
//       date: new Date(2022, 5, 15),
//       amount: 300,
//       location: 'SVCS'
//     }
//   ]
//   let content = []
//   for(let i=0;i<data.length;i++)
//   {
//     let item = data[i]
//     content.push(<ExpenseItems title={item.title} date={item.date} amount={item.amount} location={item.location}></ExpenseItems>)
//   }
//   return (
//     <div>
//       <h2>Expense Items!</h2>
//       <body>
//         {content}
//       </body>
//     </div>
//   );
// }

// export default App;
