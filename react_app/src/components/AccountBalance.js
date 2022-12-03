import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"
import { Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

function AccountBalance() {
  return (
    <div style={{ color: "black" }}>
      <NavBar />
      <h1>Account Balance</h1>
      <Table striped bordered hover style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Account Type</th>
            <th>Account Number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{ color: "white" }}>
              <td>Account name</td>
              <td>Account Type</td>
              <td>$Amount</td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AccountBalance