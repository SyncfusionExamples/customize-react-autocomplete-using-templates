import React from 'react';
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns';
import {employees} from './data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 250
  }
  const customItems=(props:any)=>{
    return(
      <div>
        <img className='empImg' 
        src={'https://ej2.syncfusion.com/react/demos/src/combo-box/Employees/'+ props.EmployeeID+'.png'} alt=''/>
        <div className='ename'>{props.Name}</div>
        <div className='ejob'>{props.Designation}</div>
      </div>
    )
  }
  const customHeader=(props:any)=>{
    return(
      <div className='header'>
        <span>Photo</span>
        <span className='columnHeader'>Employee Info</span>
      </div>
    )
  }
  const customFooter=(props:any)=>{
    return(
      <div className='footer'>
        Add new items <span className='e-icons plus'></span>
      </div>
    )
  }
  return (
    <div style={divStyle}>
      <AutoCompleteComponent dataSource={employees} 
      noRecordsTemplate="No records available!!!"
      placeholder="Enter a name" itemTemplate={customItems}
      headerTemplate={customHeader} footerTemplate={customFooter}
      fields={{value:"Name"}}></AutoCompleteComponent>
    </div>
  );
}

export default App;
