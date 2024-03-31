import  { useState } from 'react';
import '../styles/documentation.css'
import UserGuide from './UserGuide';
import Faqs from './Faqs';
import Documentation from './Documentation';
const DocumentationForAdministrators = () => {
    const [component,setComponent]=useState(<UserGuide/>)
  return (
    <div className="container documetation-container">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group">
            <button type="button" className="btn user-button" onClick={()=>setComponent(<UserGuide/>)}><span>USER GUIDE</span></button>
            <button type="button" className="btn faq-button" onClick={()=>setComponent(<Faqs/>)}><span>FAQs</span></button>
            <button type="button" className="btn doc-button" onClick={()=>setComponent(<Documentation/>)}><span>DOCUMENTATION FOR ADMINISTRATORS</span></button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <div className='text'>
            {component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationForAdministrators;
