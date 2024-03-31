import { useState } from 'react';
import '../styles/paymentControlling.css'
function PaymentControlling() {
  const [currentPlan,setCurrentPlane]=useState('Core')

  return (
    <div className="container payment-container">
      <div className="row">
        <div className="col">
          <h4 className='billing-title'>Billing & Payment</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5 className='subscription-title'>Subscription Plan</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className='currentPlan-text'>Current Plan:<span>{currentPlan}</span></p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3 d-flex text-center align-items-center">
              <label htmlFor="selectPlan" className="form-label">Select Plan:</label>
              <select className="form-select" id="selectPlan" value={currentPlan} onChange={(e)=>setCurrentPlane(e.target.value)}>
                <option>Core</option>
                <option>Plus</option>
                <option>Professional</option>
              </select>
            </div>
            <button type="button" className="btn updatePlan-button"><span>Update Plan</span></button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5 className='biiling-records-title'>Billing Records</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <table className="table table-striped table-bordered">
            <thead className='table-head'>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            {/* No tbody needed */}
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5 className='biiling-records-title'>Payment History</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <table className="table table-striped table-bordered">
            <thead className='table-head'>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            {/* No tbody needed */}
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn generate-invoice-button"><span>Generate Invoices</span></button>
        </div>
      </div>
      <div className='container refund-container'>
      <div className="row mt-4">
        <div className="col">
          <h5 className='handleDispute-title'>Handle Dispute or Refund</h5>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="disputeReason" className="form-label">Dispute Reason:</label>
            <input type="text" className="form-control" id="disputeReason" />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="refundAmount" className="form-label">Refund Amount:</label>
            <input type="text" className="form-control" id="refundAmount" />
          </div>
          <button type="button" className="btn submit-button"><span>Submit Dispute or Refund</span></button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PaymentControlling;
