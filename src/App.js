import React from 'react';
import './App.css';
import Header from "./Header.js"
import Balance from "./Balance.js"
import IncomeOutcome from "./IncomeOutcome.js"
import Transaction  from "./Transaction"
import AddTransaction from "./AddTransaction"
import {GlobalProvider} from  "./GlobalState";

function App() {
  return (
   
    <GlobalProvider >
      <Header/>
      <div className="container">
      <Balance></Balance>
      <IncomeOutcome></IncomeOutcome>
      <Transaction></Transaction>
      <AddTransaction/>
      </div>

    </GlobalProvider>
    
  );
}

export default App;
