import MainContent from "./dashboard/MainContent";
// import Navbar from "./dashboard/Navbar"
import {Routes,Route,useLocation} from 'react-router-dom'
import UserManagement from "./dashboard/UserManagement";
import ManagerManagement from "./dashboard/ManagerManagement";
import AcountManagement from "./dashboard/AcountManagement";
import Activities from "./dashboard/Activities";
import Configuration from "./dashboard/Configuration";
import DocumentationForAdministrators from "./dashboard/DocumentationForAdministrators";
import HelpandSupport from "./dashboard/HelpandSupport";
import Monitoring from "./dashboard/Monitoring";
import PaymentControlling from "./dashboard/PaymentControlling";
import ReportAnalysis from "./dashboard/ReportAnalysis";
import Sidebar from "./dashboard/Sidebar";
import Notifications from "./dashboard/Notifications";
import './App.css'
import AddUser from "./dashboard/AddUser";
import AddManager from "./dashboard/AddManager";
import Navbar from "./dashboard/Navbar";
const App = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div  style={{ background: path === "/" ? '#111729' : ' #EFF6F9' }} >
   <div>
   <Sidebar/>
   </div>
    <div className="mainContent">
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path='/user' element={<UserManagement/>}/>
        <Route path='/manager' element={<ManagerManagement/>}/>
        <Route path='/account-management' element={<AcountManagement/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/settings' element={<Configuration/>}/>
        <Route path='/help-and-documentations' element={<DocumentationForAdministrators/>}/>
        <Route path='/help' element={<HelpandSupport/>}/>
        <Route path='/system-monitoring' element={<Monitoring/>}/>
        <Route path='/payment' element={<PaymentControlling/>}/>
        <Route path='/report' element={<ReportAnalysis/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/addmanager" element={<AddManager/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App