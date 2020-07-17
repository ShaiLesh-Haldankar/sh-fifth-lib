import React,{useContext,useState,useEffect} from 'react';
import { Charts } from '../../../context/charts.context'
import styles from '../../../styles.module.scss'
import nextId from 'react-id-generator'
const HeaderDropdownComponent = ({type}) =>{
  const [list, setList] = useState([]);
  useEffect(()=>{
    switch (type) {
      case "time": setList([...time]); break;
      case "views": setList([...views]); break;
      case "study": setList([]); break;
      case "display": setList([...chartStyle]); break;
      case "events": setList([...events]); break;
      default: return;
    }
  },[type]);
  useEffect(()=>{
    console.log(type, list)
  },[type, list]);

  const charts = useContext(Charts);
  const {setDisplayChart,setTimeChart} = charts;
  const handleClick = (value) =>{
    switch (type) {
      case "time": setTimeChart(value); break;
      case "views":  break;
      case "study":  break;
      case "display": setDisplayChart(value); break;
      case "events":  break;
      default: return;
    }
  };
  return(
    <div className={styles.headerDropdown}>
      {
        list.map(obj => <h6
          onClick={() => handleClick(obj.value)}
          key={obj.keyId}>
          {obj.value}
        </h6>)
      }
    </div>
  )
}
const time = [
  {keyId: nextId(), value: "1 D"},
  {keyId: nextId(), value: "1 W"},
  {keyId: nextId(), value: "1 Mo"},
  {keyId: nextId(), value: "30 Sec"},
  {keyId: nextId(), value: "1 Min"},
  {keyId: nextId(), value: "5 Min"},
  {keyId: nextId(), value: "10 Min"},
  {keyId: nextId(), value: "15 Min"},
  {keyId: nextId(), value: "30 Min"},
  {keyId: nextId(), value: "1 Hour"},
  {keyId: nextId(), value: "4 Hour"},
];

const views = [
  {keyId: nextId(), value: "Saved Views"}
];
const chartStyle = [
  {keyId: nextId(), value: "Candle"},
  {keyId: nextId(), value: "Bar"},
  {keyId: nextId(), value: "Mountain"}
];

const events = [
  {keyId: nextId(), value: "Simple Square"},
  {keyId: nextId(), value: "Simple Cicle"},
  {keyId: nextId(), value: "Callouts"},
  {keyId: nextId(), value: "Trade"},
  {keyId: nextId(), value: "Video"},
  {keyId: nextId(), value: "Abstract"},
];

export default HeaderDropdownComponent
