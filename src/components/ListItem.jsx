import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const LIstItem = ({transaction}) => {

    const {dispatch} = useContext(TransactionContext)

    const handleRemove = (id) => {
        dispatch ({
            type : "DELETE_TRANSACTION" , 
            payload : id ,
        })
    }

    const handleEdit = (transaction) => {
        dispatch ({
            type : "EDIT_TRANSACTION" , 
            payload : transaction ,
        })
    }



    return (
        <li className= "list-group-item bg-secondary text-light roundded-0">
            <h1 className="display-6">{transaction.text}</h1>
            <h1 className="display-5">{transaction.amount}</h1>
            <span className="float-end">
                <button className="btn btn-warning rounded-0 btn-sm mx-1"
                onClick={() => handleEdit(transaction)}>Edit</button>
                <button className="btn btn-danger rounded-0 btn-sm mx-1"
                onClick={() => handleRemove(transaction.id)} >Delete</button>
            </span>
        </li>
    )
}

export default LIstItem
