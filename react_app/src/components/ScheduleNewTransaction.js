import React from "react";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavigationBar from "./NavBar";

const ScheduleNewTransaction = () => {
  return (
    <div className="container">
      <NavigationBar />
    </div>
  );
};

export default ScheduleNewTransaction;
