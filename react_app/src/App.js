// import logo from "./logo.svg";
// import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TasksPage from "./components/TasksPage";
// import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ScheduleNewTransaction from "./components/ScheduleNewTransaction";
import AccountBalance from "./components/AccountBalance";
import Home from "./components/Home";
import AccountDetails from "./components/AccountDetails";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <AccountBalance />
      <ScheduleNewTransaction />
      {/* <Router>
        <Routes>
          <Route path="/TasksPage" element={<TasksPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AccountBalance" element={<AccountBalance />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/accountdetails" element={<AccountDetails/>} />
          <Route exact path="/TasksPage" element={<TasksPage />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/ScheduleNewTransaction"
            element={<ScheduleNewTransaction />}
          />
          <Route
            exact
            path="/Transactions"
            element={
              <Transactions
                account={{ number: 123, type: "Savings" }}
                transactions={[
                  { id: 9, date: "1-1-22", destination: 234, amount: 5 },
                ]}
              />
            } */}
      {/* /> */}
      {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
      {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
