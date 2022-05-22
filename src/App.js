import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./tailwind.css";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Tournament from "./pages/Tournaments/Tournament";
import Dashboard from "./pages/Dashboard/Dashboard";
import Billing from "./pages/Dashboard/Billing";
import Rtl from "./pages/Dashboard/Rtl";
import Profile from "./pages/Dashboard/Profile";
import Photos from "./pages/Dashboard/Photos";
import SignIn from "./pages/Dashboard/SignIn";
import DashboardMain from "./components/DashboardLayout/Main";
import OrganizerMain from "./components/Organizer/Main";
import "antd/dist/antd.min.css";
import Scout from "./pages/Scout/Scout";
import Forum from "./pages/DiscussionForum/Forum";
import { Table } from "antd";
import TourDetails from "./pages/Tournaments/TourDetails";
import Login from "./pages/Registration/Login";
import TournamentRegistration from "./pages/Organizer/Registration";
import Organize from "./pages/Organizer/Organize";
import OngoingTournament from "./pages/Organizer/OngoingTournament";
import Brackets from "./components/TournamentBrackets/Brackets";
import TournamentUpdate from "./pages/Organizer/TournamentUpdate";
import UpdateMatchResult from "./pages/Organizer/UpdateMatchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/tournaments" element={<Tournament />} />
        <Route exact path="/tournaments/:id" element={<TourDetails />} />
        <Route exact path="/scout" element={<Scout />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/discussion-forums" element={<Forum />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/brackets" element={<Brackets />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route
          exact
          path="/dashboard"
          element={
            <DashboardMain>
              <Dashboard />
            </DashboardMain>
          }
        />
        <Route
          exact
          path="/tables"
          element={
            <DashboardMain>
              <Table />
            </DashboardMain>
          }
        />
        <Route
          exact
          path="/billing"
          element={
            <DashboardMain>
              <Billing />
            </DashboardMain>
          }
        />
        <Route
          exact
          path="/rtl"
          element={
            <DashboardMain>
              <Rtl />
            </DashboardMain>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <DashboardMain>
              <Profile />
            </DashboardMain>
          }
        />
        <Route
          exact
          path="/photos"
          element={
            <DashboardMain>
              <Photos />
            </DashboardMain>
          }
        />
        <Route
          exact
          path="/organize"
          element={
            <OrganizerMain>
              <Organize />
            </OrganizerMain>
          }
        />
        <Route
          exact
          path="/ongoing-tournament"
          element={
            <OrganizerMain>
              <OngoingTournament />
            </OrganizerMain>
          }
        />
        <Route
          exact
          path="/onspot-registration"
          element={
            <OrganizerMain>
              <TournamentRegistration />
            </OrganizerMain>
          }
        />

        <Route
          exact
          path="/ongoing-tournament/:id"
          element={
            <OrganizerMain>
              <TournamentUpdate />
            </OrganizerMain>
          }
        />

        <Route
          exact
          path="/ongoing-tournament/:tid/:mid"
          element={
            <OrganizerMain>
              <UpdateMatchResult />
            </OrganizerMain>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
