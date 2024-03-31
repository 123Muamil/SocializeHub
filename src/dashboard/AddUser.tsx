import  { useState } from 'react';
import '../styles/addUser.css'
const AddUser = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        // You can add your signup logic here, e.g., sending data to an API
        console.log(formData);
      };
  return (
    <div className='container auth-container'>
        <div className='container signup-contianer'>
        <form className='form' onSubmit={handleSubmit}>
        <div className="mb-3 display">
          <div className='Flex' style={{ marginRight: '10px' }}>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control "
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='Flex'  >
            <label htmlFor="lastName" className="form-label ">
              Last Name
            </label>
            <input
              type="text"
              className="form-control "
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 display">
          <div className='Flex' style={{ marginRight: '10px' }}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn signup-button">
        
          Create
        
        </button>
      </form>
        </div>
    </div>
  )
}

export default AddUser