import { useState } from 'react'
import '../styles/HelpandSupport.css'
import OpenTicket1 from './OpenTicket1'
import OpenTicket2 from './OpenTicket2'
import OpenTicket3 from './OpenTicket3'
const HelpandSupport = () => {
    const [component,setComponent]=useState(<OpenTicket1/>)
  return (
    <div className='container help-container'>
          <div className="row">
        <div className="col">
          <h4 className='help-title'>Help & Support</h4>
        </div>
      </div>
      <div className='container ticket-container'>
      <div className="row">
          <div className="col">
            <h4 className='ticket-title'>Create New Ticket</h4>
          </div>
        </div>
        <div className='row'>
            <div className='col'>
              <button type="button" className="btn ticket-button"><span>Create Ticket</span></button>
            </div>
        </div>
      </div>
      <div className='container open-tickets-container'>
       <div className='row'>
        <div className='col-md-4 mb-3'>
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">Open Tickets</h5>
    <button type="button" className=" open-ticket-button" onClick={()=>setComponent(<OpenTicket1/>)}><span>Ticket #1</span></button>
  </div>
  
</div>
        </div>
        <div className='col-md-4 mb-3'>
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">Open Tickets</h5>
    <button type="button" className=" open-ticket-button" onClick={()=>setComponent(<OpenTicket2/>)}><span>Ticket #2</span></button>
  </div>
  
</div>
        </div>
        <div className='col-md-4 mb-3'>
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">Open Tickets</h5>
    <button type="button" className=" open-ticket-button" onClick={()=>setComponent(<OpenTicket3/>)}><span>Ticket #3</span></button>
  </div>
  
</div>
        </div>
       </div>
      </div>
      {/* Later use this container in alone component to make  */}
      <div className='container'>
{component}
      </div>
    </div>
  )
}

export default HelpandSupport