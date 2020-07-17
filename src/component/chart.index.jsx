import React, { Component } from 'react';
import styles from '../styles.module.scss'
import ChartBodyComponent from './chart-body/chart-body.component'
import ChartHeaderComponent from './chart-header/chart-header.component'
import ChartFooterComponent from './chart-footer/chart-footer.component'
const ChartIndex = () =>{
  return (
    <React.Fragment>
      <ChartHeaderComponent/>
      <ChartBodyComponent/>
      <ChartFooterComponent/>
    </React.Fragment>
  )
}

export default ChartIndex
