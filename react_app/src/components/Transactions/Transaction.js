import React from "react";
import { TransactionCard } from "./Transactions.styled";

const Transaction = (props) => {
  return <TransactionCard>{props.date}</TransactionCard>;
};

export default Transaction;
