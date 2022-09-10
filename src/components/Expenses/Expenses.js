import React, { useState } from 'react'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

function Expenses(props) {

    //state of drop down filter
    const [year, setYear] = useState("all")

    //function of takeing datas of drop down filter
    const onYear = (years) => {
        setYear(years)
    }

    //define a function for filtering items with drop down
    const filteredExpenses = props.items.filter((expenses) => {
        if(year === "all"){
            return expenses
        }else{
            return expenses.date.getFullYear().toString() === year
        }
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter yearValue={year} yearPicker={onYear} />
            <ExpensesList items = {filteredExpenses}/>
        </Card>
    )
}

export default Expenses