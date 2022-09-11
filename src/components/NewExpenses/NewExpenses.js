import React , {useState} from 'react'
import ExpensesForm from './ExpensesForm'
import "./NewExpenses.css"

function NewExpenses(props) {
  //define a state for changeing the new expense window
  const [addExpenseBtn , setAddExpenseBtn] = useState(false)

    //take datas from form component
    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        }
        console.log(expenseData)
        props.addExpenses(expenseData)
        setAddExpenseBtn(false)
    }

    //function handler for changeing new expense window
    const changeNewExpenseWindow = () => {
      setAddExpenseBtn(true)
    }
    
    //define change state of add expense window
    const closeWindowHandler = () => {
      setAddExpenseBtn(false)
  }

  return (
    <div className='new-expense'>
        {!addExpenseBtn && <button onClick={changeNewExpenseWindow}>Add New Expense</button>}
        {addExpenseBtn && <ExpensesForm saveData={saveExpenseData} closeWindow = {closeWindowHandler}/>}
    </div>
  )
}

export default NewExpenses