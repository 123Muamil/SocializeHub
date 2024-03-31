import {useState} from 'react'
import '../styles/openticket.css'
const OpenTicket3 = () => {
    const [selectedStatus, setSelectedStatus] = useState('Resolved');
    const [selectedAgent,setSelectedAgent]=useState('Agent 2')
    const handleStatusChange = (event:any) => {
      setSelectedStatus(event.target.value);
    };
    const handleAgentStatusChange=(event:any)=>{
        setSelectedAgent(event.target.value)
    }
  return (
    <div className="container open_tickent-container">
      <h2 className="select-title">Selected Ticket</h2>
      <p className='_text'>Ticket #3</p>
      <p className='_text'>Status: {selectedStatus}</p>
      <p className='_text'>Assigned Agent:{selectedAgent}</p>
      <div className="Flex">
        <label htmlFor="statusSelect">Change Status:</label>
        <select className="form-select" id="statusSelect"   onChange={handleStatusChange}
          value={selectedStatus}>
          <option value="open">Open</option>
          <option value="inProgress">In Progress</option>
          <option value="resolved">Resolved</option>

        </select>
      </div>
      <div className="Flex">
        <label htmlFor="agentSelect">Assign Agent:</label>
        <select className="form-select" id="agentSelect" onChange={handleAgentStatusChange} value={selectedAgent}>
          <option value="unassigned">Unassigned</option>
          <option value="agent1">Agent 1</option>
          <option value="agent2">Agent 2</option>
        </select>
      </div>
      <h4 className='messaging'>Messaging System</h4>
      <div className="textarea">
        <textarea
          className="form-control"
          rows={4}
          placeholder="Type your message"
        ></textarea>
      </div>
      <button type='button' className="btn send-button">Send</button>
    </div>
  )
}

export default OpenTicket3