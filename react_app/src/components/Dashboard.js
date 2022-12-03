import React from 'react'
import NavBar from "./NavBar"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>
        <NavBar/>
        <div className="pagesize">
            <button className="button1">
                Testing
            </button>
            <button>
                Testing
            </button>
        </div>
    </div>
  )
}

export default Dashboard