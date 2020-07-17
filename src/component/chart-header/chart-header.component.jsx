import React, { Component ,useEffect, useState, useContext,useRef} from 'react'
import styles from '../../styles.module.scss'
import { Charts } from '../../context/charts.context';
import nextId from 'react-id-generator'
import { add, dropdown, edit, message, search, upDown } from '../../assets/export-images'
import HeaderDropdownComponent from './dropdown/header-dropdown.component'
const ChartHeaderComponent = () =>{
  const charts = useContext(Charts);
  const drop = useRef();
  const [selectAction, setSelectAction] = useState({id: ''});
  const [selectDropdown, setSelectDropdown] = useState({});

  useEffect(()=>{
    window.addEventListener('click', handleCLick)
  },[]);
  const handleCLick = (e) =>{
    if(drop.current === null || !drop.current)
      return '';
    else if(drop.current.contains(e.target)){

    }else{
      setSelectDropdown({});
    }
  };
  return (
    <div className={styles.chartHeaderMain}>
      <div className={styles.chartHeader}>
        <div className={styles.chartHeaderLeft}>
          <div>
            <input placeholder="Enter Symbol"/>
            <img src={search}/>
          </div>
          <div>
            {
              icons.map(obj => <span key={obj.id}><img src={obj.img}/></span>)
            }
          </div>
        </div>
        <div className={styles.chartHeaderRight}>
          <div ref={drop} className={styles.chartHeaderRightDropdown}>
            {
              dropDown.map(obj =>
                <span
                  onClick={() => obj.keyId === selectDropdown.keyId ? setSelectDropdown({}) : setSelectDropdown(obj)}
                  key={obj.keyId}>
                                {charts[obj.state]}<img alt="" src={dropdown}/>
                                <div
                                  className={selectDropdown.keyId === obj.keyId ? styles.dropdownContainer : styles.dropdownContainerHide}>
                                    {/*<HeaderDropdownComponent type={obj.type}/>*/}
                                  <HeaderDropdownComponent type={obj.type}/>
                                </div>
                            </span>)
            }

          </div>
          <div className={styles.chartHeaderRightLogo}>
            <img src={upDown}/>

          </div>
        </div>


      </div>
    </div>
  )

}

const icons = [
  {id: nextId(), img: edit},
  {id: nextId(), img: add},
  {id: nextId(), img: message}
];

const dropDown = [
  {keyId: nextId(), name: "1W", type: "time", state: "timeChart"},
  {keyId: nextId(), name: "Views", type: "views", state: "viewChart"},
  {keyId: nextId(), name: "Studies", type: "study", state: "studiesChart"},
  {keyId: nextId(), name: "Display", type: "display", state: "displayChart"},
  {keyId: nextId(), name: "Events", type: "events", state: "eventsChart"},
];
export default ChartHeaderComponent
