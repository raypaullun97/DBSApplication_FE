import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import NavigationBar from "./NavBar";
import axios from "axios";

const ScheduleNewTransaction = () => {
  // Using state to keep track of what the selected account number is
  const [accountType, setAccountType] = useState();
  const [amount, setAmount] = useState();
  const [payTo, setPayTo] = useState();
  const [payeeAccount, setPayeeAccount] = useState();
  const [comments, setComments] = useState("Bank transfer");

  // start: get accounts

  // SENDER
  // get UserID
  let data1 = require("./User.json");

  // const res = axios
  // .post(url)
  // .then((response) => {
  //     console.log(response);
  //     setData(response.data);
  // })
  // .catch((err) => {
  //     console.log(err);
  // });

  let UserID = data1.filter(
    (element) => element.Username === "ExecutiveDBS"
  )[0]["UserID"];
  //   console.log(UserID);

  // get account types from user ID
  let data2 = require("./test.json");

  // const res = axios
  // .post(url)
  // .then((response) => {
  //     console.log(response);
  //     setData(response.data);
  // })
  // .catch((err) => {
  //     console.log(err);
  // });

  let accountTypes = data2.filter((element) => element.UserID === UserID);
  //   console.log(accountTypes);
  //   console.log(accountTypes["AccountType"]);

  // end: get accounts

  // Using this function to update the state of account
  // whenever a new option is selected from the dropdown
  let handleAccountTypeChange = (e) => {
    console.log(e.target.value);
    setAccountType(e.target.value);
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

  let handlepayeeAcountChange = (e) => {
    console.log(e.target.value);
    setPayTo(e.target.value);
  };

  let handleComments = (e) => {
    console.log(e.target.value);
    setComments(e.target.value);
  };

  const submitNewTransaction = async () => {
    console.log("submit");
    console.log({
      AccountID: accountType,
      ReceivingAccountID: payTo,
      Date: Date(),
      TransactionAmount: parseFloat(amount),
      Comment: comments,
    });
    try {
      // set new transaction as json
      axios
        .post("http://192.168.43.181:5000/addtransaction", {
          AccountID: accountType,
          ReceivingAccountID: payTo,
          Date: Date(),
          TransactionAmount: parseFloat(amount),
          Comment: comments,
        })
        .then((response) => {
          console.log(response);
          // filterTransaction(credentials.custID);
        });
    } catch (error) {}
  };

  return (
    <div className="scheduleNewTransaction">
      {/* Displaying the account number */}
      {/*account*/}
      <NavigationBar />
      <h1>Schedule New Transaction</h1>
      <br />
      <select onChange={handleAccountTypeChange}>
        <option value="Select Account"> -- Select an account -- </option>
        {/* Mapping through each accountTypes object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
        {accountTypes.map((accountType) => (
          <option value={accountType.AccountID}>
            {accountType.AccountType + " " + accountType.AccountID}
          </option>
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
