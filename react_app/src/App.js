// import logo from "./logo.svg";
// import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TasksPage from "./components/TasksPage";
import Login from "./components/SignIn";
import Register from "./components/Register";
import AccountBalance from "./components/AccountBalance";
import ScheduleNewTransaction from "./components/ScheduleNewTransaction";

function App() {
  return (
    <>
    <AccountBalance/>
      {/* <Router>
        <Routes>
          <Route exact path="/TasksPage" element={<TasksPage />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/" element={<Login />} /> */}
          <Route
            exact
            path="/ScheduleNewTransaction"
            element={<ScheduleNewTransaction />}
          />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
