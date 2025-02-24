import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Dashboard = () => {

  const {transactions} = useContext(TransactionContext)

    const income = transactions.filter(transaction => transaction.amount > 0).reduce((p,c) => p + c.amount , 0)

    const expense = transactions.filter(transaction => transaction.amount < 0).reduce((p,c) => p + c.amount , 0)

    const balance = transactions.reduce((p,c) => p + c.amount , 0)


  return (
    <div className="row my-3 g-3">
    <div className="col-md-4 col-sm-12">
      <div className="card rounded-0 p-3 bg-success">
        <h1 className="display-6 text-light">Income</h1>
        <h1 className="display-5 text-light">{income}</h1>
      </div>

    </div>
    <div className="col-md-4 col-sm-12">
      <div className="card rounded-0 p-3 bg-danger">
        <h1 className="display-6 text-light">Expense</h1>
        <h1 className="display-5 text-light">{expense}</h1>
      </div>

    </div>
    <div className="col-md-4 col-sm-12">
      <div className="card rounded-0 p-3 bg-warning">
        <h1 className="display-6 text-light">Balance</h1>
        <h1 className="display-5 text-light">{balance}</h1>
      </div>

    </div>

  </div>
  )
}

export default Dashboard
