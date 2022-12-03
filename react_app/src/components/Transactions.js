import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";

const Transactions = (props) => {
  const BASE_URL = "http://172.20.10.2:5000";
  const accountID = useParams();
  const [errMsg, setErrMsg] = useState("");
  const DeleteHandler = async (event) => {
    const ID = event.target.value;
    console.log(ID);
    try {
      const response = await axios.post(BASE_URL + "/deleteTransaction/", {
        TransactionID: ID,
      });
    } catch (err) {
      setErrMsg(err.message);
    }
  };
  const transactionData = [
    {
      TransactionID: 1,
      AccountID: 621156213,
      ReceivingAccountID: 339657462,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 500.0,
      Comment: "Monthly Pocket Money",
    },
    {
      TransactionID: 2,
      AccountID: 958945214,
      ReceivingAccountID: 621156213,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 8996.0,
      Comment: "School Fees",
    },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <h1>View Scheduled Transactions</h1>
      {errMsg && (
        <div
          style={{
            "background-color": "lightpink",
            color: "firebrick",
            "font-weight": "bold",
            padding: "0.5rem",
            "margin-bottom": "0.5rem",
          }}
        >
          {errMsg}
        </div>
      )}
      <h2>Account number:{accountID.id}</h2>
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
              {console.log(Date(data.Date).toString().slice(4, 24))}
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
  );
};

export default Transactions;
