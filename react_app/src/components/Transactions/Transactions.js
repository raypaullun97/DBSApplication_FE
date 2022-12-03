import React from "react";
import { TransactionContainer, AccountWrapper } from "./Transactions.styled";
import Transaction from "./Transaction";

const Transactions = (props) => {
  console.log(props.transactions);
  return (
    <div>
      <h1>All scheduled transactions</h1>
      <TransactionContainer>
        <AccountWrapper>
          Account number:{props.account.number} Account type:
          {props.account.type}
        </AccountWrapper>
        {props.transactions.map((transactions) => (
          <Transaction
            key={transactions.id}
            date={transactions.date}
            destination={transactions.destination}
            amount={transactions.amount}
          />
        ))}
      </TransactionContainer>
    </div>
  );
};

export default Transactions;
