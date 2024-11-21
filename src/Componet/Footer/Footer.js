import React from 'react';
import { BsFacebook,BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    
    <p>ACME Industries Ltd.<br/><p>Copyright © 2022 - All right reserved</p></p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      
      <a  className='text-2xl' href='https://github.com/Akahad1'><BsGithub></BsGithub></a>
      <a  className='text-2xl' href='https://www.facebook.com/ak.sahad.5/'><BsFacebook/></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;