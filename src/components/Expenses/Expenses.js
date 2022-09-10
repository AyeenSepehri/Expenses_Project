import React, { useState } from 'react'
import ExpensesItem from './ExpensesItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

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
            {filteredExpenses.map(expenses => <ExpensesItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
        </Card>
    )
}

export default Expenses