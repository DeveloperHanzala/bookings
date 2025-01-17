import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const Buildings = () => {
    const assetsData = [
        { no: 1, name: "Green Town", certificate: "Certificate Name", location: "New York City" },
        { no: 2, name: "Green Town", certificate: "Certificate Name", location: "New York City" },
        { no: 3, name: "Green Town", certificate: "Certificate Name", location: "New York City" },
        { no: 4, name: "Green Town", certificate: "Certificate Name", location: "New York City" },
        { no: 5, name: "Green Town", certificate: "Certificate Name", location: "New York City" },
        { no: 6, name: "Green Town", certificate: "Certificate Name", location: "New York City" },
      ];
    
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

            <div className="col-md-12 text-start">
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Buildings</span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">Buildings</div> 
</div>



















        </div>
      </div>


       <div className="container bg-light p-3 my-2">
      {/* Filters Section */}
      <div className="filters mb-4">
        <div className="row g-2">
          {["Property Type", "Property Size", "No of Bedrooms", "Property County", "Nearest Town"].map((filter, index) => (
            <div className="col-md-2 col-sm-6" key={index}>
              <select className="form-select p-3">
                <option>{filter}</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          ))}
          <div className="col-md-1 col-sm-6">
            <button className="btn button12 p-3 w-100">
            <FaSearch size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <h5 className="mb-3">All Assets</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className=" border-0">
            <tr className='border-0 '>
              <th className='border-0 table-light1'>No</th>
              <th className='border-0 table-light1'>Building Name</th>
              <th className='border-0 table-light1'>BER Certificate</th>
              <th className='border-0 table-light1'>Location</th>
            </tr>
          </thead>
          <tbody >
            {assetsData.map((asset, index) => (
              <tr key={index} className='border-0'>
                <td className='border-0'>{asset.no}</td>
                <td className='border-0'>{asset.name}</td>
                <td className='border-0'>{asset.certificate}</td>
                <td className='border-0'>{asset.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Buildings
