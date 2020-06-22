import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer"



//initial sate
const initialState = {
    transactions:[
      { id: 1, text: 'expense 1', amount: -500 },
      { id: 2, text: 'pay 1',    amount: 600 },
      { id: 3, text: 'expense 2', amount:400 },
      { id: 4, text: 'pay 2',     amount: 70 }
 
    ]
}
// creatcontext
 export const GlobalContext = createContext(initialState);

// Provider component 
 export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function removeTransaction(id){
        dispatch({
            type: "REMOVE_TRANSACTION",
            payload: id 
        });
    }

    function addTransaction(transactions){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transactions
        });
    }

    return (
        <GlobalContext.Provider value ={{transactions: state.transactions,
        removeTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}
