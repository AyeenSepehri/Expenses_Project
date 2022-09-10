import React from 'react'
import ExpensesItem from './ExpensesItem'
import "./ExpensesList.css"

function ExpensesList(props) {
    //define warning of empty items of a year
    let expensesContent = <p>No expenses found!</p>
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback' >{expensesContent}</h2>
    }

  return (
    <ul className='expenses-list'>
        {props.items.map(expenses => 
            <ExpensesItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />
        )}
    </ul>
  )
}

export default ExpensesList