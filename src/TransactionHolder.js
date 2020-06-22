import React, {useContext} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext} from "./GlobalState";
export const TransactionHolder = ({transaction}) => {
  const { removeTransaction} =useContext(GlobalContext);
   // Get sign
   const sign = transaction.amount < 0 ? '-' : '+';
    return (
        
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
          {transaction.text}<span>{sign}PKR{Math.abs(transaction.amount)}</span>
          <button onClick={() =>removeTransaction(transaction.id)} className="delete-btn">Delete</button>
        </li> 
    )
}
