import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"

function Chart() {
  return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint) => 
        <ChartBar value={dataPoint.value} label={dataPoint.label} maxValue={null} key={dataPoint.label}/> )}
    </div>
  )
}

export default Chart