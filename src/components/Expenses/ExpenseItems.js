import React, { useState } from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'

const ExpenseItems = (props) => {
    let [amount, setAmount] = useState(props.amount)
    const clickHandler = () =>{
        setAmount(100);
        console.log(amount);
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <ExpenseDetails amount={amount} />
            <button onClick={clickHandler}>Change Amount</button>
        </Card>
    ) 
};

export default ExpenseItems;