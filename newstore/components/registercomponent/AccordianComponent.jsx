'use client'
import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

function AccordianComponent(props) {
 const collapsedata = props.data.map((e,i)=>({
    key: i,
    label : e.header,
    children : <p>{e.data}</p>,
  }))
  console.log(collapsedata)
  return (
    
    <>
    
    
        <Collapse accordion 
        items= {collapsedata}
      
        
    />
        
      
    </>
  )
}

export default AccordianComponent



{/* <Panel header={e.header} key={i}>
          <p>{e.data}</p>
        </Panel> */}