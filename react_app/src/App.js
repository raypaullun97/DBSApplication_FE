// import logo from "./logo.svg";
// import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TasksPage from "./components/TasksPage";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/TasksPage" element={<TasksPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<SignIn />} />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
