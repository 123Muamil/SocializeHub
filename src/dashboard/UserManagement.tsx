import { NavLink } from 'react-router-dom'
import '../styles/managerManage.css'
const UserManagement = () => {
  return (
    <div className='container activity-container' style={{ paddingTop: "80px" }}>
    <div className='container'>
        <div className='Container'>
            <h1 className='title'>All Users</h1>
            <NavLink to='/adduser' type='button' className='btn button'>
                <span>+ Add User</span>
            </NavLink>
        </div>
    </div>
    <div className='container'>
        <table className="table table-responsive align-middle mb-0 table-bordered ">
            <thead className="bglight">
                <tr>
                    <th>AVATAR</th>
                    <th>USER NAME</th>
                    <th>MANAGER REQUEST</th>
                    <th >VIEW AND EDIT PROFILE</th>
                    <th >REMOVE/BAN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    </td>
                    <td>


                        <div className="ms-3">
                            <p className="fw-bold mb-1">Alena</p>

                        </div>

                    </td>
                    <td className='view-profile'>


                        <div className="ms-3">
                            <a className="fw-bold mb-1" >Make Request</a>

                        </div>

                    </td>
                    <td className='view-profile'>


<div className="ms-3">
<a className="fw-bold mb-1">View Profile</a>

</div>

</td>
<td className='remove'>


<div className="ms-3">
<a className="fw-bold mb-1">Remove</a>

</div>

</td>

                </tr>
               
            </tbody>
        </table>
    </div>
</div>
  )
}

export default UserManagement