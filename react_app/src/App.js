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
import Transactions from "./components/Transactions";
import ScheduleNewTransaction from "./components/ScheduleNewTransaction";
import AccountBalance from "./components/AccountBalance";
import Home from "./components/Home";
import SignIn from "./components/SignIn"
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/TasksPage" element={<TasksPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AccountBalance" element={<AccountBalance />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/Home" element={<Dashboard/>} />
          <Route path="/ScheduledTransactions/:id" element={<Transactions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
