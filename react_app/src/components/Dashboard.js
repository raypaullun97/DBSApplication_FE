import React from 'react'
import NavBar from "./NavBar"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>
        <NavBar/>
        <div className="divsize">
            <button className="button1">
                Testing
            </button>
            <button className="button2">
                Testing
            </button>
        </div>
    </div>
  )
}

export default Dashboard