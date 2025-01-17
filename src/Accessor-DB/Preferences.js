import React from "react";
import './Accessor.css'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io"
import { RiMessage2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
const Preferences = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-end">
                <img src={img} alt="" className="img-fluid dashimg mx-2" />
                <IoIosArrowDown size={20} className="mx-2" />
                <span className="notibg mx-2 text-center">
                      <IoMdNotifications className="" color="black" size={20} />
                </span>
              
            </div>

            <div className="col-md-12 text-start">
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Preferences</span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">Account Preferences</div> 
</div>
<p className="mx-5">Update your county and SMS preferences below.</p>


<div>
<div className="fs-3  mb-0">SMS Notifications <RiMessage2Fill size={30} className="text-primary" /> </div> 
<p>You are currently receiving job notifications by SMS to 0877526652. <span className="text-dark fw-bold">Cancel SMS Notifications</span></p>
</div>




<div className="container mt-5 mb-4">
<div className="fs-3  mb-0">Select Your County Lead Preferences <IoLocationSharp size={30} className="text-primary" /> </div> 
<div className="row mt-5">
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
</div>
<div className="row ">
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
</div>
<div className="row ">
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
</div>
<div className="row ">
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
</div>
<div className="row ">
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
    <div className="col-md-3 mb-3">
        <div className="shadow rounded">
            <div className="p-3 text-center">
                    <h2>Carlow</h2>
            </div>
        </div>
    </div>
</div>
</div>













        </div>
      </div>
    </div>
  );
};

export default Preferences;
