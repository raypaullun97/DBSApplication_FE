import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";
import "./Transactions.css";

const Transactions = (props) => {
  const BASE_URL = "http://192.168.43.181:5000";
  const accountID = useParams().id;
  const [errMsg, setErrMsg] = useState("");
  //const [transactionData, setTransactionData] = useState([]);
  // comment out API integration
  /* onst getTransactionData = async (event) => {
    try {
      const response = await axios.get(
        BASE_URL + "/transaction/" + "accountID:" + accountID
      );
      console.log("get transaction data");
      console.log(response.data);
      setTransactionData(response.data);
      return response.data;
    } catch (err) {
      setErrMsg(err.message);
    }
  }; */
  //console.log(getTransactionData());
  const DeleteHandler = async (event) => {
    const ID = event.target.value;
    console.log(ID);
    try {
      const response = await axios.get(BASE_URL + "/ft/" + ID);
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  /* useEffect(() => {
    getTransactionData();
  }); */

  useEffect(() => {
    setErrMsg("");
  }, []);

  const transactionData = [
    {
      AccountID: 621156213,
      Comment: "testing",
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: "200.00",
      TransactionID: 6,
    },
    {
      AccountID: 621156213,
      Comment: "testing2",
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: "100.00",
      TransactionID: 7,
    },
    {
      AccountID: 621156213,
      Comment: "testing3",
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: "600.00",
      TransactionID: 8,
    },
    {
      AccountID: 621156213,
      Comment: "ffff",
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: "600.00",
      TransactionID: 9,
    },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="wrapper">
        <h1>View Scheduled Transactions</h1>
        {errMsg && (
          <div
            style={{
              backgroundColor: "lightpink",
              color: "firebrick",
              fontWeight: "bold",
              padding: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            {errMsg}
          </div>
        )}
        <h2>Account number:{accountID}</h2>
        <Table striped bordered hover style={{ color: "black" }}>
          <thead>
            <tr style={{ color: "black" }}>
              <th>Date</th>
              <th>Receiving Account</th>
              <th>Comment</th>
              <th>Amount</th>
              <th>Delete Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((data) => (
              <tr style={{ color: "black" }}>
                <td>{Date(data.Date).toString().slice(4, 24)}</td>
                <td>{data.ReceivingAccountID}</td>
                <td>{data.Comment}</td>
                <td>
                  {"$"}
                  {data.TransactionAmount}
                </td>
                <td>
                  {/* <a href={"/deleteTransaction/" + data.TransactionID}> */}
                  <button onClick={DeleteHandler} value={data.TransactionID}>
                    Delete
                  </button>
                  {/* </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
