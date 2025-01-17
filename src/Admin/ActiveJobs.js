import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

const ActiveJobs = () => {
  return (
    <div>
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
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Active Jobs</span>     </p>  
                </div>
               
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center justify-content-between flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    <div className="fs-3 mx-2 fw-bold mb-0">Active Jobs</div> 
    </div>
   
</div>



















        </div>
      </div>


      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead className=" border-0">
            <tr className='border-0 text-center'>
              <th className='border-0 table-light1'>No</th>
              <th className='border-0 table-light1'>Job Posted</th>
              <th className='border-0 table-light1'>Town</th>
              <th className='border-0 table-light1'>County</th>
              <th className='border-0 table-light1'>Type</th>
              <th className='border-0 table-light1'>Sq. Mt.</th>
              <th className='border-0 table-light1'>Beds</th>
              <th className='border-0 table-light1'>Heat Pump</th>
              <th className='border-0 table-light1'>Purpose</th>
              <th className='border-0 table-light1'>Addition</th>
              <th className='border-0 table-light1'>Preferred Data</th>
              <th className='border-0 table-light1'>Status</th>
            </tr>
          </thead>
          <tbody >
            
              <tr className='border-0 text-center'>
                <td className='border-0'>1</td>
                <td className='border-0'>03 Jan</td>
                <td className='border-0'>Ballybofey</td>
                <td className='border-0'>Donegal</td>
                <td className='border-0'>Detached</td>
                <td className='border-0'>185-210</td>
                <td className='border-0'>05</td>
                <td className='border-0'>None</td>
                <td className='border-0'>Letting</td>
                <td className='border-0'>Attic Conversion</td>
                <td className='border-0'>Sun 12 Jan</td>
               
                <td className='border-0 '><Link   ><button className='btn btn-success'>Completed</button></Link> </td>
              </tr>
              <tr className='border-0 text-center'>
                <td className='border-0'>1</td>
                <td className='border-0'>03 Jan</td>
                <td className='border-0'>Ballybofey</td>
                <td className='border-0'>Donegal</td>
                <td className='border-0'>Detached</td>
                <td className='border-0'>185-210</td>
                <td className='border-0'>05</td>
                <td className='border-0'>None</td>
                <td className='border-0'>Letting</td>
                <td className='border-0'>Attic Conversion</td>
                <td className='border-0'>Sun 12 Jan</td>
               
                <td className='border-0 '><Link   ><button className='btn btn-danger'>Pending</button></Link> </td>
              </tr>
              <tr className='border-0 text-center'>
                <td className='border-0'>1</td>
                <td className='border-0'>03 Jan</td>
                <td className='border-0'>Ballybofey</td>
                <td className='border-0'>Donegal</td>
                <td className='border-0'>Detached</td>
                <td className='border-0'>185-210</td>
                <td className='border-0'>05</td>
                <td className='border-0'>None</td>
                <td className='border-0'>Letting</td>
                <td className='border-0'>Attic Conversion</td>
                <td className='border-0'>Sun 12 Jan</td>
               
                <td className='border-0 '><Link   ><button className='btn btn-success'>Completed</button></Link> </td>
              </tr>
              <tr className='border-0 text-center'>
                <td className='border-0'>1</td>
                <td className='border-0'>03 Jan</td>
                <td className='border-0'>Ballybofey</td>
                <td className='border-0'>Donegal</td>
                <td className='border-0'>Detached</td>
                <td className='border-0'>185-210</td>
                <td className='border-0'>05</td>
                <td className='border-0'>None</td>
                <td className='border-0'>Letting</td>
                <td className='border-0'>Attic Conversion</td>
                <td className='border-0'>Sun 12 Jan</td>
               
                <td className='border-0 '><Link   ><button className='btn btn-danger'>Pending</button></Link> </td>
              </tr>
              <tr className='border-0 text-center'>
                <td className='border-0'>1</td>
                <td className='border-0'>03 Jan</td>
                <td className='border-0'>Ballybofey</td>
                <td className='border-0'>Donegal</td>
                <td className='border-0'>Detached</td>
                <td className='border-0'>185-210</td>
                <td className='border-0'>05</td>
                <td className='border-0'>None</td>
                <td className='border-0'>Letting</td>
                <td className='border-0'>Attic Conversion</td>
                <td className='border-0'>Sun 12 Jan</td>
               
                <td className='border-0 '><Link   ><button className='btn btn-warning'>In Progress</button></Link> </td>
              </tr>
     
          </tbody>
        </table>
      </div>











    </div>
      
    </div>
  )
}

export default ActiveJobs
