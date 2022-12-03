import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"
import { Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const AccountBalance = () => {

    let data = require('./test.json')
    // const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3MDA1NDI1NywianRpIjoiZTYxY2UzZGEtYzJlYS00N2RmLWEwNWQtODQxYThkNDBjOTkyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkV4ZWN1dGl2ZURCUyIsIm5iZiI6MTY3MDA1NDI1NywiZXhwIjoxNjcwMDU1MTU3fQ.ZIhYSYFdbWw4d1qOfTa45bYhbYYRf5IaRBB97dx5Y7M"
    // const BASE_URL = "http://192.168.43.181:5000"; 
    // const [data, setData] = useState([]);

    // const fetchData = () => {
    //     const res = axios
    //     .post(BASE_URL, UserId=1)
    //     .then((response) => {
    //         console.log(response);
    //         setData(response.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // };

    // useEffect(() => {
    //     fetchData();
    //   }, []);

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
              <td><a href={"/ScheduledTransactions/"+data.AccountID}>{data.AccountID}</a></td>
              <td>{"$"}{data.AcccountBalance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default AccountBalance