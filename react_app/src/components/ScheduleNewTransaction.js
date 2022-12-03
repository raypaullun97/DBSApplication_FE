import React from "react";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavigationBar from "./NavBar";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ScheduleNewTransaction = () => {
  // Using state to keep track of what the selected account number is
  const [account, setAccount] = useState("Account 1");
  const [newTransaction, setNewTransaction] = useState("");

  let accounts = [
    { label: "Account 1", value: "Account 1" },
    { label: "Account 2", value: "Account 2" },
    { label: "Account 3", value: "Account 3" },
  ];

  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  let handleFruitChange = (e) => {
    setAccount(e.target.value);
  };

  return (
    <div>
      {/* Displaying the value of fruit */}
      {/*account*/}
      <br />

      <select onChange={handleFruitChange}>
        <option value="Select Account"> -- Select a fruit -- </option>
        {/* Mapping through each accounts object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
        {accounts.map((account) => (
          <option value={account.value}>{account.label}</option>
        ))}
      </select>
    </div>
  );
};

export default ScheduleNewTransaction;
