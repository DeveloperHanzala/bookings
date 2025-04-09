import React from 'react'
import './Navbar.css'
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialBehance } from "react-icons/sl";
import { Link } from 'react-router-dom';
const Footer = () => {
  return ( 
    <div className='container-fluid bgfooter px-4 px-md-0' style={{overflowX:'none'}}>
        <div className=''>
<div className='row'>
        <div className='col-md-3 px-md-5'>
            <h1>HomeCert.ie</h1>
            <p>HomeCert.ie offers the best prices in Ireland for your BER Certificate. We provide access to a wide network of BER Assessors, ensuring the lowest prices.</p>
        </div>
           
        <div className='col-md-3 d-flex justify-content-start justify-content-md-center'>
            <div className='text-start'>
            <h4>Menu</h4>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/booking'}> Get A Ber Cert</Link></p>
            <p><Link to={'/accessor-registration'}>Assessor Registration</Link></p>
            {/* <p>Educational Resources</p> */}
            <p><Link to={'/contact'}>Contact me</Link></p>
            </div>
            
        </div>
        <div className='col-md-2'>
        <h4>Contact me</h4>
            <p>+(353) 87 752 6652</p>
            <p>info@homecert.ie</p>
           
        </div>
        <div className='col-md-4 '>
            <div className='d-flex align-items-center justify-content-center'>
            <h5>Follow me 
            <CiFacebook size={30} className='mx-2' />
            <RiTwitterXFill size={30} className='mx-2' />
            <CiLinkedin size={30} className='mx-2' />
            <SlSocialBehance size={30} className='mx-2' />
            </h5>
            
            </div>
       

        </div>
</div>
</div>
      
    </div>
  )
}

export default Footer
