import React, { useState } from "react";
import './Accessor.css'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io"
import img1 from '../Images/dash1.png';
import { LuSquareArrowUpRight } from "react-icons/lu";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const MyClients = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">My Clients</span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">My Clients</div> 
</div>
<p className="mx-5">Here's your successful quotes on Website.com. Please contact your clients within one business day.</p>





<div className="container mt-5 mb-4">
    

  <div className="col-md-12">
    <div style={{ overflowX: 'auto' }}>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Job Posted</th>
            <th>Town</th>
            <th>County</th>
            <th>Type</th>
            <th>Sq. Mt.</th>
            <th>Beds</th>
            <th>Heat Pump</th>
            <th>Purpose</th>
            <th>Addition</th>
            <th>Survey Date</th>
            <th>Balance</th>
            <th>Contact</th>
            
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>03 Jan</td>
            <td>Ballybofey</td>
            <td>Donegal</td>
            <td>Detached</td>
            <td>185 - 210</td>
            <td>05</td>
            <td>None</td>
            <td>Letting </td>
            <td>Attic Conversion</td>
            <td>Sun 12 Jan</td>
            <td>€240 </td>
            <td>Contact <RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px", cursor:'pointer'}}  onClick={handleOpenModal} /></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>




{/* Modal */}
{showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Information</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Address:</strong> 123 Main Street, City, Country</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}








        </div>
      </div>
    </div>
  );
};

export default MyClients;
