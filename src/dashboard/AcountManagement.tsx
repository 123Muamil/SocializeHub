
import '../styles/accountManagement.css'
const AcountManagement = () => {
  return (
    <div className='container account-container'>
         <div className="row">
        <div className="col">
          <h4 className='account-title'>Billing & Payment</h4>
        </div>
      </div>
         <div className="row">
        <div className="col">
          <button type="button" className="btn logout-button"><span>Log Out</span></button>
        </div>
      </div>
        <div className='container settings-container'>
        <div className="row mt-4">
        <div className="col">
          <h5 className='accountSetting-title'>Admin Account Settings</h5>
          <button type="button" className="btn close-button"><span>Close Settings</span></button>
          <div className="mb-3">
            <label htmlFor="disputeReason" className="form-label">Change Password</label>
            <input type="text" placeholder='New Password' className="form-control refund-form-control" id="disputeReason" />
          </div>
          <div className="mb-3">
              <label htmlFor="selectPlan" className="form-label">Change Permissions</label>
              <select  className="form-select setting-select-option" id="selectPlan">
                <option>Select Permission Level</option>
                <option>Admin</option>
                <option>User</option>
              </select></div>
          <button type="button" className="btn save-button"><span>Save Changes</span></button>
        </div>
      </div>
        </div>
    </div>
  )
}

export default AcountManagement