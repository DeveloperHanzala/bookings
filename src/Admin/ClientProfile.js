import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const ClientProfile = () => {
  return (
    <div className='dashboard'>
       <div className='container'>
            <div className='row'>
            <div className="col-md-12 text-end">
                <img src={img} alt="" className="img-fluid dashimg mx-2" />
                <IoIosArrowDown size={20} className="mx-2" />
                <span className="notibg mx-2 text-center">
                      <IoMdNotifications className="" color="black" size={20} />
                </span>
              
            </div>

            <div className="col-md-12 text-start">
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Clients </span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">Client Profile</div> 
</div>







            </div>
     </div>  

<div className='container mt-4'>
<div className='row bg-light p-4'>
<div className='col-md-3'>
    <div className=''>
<img src={img} alt="" className="img-fluid rounded-circle mx-2" />
    </div>
</div>

<div className='col-md-9 '>
    <div className='text-end '>
    <BsThreeDotsVertical className='bg-white rounded-circle px-2' size={40} />
    </div>
    <div>
        <h4 className='text-dark mb-0'>Client Name</h4>
        <p className='text-dark mt-3 mb-0'><FaBuildingUser size={25} className='mx-2' />New York City</p>
        <div className='d-flex '>
        <p className='text-dark mt-3 mb-0'><CiMail size={20} className='mx-2' />name@gmail.com</p>
        <p className='text-dark mx-3 mt-3 mb-0'><FaPhoneAlt size={20} className='mx-2' />+xxxxxxxxxxxxx</p>
        </div>
    </div>
</div>
</div>
</div>


    </div>
  )
}

export default ClientProfile
