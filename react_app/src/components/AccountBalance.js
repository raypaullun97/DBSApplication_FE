import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"
import { Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from 'react-router-bootstrap';



const AccountBalance = () => {

    function LinkFormatter(value, row, index) {
        return "<a href='/'>"+value+"</a>";
      }

    let data = require('./test.json') 
    // const [data, setData] = useState([]);
    let test = data.find(el => el.AccountID == 958945214)
    console.log(test["AccountType"])

    const fetchData = () => {
        // const res = axios
        // .post(url)
        // .then((response) => {
        //     console.log(response);
        //     setData(response.data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    };
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
        {data.map((data) => (
            <tr style={{ color: "black" }}>
              <td>{data.AccountType}</td>
              <td><a href="/ScheduledTransactions/">{data.AccountID}</a></td>
              <td>{"$"}{data.AcccountBalance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default AccountBalance