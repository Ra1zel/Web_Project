import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/mentor-profiles/ProfilePage";
import Layout from "./components/mentorship-section/Layout";
import Navbar from "./components/Navbar";
import Auth from "./Pages/Auth";
import Collaboration from "./Pages/Collaboration";
import Home from "./Pages/Home";
import MentorProfile from "./Pages/MentorProfile";
import Pictures from "./Pages/Pictures";
import AuthContext from "./Store/Auth-Context";
import { useContext } from "react";
import Services from "./Pages/Services";
import PersonalityDev from "./Pages/PersonalityDev";
import StudentProfile from "./Pages/StudentProfile";
import CareerReg from "./Pages/CareerReg";
import NewStudentForm from "./Pages/NewStudentForm";
import RegisWalker from "./Pages/RegisWalker";
const App = () => {
  const authCtx = useContext(AuthContext);
  const type = authCtx.type;
  console.log(type);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div style={{ fontFamily: "Lato" }}>
            <Home />
            <Layout />
            <ProfilePage />
          </div>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/careers" exact>
          <Pictures />
        </Route>
        <Route path="/collaboration">
          <Collaboration />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/personalitydev">
          <PersonalityDev />
        </Route>
        {type === "Mentor/Counselor" && (
          <Route path="/profile">
            <MentorProfile />
          </Route>
        )}
        <Route path="/profile">
          <StudentProfile />
        </Route>
        <Route path="/careers/:carId" exact>
          <CareerReg />
        </Route>
        {type === "Student" && (
          <Route path="/newStudent">
            <NewStudentForm />
          </Route>
        )}
        <Route path="/newRegis">
          <RegisWalker />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
