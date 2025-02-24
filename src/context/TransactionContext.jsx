import { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

const TransactionContext = createContext()

export const TransactionProvider = ({children}) => {

const initialState = {
    transactions : [{id : 1 , text : "salary" , amount : 1000000}] ,
    edit : {transaction : {} , isEdit : false}  
}
    
    const [state , dispatch] = useReducer(TransactionReducer , initialState)


    return (
        <TransactionContext.Provider value={{...state ,dispatch }}>
            {children}
        </TransactionContext.Provider>
    )
}




export default TransactionContext