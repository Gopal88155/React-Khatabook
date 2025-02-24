const TransactionReducer = (state, action) => {
    switch (action.type) {

        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }

        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case "EDIT_TRANSACTION":
            return {
                ...state,
                edit : {transaction : action.payload , isEdit : true }
            }

            case "UPDATE_TRANSACTION":
            return {
                ...state,
                transactions : state.transactions.map(item => item.id === action.payload.id  ? action.payload : item), 
                edit : {transaction : {} , isEdit : false }
            }


    }

}


export default TransactionReducer