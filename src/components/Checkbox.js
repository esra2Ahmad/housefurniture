import React from 'react'
import { useState } from 'react'

const Checkbox = ({label,Checked,...props}) => {
    const defaultChecked = Checked ? Checked : false;
    const[isChecked,setIsChecked]=useState(defaultChecked)
  return (
    <div className=" checkbox-wraper">
    <label>
      <input type="checkbox" Checked={isChecked} onChange={() => setIsChecked(defaultChecked)} {...props}/>
      <span>{label}</span>
    </label>
  </div>
  )
}

export default Checkbox;