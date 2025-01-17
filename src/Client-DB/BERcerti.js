import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
const BERcerti = () => {
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
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">BER get-your-certificate</span>     </p>  
                </div>
               
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center justify-content-between flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    <div className="fs-3 mx-2 fw-bold mb-0">BER get-your-certificate</div> 
    </div>
    <div>
                    <Link to={'/client/date'}><button><IoMdAdd /> Add </button></Link>
                </div>
</div>



















        </div>
      </div>


      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead className=" border-0">
            <tr className='border-0 '>
              <th className='border-0 table-light1'>No</th>
              <th className='border-0 table-light1'>Building Name</th>
              <th className='border-0 table-light1'>BER get-your-certificate</th>
              <th className='border-0 table-light1'>Location</th>
            </tr>
          </thead>
          <tbody >
            
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Green Town</td>
                <td className='border-0'>get-your-certificate Name</td>
                <td className='border-0 '><Link to={'/client/get-your-certificate'} ><button className='btn btn-success'>View</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Green Town</td>
                <td className='border-0'>get-your-certificate Name</td>
                <td className='border-0 '><Link to={'/client/get-your-certificate'} ><button className='btn btn-success'>View</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Green Town</td>
                <td className='border-0'>get-your-certificate Name</td>
                <td className='border-0 '><Link to={'/client/get-your-certificate'} ><button className='btn btn-success'>View</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Green Town</td>
                <td className='border-0'>get-your-certificate Name</td>
                <td className='border-0 '><Link to={'/client/get-your-certificate'} ><button className='btn btn-success'>View</button></Link> </td>
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Green Town</td>
                <td className='border-0'>get-your-certificate Name</td>
                <td className='border-0 '><Link to={'/client/get-your-certificate'} ><button className='btn btn-success'>View</button></Link> </td>
              </tr>
     
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default BERcerti
