import {useState} from 'react'
import '../styles/configuration.css'
const Configuration = () => {
    const [isCheckedEamil, setIsCheckedEamil] = useState(true);
    const [isCheckedNotification, setIsCheckedNotification] = useState(true);
    const [isEnableTwoFactorAuthentication,setisEnableTwoFactorAuthentication]=useState(true)
    const [isEnableFacebookGraphAPIIntegration,setisEnableFacebookGraphAPIIntegration]=useState(true)
    const handleCheckEmailChange = () => {
        setIsCheckedEamil(!isCheckedEamil);
    };
    const handleCheckNotificationChange=()=>{
        setIsCheckedNotification(!isCheckedNotification)
    }
    const handleEnableTwoFactorAuthentication=()=>{
        setisEnableTwoFactorAuthentication(!isEnableTwoFactorAuthentication)
    }
    const handleEnableFacebookGraphAPIIntegration=()=>{
        setisEnableFacebookGraphAPIIntegration(!isEnableFacebookGraphAPIIntegration)
    }
  return (
    <div className='container configuration-container'>
        <div className="row">
        <div className="col">
          <h4 className='configuration-title'>Settings and Configuration</h4>
        </div>
      </div>
      <div className='container plateform-setting-container'>
      <div className="row mt-4">
        <div className="col">
          <h5 className='platform-title'>Platform Settings
</h5>
<div className="mb-3">
              <label htmlFor="selectPlan" className="form-label">Default Time Zone:</label>
              <select  className="form-select configuration-select" id="selectPlan">
                <option>UTS</option>
                <option>EST</option>
            
              </select></div>
              <div className="mb-3">
              <label htmlFor="selectPlan" className="form-label">Language:</label>
              <select  className="form-select configuration-select" id="selectPlan">
                <option>English</option>
                <option>Spanish</option>
               
              </select></div>
             
        </div>
      </div>
      <div className="row mt-4">
  <div className="col cols">
    <label className='label'>Notification Preferences:</label>
    <br/>
    <label className="icon-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={isCheckedEamil}
        onChange={handleCheckEmailChange}
      />
       Email
    </label>
    &nbsp;&nbsp;&nbsp;
    <label className="icon-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={isCheckedNotification}
        onChange={handleCheckNotificationChange}
      />
     Push Notifications
    </label>
  </div>
</div>

      </div>
      <div className='container security-setting-container'>
      <div className="row">
        <div className="col">
          <h4 className='platform-title' style={{marginTop:"20px"}}>Security Settings</h4>
        </div>
      </div>
      <div className="row mt-4">
  <div className="col cols">
   
 
    <label className="icon-check mb-2">
    Enable Two-Factor Authentication:
      <input
        type="checkbox"
        className="form-check-input mx-1"
        checked={isEnableTwoFactorAuthentication}
        onChange={handleEnableTwoFactorAuthentication}
      />
    
    </label>
    <div className="mb-3 d-flex align-items-center text-center">
            <label htmlFor="disputeReason" className="form-label">Password Expiry (Days):</label>
            <input type="text" placeholder='90' className="form-control expiry-input " id="disputeReason" />
          </div>
  </div>
  
</div>
      </div>
      <div className='container apiIntegration-container'>
      <div className="row">
        <div className="col">
          <h4 className='platform-title' style={{marginTop:'20px'}}>API Integration Settings</h4>
        </div>
      </div>
      <div className="row mt-4">
  <div className="col cols">
   
 
    <label className="icon-check mb-2">
    Enable Facebook Graph API Integration:
      <input
        type="checkbox"
        className="form-check-input mx-1"
        checked={isEnableFacebookGraphAPIIntegration}
        onChange={handleEnableFacebookGraphAPIIntegration}
      />
    
    </label>
    <div className="mb-3">
            <label htmlFor="disputeReason" className="form-label">Facebook App ID:</label>
            <input type="text" className="form-control " id="disputeReason" />
          </div>
          <div className="mb-3">
            <label htmlFor="disputeReason" className="form-label">Facebook App Secret:</label>
            <input type="text" className="form-control " id="disputeReason" />
          </div>
          <div className='mb-3'>
          <button type="button" className="btn Submit-button"><span>Submit</span></button>
          </div>
  </div>
  
</div>
      </div>
        </div>
  )
}

export default Configuration