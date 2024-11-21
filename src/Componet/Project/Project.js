import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
import muntajat1 from '../../imges/Images/Muntajat.com.png'
import cyclegor from '../../imges/Images/Cycalgor-com.png'
import codermaster from '../../imges/Images/CoderMaster.Imges.png'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])

    return (
        <div className='mt-5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2 lg:ml-12 md:ml-4 ml-0   '>
            <div className="card lg:w-96 md:w-96 w-80 lg:ml-0 md:ml-0 ml-6 bg-gray-900 hover:shadow-md  hover:shadow-slate-800 " data-aos="fade-right">
  <figure><img src={muntajat1} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-xl  text-blue-500">
      Project Name: Muntajat.com
      
    </h2>
    <p className='text-white'>Muntajat.com is a best website for buying and selling technical products online</p>
    <div className="card-actions justify-end">
      <a href="https://muntajat-2bd0c.web.app"><button className="btn btn-outline btn-success">Live Site</button></a> 
      <Link to='/amerkitchen'><button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>

            <div className="card fixed-container  lg:mt-0 mt-8 lg:w-96 md:w-96 w-80 lg:ml-0 md:ml-0 ml-6 bg-gray-900  hover:shadow-md  hover:shadow-slate-800 " data-aos="fade-left">
  <figure><img className='' src={codermaster} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-xl  text-blue-500">
      Project Name: Coding-Master
      
    </h2>
    <p className='text-white'>An Online Programming Course Buy and Selling Website with admin controls,  secured all necessary pages etc                     </p>
    
    <div className="card-actions justify-end">
      <a href="https://codermaster-79114.web.app"><button className="btn btn-outline btn-success">Live Site</button></a> 
      <Link to='/procoding'><button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>
            <div className="card mt-8 lg:w-96 md:w-96 w-80 lg:ml-0 md:ml-0 ml-6 bg-gray-900  hover:shadow-md  hover:shadow-slate-800 " data-aos="fade-up">
  <figure><img src={cyclegor} alt="" /></figure>
  <div className="card-body" >
    <h2 className="text-xl  text-blue-500">
      Project Name: Cycal-Gor
      
    </h2>
    <p className='text-white'> This is a resale products Website               </p>
    
    <div className="card-actions justify-end">
      <a href="https://cycle-gor.web.app/"><button className="btn btn-outline btn-success">Live Site</button></a> 
      <Link to='/resale'><button className="btn btn-outline btn-success">Details</button></Link>
    </div>
  </div>
</div>






            
            
        </div>
    );
};

export default Project;