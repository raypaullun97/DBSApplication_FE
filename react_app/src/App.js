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
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/AccountBalance" element={<AccountBalance />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/accountdetails" element={<AccountDetails />} />
          <Route exact path="/" element={<SignIn />} />
          <Route path="/ScheduleNewTransactions" element={<ScheduleNewTransaction/>}/>
          <Route path="/ScheduledTransactions/:id" element={<Transactions />} />
          <Route
            path="ScheduleNewTransaction"
            element={<ScheduleNewTransaction />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
