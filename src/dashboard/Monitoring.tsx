
import '../styles/Monitoring.css'
const Monitoring = () => {
  return (
    <div className='container monitoring-container'>
         <div className="row">
    <div className="col">
      <h4 className='monitoring-title'>Settings and Configuration</h4>
    </div>
  </div>
  <div className='container server-status-container'>
   
    
  <p className='online'>Server Status: Online</p>
      </div>
      <div className='container database-status-container'>
      <p className='connected'>Database Status: Connected</p>
      </div>
      <div className='container api_Integration-container'>
      <div className="row">
        <div className="col">
          <h4 className='platform-title'>API Integrations</h4>
        </div>
      </div>
    
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0 text1">Integration 1</p>
        <button className="btn button1"><span>Connected</span></button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0 text2">Integration 1</p>
        <button className="btn button2"><span>Disconnected</span></button>
      </div>
      </div>
    </div>
  )
}

export default Monitoring