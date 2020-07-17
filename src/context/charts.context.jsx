import React, {Component, createContext } from 'react'
export const Charts = createContext()
class ChartsContext extends Component {
  state = {
    displayChart: "Mountain",
    timeChart: "1 D",
    viewChart: "Views",
    studiesChart: "Studies",
    eventsChart: "Events"
  };
  setDisplayChart = (value) =>{
    this.setState({displayChart: value})
  };
  setTimeChart = (value) =>{
    this.setState({timeChart: value})
  };
  render() {
    return (
      <Charts.Provider
          value = {{
            ...this.state,
            setDisplayChart: this.setDisplayChart,
            setTimeChart: this.setTimeChart
          }}
      >
        {this.props.children}

      </Charts.Provider>
    )
  }
}

export default ChartsContext
