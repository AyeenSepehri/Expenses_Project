import React from 'react'
import ExpensesForm from './ExpensesForm'
import "./NewExpenses.css"

function NewExpenses(props) {

    //take datas from form component
    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        }
        console.log(expenseData)
        props.addExpenses(expenseData)
    }
    
  return (
    <div className='new-expense'>
        <ExpensesForm saveData={saveExpenseData} />
    </div>
  )
}

export default NewExpenses