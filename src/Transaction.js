import React, {useContext} from 'react';
import {GlobalContext} from "./GlobalState";
import {TransactionHolder} from "./TransactionHolder.js"


export const Transaction = () => {
  const {transactions} =useContext(GlobalContext);
    return (
        <div>
         <h3>History</h3>
      <ul  className="list">
        {transactions.map(transaction =>(
        <TransactionHolder key= {transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
        
    )
}
export default Transaction;