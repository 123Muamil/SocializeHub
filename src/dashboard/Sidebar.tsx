import {useState} from 'react'
import '../styles/Sidebar.css'
import { NavLink } from 'react-router-dom';

const adminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false); // Define and use 'collapsed'
    const [isDashboardVisible, setIsDashboardVisible] = useState(false);
    const [isUserManagementVisisble,setisUserManagementVisisble]=useState(false)
    const [isManagerManagementVisisble,setisManagerManagementVisisble]=useState(false)
    const [isSupporandHelpVisisble,setisSupporandHelpVisisble]=useState(false)
    const[ isPaymentandSubscriptionVisible,setisPaymentandSubscriptionVisible]=useState(false)
    const [isContentTemplatesVisible,setisContentTemplatesVisible]=useState(false)
    const[isReportandAnalyticsVisible,setisReportandAnalyticsVisible]=useState(false)
    const [isSettingsVisible,setisSettingsVisible]=useState(false)
    const [isAllActivitiesVisible,setisAllActivitiesVisible]=useState(false)
    const [isLogoutandAccountManagementVisible,setisLogoutandAccountManagementVisible]=useState(false)
    const [isSystemHealthMonitoringVisible,setisSystemHealthMonitoringVisible]=useState(false)
    const [isNotificationsVisible,setisNotificationsVisible]=useState(false)
    const [isHelpandDocumentationVisible,setisHelpandDocumentationVisible]=useState(false)
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
      };
      const toggleDashboard = () => {
        setIsDashboardVisible(!isDashboardVisible);
      };
      const toggleUserManagement=()=>{
        setisUserManagementVisisble(!isUserManagementVisisble)
      }
      const toggleSupportandHelp=()=>{
          setisSupporandHelpVisisble(!isSupporandHelpVisisble)
      }
      const toggleManagerManagement=()=>{
        setisManagerManagementVisisble(!isManagerManagementVisisble)
      }
      const togglePaymentandSubscription=()=>{
        setisPaymentandSubscriptionVisible(!isPaymentandSubscriptionVisible)
      }
      const toggleContentTemplates=()=>{
        setisContentTemplatesVisible(!isContentTemplatesVisible)
      }
      const toggleReportandAnalytics=()=>{
        setisReportandAnalyticsVisible(!isReportandAnalyticsVisible)
      }
      const toggleSettings=()=>{
        setisSettingsVisible(!isSettingsVisible)
      }
      const toggleAllActivities=()=>{
        setisAllActivitiesVisible(!isAllActivitiesVisible)
      }
      const toggleLogoutandAccountManagement=()=>{
        setisLogoutandAccountManagementVisible(!isLogoutandAccountManagementVisible)
      }
      const toggleSystemHealthMonitoring=()=>{
        setisSystemHealthMonitoringVisible(!isSystemHealthMonitoringVisible)
      }
      const toggleNotifications=()=>{
        setisNotificationsVisible(!isNotificationsVisible)
      }
      const toggleHelpandDocumentation=()=>{
        setisHelpandDocumentationVisible(!isHelpandDocumentationVisible)
      }
   
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
    <div className="toggle-button" onClick={toggleSidebar}>
      <i className={`bi ${collapsed ? 'bi-caret-right' : 'bi-caret-left'}`}></i>
    </div>
    <nav>
    <ul className="list-unstyled">
       {/* Dashboard */}
       <li>
            <div className={`dashboard ${isDashboardVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header " onClick={toggleDashboard}>
        <div className='nav-link'>
          <i className="bi bi-house-door"></i>
          Dashboard
        </div>
      <div className='icon' >
      <i
          className={`bi ${
            isDashboardVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      </div>
      {isDashboardVisible && (
        <div className="dashboard-main">
          <NavLink to='/'>Main</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* User Management */}
          <li>
            <div className={`dashboard ${isUserManagementVisisble ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleUserManagement}>
        <div className='nav-link'>
        <i className={`bi bi-person`}></i>
          User Management
        </div>
        <i
          className={`bi ${
        isUserManagementVisisble ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isUserManagementVisisble && (
        <div className="dashboard-main">
          <NavLink to='/user'>Users</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* Manager Management */}
          <li>
            <div className={`dashboard ${isManagerManagementVisisble ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleManagerManagement}>
        <div className='nav-link'>
        <i className={`bi bi-people`}></i>
          Manager Management
        </div>
        <i
          className={`bi ${
            isManagerManagementVisisble ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isManagerManagementVisisble && (
        <div className="dashboard-main">
          <NavLink to='/manager'>Manager Actions</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* Help & Support Desk */}
          <li>
            <div className={`dashboard ${isSupporandHelpVisisble ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleSupportandHelp}>
        <div className='nav-link'>
        <i className={`bi-question-circle`}></i>
          Support & Help Desk
        </div>
        <i
          className={`bi ${
            isSupporandHelpVisisble ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isSupporandHelpVisisble && (
        <div className="dashboard-main">
          <NavLink to='/help'>Users all queires</NavLink>
        </div>
      )}
    </div>
            </li>
 {/* Help & Support Desk */}
 <li>
            <div className={`dashboard ${isPaymentandSubscriptionVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={togglePaymentandSubscription}>
        <div className='nav-link'>
        <i className={`bi bi-credit-card`}></i>
          Payment and Subscription
        </div>
        <i
          className={`bi ${
            isPaymentandSubscriptionVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isPaymentandSubscriptionVisible && (
        <div className="dashboard-main">
          <NavLink to='/payment'>Payment Records</NavLink>
        </div>
      )}
    </div>
            </li>
          {/* Content Templates */}
          <li>
            <div className={`dashboard ${isContentTemplatesVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleContentTemplates}>
        <div className='nav-link'>
        <i className={`bi bi-file-earmark-text`}></i>
          Content Templates 
        </div>
        <i
          className={`bi ${
            isContentTemplatesVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isContentTemplatesVisible && (
        <div className="dashboard-main">
          <NavLink to='/'>Manage templates</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* Report & Analytics */}
          <li>
            <div className={`dashboard ${isReportandAnalyticsVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleReportandAnalytics}>
        <div className='nav-link'>
        <i className={`bi bi-bar-chart-line`}></i>
          Report & Analytics
        </div>
        <i
          className={`bi ${
            isReportandAnalyticsVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isReportandAnalyticsVisible && (
        <div className="dashboard-main">
          <NavLink to='/report'>Reporting and Analytics</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* Settings */}
          <li>
            <div className={`dashboard ${isSettingsVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleSettings}>
        <div className='nav-link'>
        <i className={`bi bi-gear`}></i>
          Settings 
        </div>
        <i
          className={`bi ${
            isSettingsVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isSettingsVisible && (
        <div className="dashboard-main">
          <NavLink to='/settings'>Settings and Analytics</NavLink>
        </div>
      )}
    </div>
            </li>
          {/* All Activities */}
          <li>
            <div className={`dashboard ${isAllActivitiesVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleAllActivities}>
        <div className='nav-link'>
        <i className={`bi bi-journal`}></i>
          All Activities 
        </div>
        <i
          className={`bi ${
            isAllActivitiesVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isAllActivitiesVisible && (
        <div className="dashboard-main">
          <NavLink to='/activities'>Users & Managers</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* Logout and Account Management */}
          <li>
            <div className={`dashboard ${isLogoutandAccountManagementVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleLogoutandAccountManagement}>
        <div className='nav-link'>
        <i className={`bi bi-box-arrow-right`}></i>
          Logout and Account Management
        </div>
        <i
          className={`bi ${
            isLogoutandAccountManagementVisible? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isLogoutandAccountManagementVisible && (
        <div className="dashboard-main">
          <NavLink to='/account-management'>Manager Profile</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* System Health Monitoring */}
          <li>
            <div className={`dashboard ${isSystemHealthMonitoringVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleSystemHealthMonitoring}>
        <div className='nav-link'>
        <i className={`bi bi-heart`}></i>
          System Health Monitoring
        </div>
        <i
          className={`bi ${
            isSystemHealthMonitoringVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isSystemHealthMonitoringVisible && (
        <div className="dashboard-main">
          <NavLink to='/system-monitoring'> System Health Monitoring</NavLink>
        </div>
      )}
    </div>
            </li>
          {/* Notifications */}
          <li>
            <div className={`dashboard ${isNotificationsVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleNotifications}>
        <div className='nav-link'>
        <i className={`bi bi-bell`}></i>
          Notifications
        </div>
        <i
          className={`bi ${
            isNotificationsVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isNotificationsVisible && (
        <div className="dashboard-main">
          <NavLink to='/notifications'>Notifications</NavLink>
        </div>
      )}
    </div>
            </li>

          {/* Help and Documentation */}
          <li>
            <div className={`dashboard ${isHelpandDocumentationVisible ? 'open' : 'closed'}`}>
      <div className="dashboard-header" onClick={toggleHelpandDocumentation}>
        <div className='nav-link'>
        <i className={`bi bi-question-circle`}></i>
          Help and Documentation
        </div>
        <i
          className={`bi ${
            isHelpandDocumentationVisible ? 'bi-chevron-up' : 'bi-chevron-down'
          } toggle-icon`}
        ></i>
      </div>
      {isHelpandDocumentationVisible && (
        <div className="dashboard-main">
          <NavLink to='/help-and-documentations'>Help</NavLink>
        </div>
      )}
    </div>
            </li>
      
      </ul>
    </nav>
  
  </div>
  )
}

export default adminSidebar
