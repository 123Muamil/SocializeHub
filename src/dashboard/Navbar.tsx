// import  { useState } from 'react';

// function Navbar() {
//   const [isDarkMode, setIsDarkMode] = useState(true); // Initial state is dark mode

//   // Function to toggle dark/light mode
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         {/* Left-aligned items (aligned to the right) */}
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
//           {/* NEED HELP? dropdown */}
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownHelp"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <i className="bi bi-question-circle-fill me-2"></i> {/* Icon for NEED HELP? */}
          
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdownHelp">
//             NEED HELP?
//               <li>
//                 <a className="dropdown-item" href="#">
//                   <i className="bi bi-book-fill me-2"></i> Documentation
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   <i className="bi bi-info-circle-fill me-2"></i> Support Site
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   <i className="bi bi-envelope-fill me-2"></i> Contact Us
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//           <a className="nav-link" href="#"  onClick={toggleDarkMode}>
//           {isDarkMode ? (
//                 <i className="bi bi-moon-fill me-2"></i> // Dark mode icon
//               ) : (
//                 <i className="bi bi-sun-fill me-2"></i> // Light mode icon
//               )}
//           </a>
//         </li>
         
//         </ul>

//         {/* Right-aligned items */}
//         <ul className="navbar-nav">
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown1"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <i className="bi bi-person-fill me-2"></i>
//               Social Reach Pro
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Acme Inc.
//                   <br />
//                   Administrator
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Sign Out
//                 </a>
//               </li>
//             </ul>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../dashboard/Sidebar'
const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 }); 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
  
      <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {isDesktop ? (
        <>
        
     
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#">Home</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Link</a>
       </li>
    
       <li className="nav-item">
         <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
       </li>
     </ul>
     <form className="d-flex">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
   
        </>
      // Render ComponentA for desktop
      ) : (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Sidebar/>
        </div>
     
      )}
    
    </div>
  </nav>
  )
}

export default Navbar