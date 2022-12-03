import React from "react";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import NavigationBar from "./NavBar";
import Transaction from "./Transactions/Transaction";

const ScheduleNewTransaction = () => {
  // Using state to keep track of what the selected account number is
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState();
  const [payTo, setPayTo] = useState("");
  const [comments, setComments] = useState("");
  const [newTransaction, setNewTransaction] = useState("");

  let accounts = [
    { label: "Account 1", value: "Account 1" },
    { label: "Account 2", value: "Account 2" },
    { label: "Account 3", value: "Account 3" },
  ];

  // Using this function to update the state of account
  // whenever a new option is selected from the dropdown
  let handleAccountChange = (e) => {
    console.log(e.target.value);
    setAccount(e.target.value);
  };

  let handleAmountChange = (e) => {
    // only accept numbers and full stop
    let tempAmount = e.target.value;
    if (!tempAmount || tempAmount.match(/^\d{1,}(\.\d{0,4})?$/)) {
      setAmount(tempAmount);
    }
    console.log(amount);
  };

  let handlePayToChange = (e) => {
    console.log(e.target.value);
    setPayTo(e.target.value);
  };

  let handleComments = (e) => {
    console.log(e.target.value);
    setComments(e.target.value);
  };

  const submitNewTransaction = async () => {
    console.log("submit");
    try {
      // set new transaction as json
      setNewTransaction({
        AccountID: account,
        ReceivingAccountID: payTo,
        Date: Date(),
        TransactionAmount: parseFloat(amount),
        Comment: comments,
      });
      console.log(newTransaction);
    } catch (error) {}
  };

  return (
    <div>
      {/* Displaying the account number */}
      {/*account*/}
      <NavigationBar />
      <h1>Schedule New Transaction</h1>
      <br />
      <select onChange={handleAccountChange}>
        <option value="Select Account"> -- Select an account -- </option>
        {/* Mapping through each accounts object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
        {accounts.map((account) => (
          <option value={account.value}>{account.label}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <input
        type="text"
        placeholder="Pay to"
        value={payTo}
        onChange={handlePayToChange} // value is going to change to whatever is typed in
      />
      <input
        type="text"
        placeholder="Comments (if any)"
        value={comments}
        onChange={handleComments} // value is going to change to whatever is typed in
      />
      <button onClick={submitNewTransaction}>Submit</button>
    </div>
  );
};

export default ScheduleNewTransaction;
