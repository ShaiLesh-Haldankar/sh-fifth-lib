import React from 'react'
import styles from '../../styles.module.scss'
import nextId from 'react-id-generator'
const ChartFooterComponent = () =>{
  return(
    <div className={styles.chartFooter}>
      <div className={styles.chartFooterLeft}>
        <button>Share</button>

      </div>
      <div className={styles.chartFooterRight}>
        {
          time.map(obj =>
            <button key = {obj.keyId}>{obj.name}</button>
          )
        }

      </div>

    </div>
  )
}
const time = [
  {keyId: nextId(), name: "1D"},
  {keyId: nextId(), name: "5D"},
  {keyId: nextId(), name: "1M"},
  {keyId: nextId(), name: "3M"},
  {keyId: nextId(), name: "6M"},
  {keyId: nextId(), name: "YTD"},
  {keyId: nextId(), name: "1Y"},
  {keyId: nextId(), name: "5Y"},
  {keyId: nextId(), name: "All"},
];

export default ChartFooterComponent
