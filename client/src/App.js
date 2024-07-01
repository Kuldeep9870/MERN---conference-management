import Firstpage from "./components/Firstpage";
import{Route,BrowserRouter as Router ,Routes} from 'react-router-dom'
import Usertype from "./components/Usertype";
import Users from "./components/Users";
import Admin from "./Admin";
import Register from "./components/UserComp/Register"
import UserDash from "./components/UserComp/Dashboard"
import AdminDash from "./components/AdminComp/Dashboard"
import NewEntry from "./components/AdminComp/NewEntry";
import UserRegister from "./components/UserComp/UserRegister"
import Manage from "./components/AdminComp/Manage";
import View from "./components/AdminComp/View";
import Feedback from "./components/UserComp/Feedback";
import ViewReg from "./components/UserComp/ViewReg";


function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/"  element={<Usertype/>}/>
        <Route path="/users"  element={<Users/>}/>
        <Route path="/user-register"  element={<UserRegister/>}/>
        <Route path="/admin"  element={<Admin/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/userdashboard"  element={<UserDash/>}/>
        <Route path="/admindashboard"  element={<AdminDash/>}/>
        <Route path="/new-event"  element={<NewEntry/>}/>
        <Route path="/manage"  element={<Manage/>}/>
        <Route path="/view"  element={<View/>}/>
        <Route path="/feedback"  element={<Feedback/>}/>
        <Route path="/viewreg"  element={<ViewReg/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;














// Develop an application to manage conferences. Users should be able to register for conferences, view schedules, and submit feedback. Admins should be able to manage conference details and registrations. Save all data to a database
