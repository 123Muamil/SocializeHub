
import '../styles/activity.css'
const Activities = () => {
    return (
        <div className='container activity-container' style={{ paddingTop: "80px" }}>
            <div className='container'>
                <div className='Container'>
                    <h1 className='title'>Activity Logs</h1>
                    <button className='btn button'>
                        <span>+ Add User</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                <table className="table align-middle mb-0 table-bordered ">
                    <thead className="bglight">
                        <tr>
                            <th>TIMESTAMP</th>
                            <th>USER/MANAGER</th>
                            <th>ACTIVITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>


                                <div className="ms-3">
                                    <p className="fw-bold mb-1">2023-09-11 10:30:00</p>

                                </div>

                            </td>
                            <td>


                                <div className="ms-3">
                                    <p className="fw-bold mb-1">User 1</p>

                                </div>

                            </td>
                            <td>


                                <div className="ms-3">
                                    <button className='btn activity-button'>
                                        <span>Logged In</span>
                                    </button>

                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>


                                <div className="ms-3">
                                    <p className="fw-bold mb-1">2023-09-11 10:30:00</p>

                                </div>

                            </td>
                            <td>


                                <div className="ms-3">
                                    <p className="fw-bold mb-1">User 2</p>

                                </div>

                            </td>
                            <td>


                                <div className="ms-3">
                                    <button className='btn activity-button'>
                                        <span>Updated Profile</span>
                                    </button>

                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>


                                <div className="ms-3">
                                    <p className="fw-bold mb-1">2023-09-11 10:30:00</p>

                                </div>

                            </td>
                            <td>


                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Manager 1</p>

                                </div>

                            </td>
                            <td>


                                <div className="ms-3">
                                    <button className='btn activity-button'>
                                        <span>Created New Project</span>
                                    </button>

                                </div>

                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Activities