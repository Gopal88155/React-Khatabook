import React, { useContext, useEffect, useState } from 'react'
import TransactionContext from '../context/TransactionContext'

const Form = () => {

    const { dispatch, edit } = useContext(TransactionContext)


    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        !edit.isEdit ? dispatch({
            type: "ADD_TRANSACTION",
            payload: { id: crypto.randomUUID(), text, amount: +amount }
        }) : dispatch({
            type: "UPDATE_TRANSACTION",
            payload: { id: edit.transaction.id, text, amount: +amount }
        })

        setText("")
        setAmount("")
    }

    useEffect(() => {
        setText(edit.transaction.text)
        setAmount(edit.transaction.amount)
    }, [edit])

    return (
        <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
            <input type="text"
                className="form-control rounded-0 my-2"
                placeholder="Enter Transaction"
                value={text}
                onChange={e => setText(e.target.value)}
                required />

            <input type="number"
                className="form-control rounded-0 my-2"
                placeholder="Enter Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                required />

            <button className="btn btn-success w-100 rounded-0 mt-3" >Save Transaction</button>
        </form>
    )
}

export default Form
