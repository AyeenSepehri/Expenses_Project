import React, { useState } from 'react'
import ExpensesItem from './ExpensesItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {

    //state of drop down filter
    const [year, setYear] = useState("")

    //function of takeing datas of drop down filter
    const onYear = (years) => {
        setYear(years)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter yearValue={year} yearPicker={onYear} />
            {props.items.map(expenses => <ExpensesItem title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
        </Card>
    )
}

export default Expenses