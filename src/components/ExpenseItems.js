import './ExpenseItems.css'

function ExpenseItems(){
    const date = new Date(2022, 9, 17);
    const title = 'ABC';
    const amount = 400;
    const location = 'IMAX';

    return (
        <div className='expense-item'>
            <div>{date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <div>At {location}</div>
            </div>
        </div>
    ) 
};

export default ExpenseItems;





// import './ExpenseItems.css'

// function ExpenseItems(props){
//     return (
//         <div className='expense-item'>
//             <div>{props.date.toISOString()}</div>
//             <div className='expense-item__description'>
//                 <h2>{props.title}</h2>
//                 <div className='expense-item__price'>{props.amount}</div>
//                 <div>At {props.location}</div>
//             </div>
//         </div>
//     ) 
// };

// export default ExpenseItems;