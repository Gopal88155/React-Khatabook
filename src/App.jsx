import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { TransactionProvider } from './context/TransactionContext'

const App = () => {


  return (
    <TransactionProvider>

     <Navbar/>
      <div className="container p-5">
        <Dashboard />
        <Form />
        <ListGroup />
      </div>

    </TransactionProvider>
  )
}

export default App
