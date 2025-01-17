import React from 'react'
import img from '../Images/certificate.png';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Certificate = () => {
  return (
    <div className='dashboard'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-end">
                <img src={img} alt="" className="img-fluid dashimg mx-2" />
                <IoIosArrowDown size={20} className="mx-2" />
                <span className="notibg mx-2 text-center">
                      <IoMdNotifications className="" color="black" size={20} />
                </span>
              
            </div>

            <div className="col-md-12 d-flex align-items-center ">
                <div>
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">BER Certificate</span>     </p>  
                </div>
               
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center justify-content-between flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    <div className="fs-3 mx-2 fw-bold mb-0">BER Certificate</div> 
    </div>
   
</div>



















        </div>
      </div>


    <div className='container px-2 pt-3 px-md-5'>
            <div className='text-center p-0 p-md-5'>
                <img src={img} alt='' className='img-fluid px-0 px-md-5' />
            </div>
    </div>












    </div>
  )
}

export default Certificate
