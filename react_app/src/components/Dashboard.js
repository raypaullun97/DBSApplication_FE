import React from 'react'
import NavBar from "./NavBar"
import "./Dashboard.css"
import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
        <NavBar/>
        <div className="divsize">
            <Link to="/AccountBalance"><button className="button1">
                Account Balance
            </button></Link>
            <Link to="/ScheduleNewTransaction"><button className="button2">
                Schedule New Transaction
            </button></Link>
        </div>
    </div>
  )
}

export default Dashboard