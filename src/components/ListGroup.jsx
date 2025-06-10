import React,{useContext} from 'react'
import ListItem from './ListItem'
import TransactionContext from '../context/TransactionContext'

const ListGroup = () => {

    const {transactions} = useContext(TransactionContext)

    return (
        <ul className="list-group my-3">

            {transactions.map((transaction) => (
                <ListItem key={transaction.id} transaction={transaction} />
            )) }

        </ul>

    )
}

export default ListGroup
