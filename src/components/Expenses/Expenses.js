import React , { useState } from 'react'
import ExpensesItem from './ExpensesItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {

    //state of drop down filter
    const [year , setYear] = useState("")

    //function of takeing datas of drop down filter
    const onYear = (years) => {
        setYear(years)
    }
    console.log(year)
    
    return (
        <Card className='expenses'>
            <ExpensesFilter yearValue = {year} yearPicker = {onYear} />
            <ExpensesItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpensesItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpensesItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpensesItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Card>
    )
}

export default Expenses