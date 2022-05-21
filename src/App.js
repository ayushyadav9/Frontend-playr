import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./tailwind.css"
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration"
import Tournament from "./pages/Tournaments/Tournament";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tables from "./pages/Dashboard/Tables";
import Billing from "./pages/Dashboard/Billing";
import Rtl from "./pages/Dashboard/Rtl";
import Profile from "./pages/Dashboard/Profile";
import Photos from "./pages/Dashboard/Photos";
import SignUp from "./pages/Dashboard/SignUp";
import SignIn from "./pages/Dashboard/SignIn";
import Main from "./components/DashboardLayout/Main";
import "antd/dist/antd.min.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Scout from "./pages/Scout/Scout";
import { Table } from "antd";
import TourDetails from "./pages/Tournaments/TourDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/tournaments" element={<Tournament/>}/>
        <Route exact path="/tournaments/:id" element={<TourDetails/>}/>
        <Route exact path="/scout" element={<Scout/>}/>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/scout" element={<Scout />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Main>
              <Dashboard />
            </Main>
          }
        />
        <Route
          exact
          path="/tables"
          element={
            <Main>
              <Table />
            </Main>
          }
        />
        <Route
          exact
          path="/billing"
          element={
            <Main>
              <Billing />
            </Main>
          }
        />
        <Route
          exact
          path="/rtl"
          element={
            <Main>
              <Rtl />
            </Main>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Main>
              <Profile />
            </Main>
          }
        />
        <Route
          exact
          path="/photos"
          element={
            <Main>
              <Photos />
            </Main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
