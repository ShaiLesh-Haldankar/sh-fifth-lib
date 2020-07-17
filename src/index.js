import React from 'react'
import styles from './styles.module.scss'
import ChartIndex from './component/chart.index'
import ChartsContext from './context/charts.context'

export const TradingViewChart = ({ text }) => {
  // return <div className={styles.test}>Example Component: {text}</div>
  return (
    <ChartsContext>
      <div className={styles.main}>
        <div style={{ height: '100%', width: '100%' }}>
        <ChartIndex/>
        </div>
      </div>
    </ChartsContext>
  )
}
