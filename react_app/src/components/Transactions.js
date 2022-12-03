import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import NavBar from "./NavBar";

const Transactions = (props) => {
  const accountID = useParams();
  const DeleteHandler = (event) => {
    console.log(event.target.value);
    const ID = event.target.value;
    console.log(ID);
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

      <div>Account number:{accountID.id}</div>
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
                <button onClick={DeleteHandler} value={data.TransactionID}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Transactions;
