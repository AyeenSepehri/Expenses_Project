import React , { useState } from 'react'
import "./ExpensesForm.css"

function ExpensesForm(props) {
    //states of onchange inputs goes here
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount , setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    //define state and on change functions of inputs
    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    //define submit handler for inputs
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
        props.saveData(expenseData)
    }
     
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={AmountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={DateChangeHandler} />
            </div>
        </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expenses</button>
            </div>
    </form>
  )
}

export default ExpensesForm