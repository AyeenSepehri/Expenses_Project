import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"

function Chart(props) {

  //transform the object of number to an array of number
  const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)

  //take maximum of amounts and pull them from array with spread operatore
  const totalMaximum = Math.max(...dataPointsValue)
  
  return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint) => 
        (<ChartBar value={dataPoint.value} label={dataPoint.label} maxValue={totalMaximum} key={dataPoint.label}/>) )}
    </div>
  )
}

export default Chart