import React from "react";
import { TransactionCard } from "./Transactions.styled";
import TransactionDate from "./TransactionDate";

const Transaction = (props) => {
  console.log(props);
  return (
    <TransactionCard>
      <TransactionDate date={props.date}></TransactionDate>
      <div destination={props.destination} />
      <div amount={props.amount} />
    </TransactionCard>
  );
};
export default Transaction;
