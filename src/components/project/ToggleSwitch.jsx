import React, { useState } from 'react'
import './ToggleSwitch.css'
import { FaToggleOn } from "react-icons/fa";


const ToggleSwitch = () => {
  const [ison, setIsOn] = useState(false)


  const handleToggleSwitch = () => {
    setIsOn(!ison)
  }
  return (
    <>
      <h1>Toggle Switch <FaToggleOn style={{ color: "red" }} />
      </h1>
      <div className='toggle-switch'
        style={{ backgroundColor: ison ? "#4caf50" : "#f44336" }}
        onClick={handleToggleSwitch}>
        <div className={`switch ${ison ? "on" : "off"}`}>
          <span className='switch-state'>{ison ? "on" : "off"}</span>
        </div>



      </div>
    </>

  )
}

export default ToggleSwitch;