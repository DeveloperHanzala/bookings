import React from "react";
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
const Dashboard = () => {
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
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Dashboard</span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">Dashboard</div> 
</div>



<div className="container-fluid bgdash">
    <div className="row">
        <div className="col-md-8 text-light">
            <h1 className="display-5 ">Welcome To Company Name</h1>
            <h2 className="dashfont">Assessor Name</h2>
        </div>
        <div className="col-md-4">
             <img src={img1} alt="" className="img-fluid" />
        </div>
    </div>
</div>



<div className="container mt-5 mb-4">
    <div>
        <h3>Your live jobs are listed below:</h3>
    </div>

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
            <th>Preferred Date</th>
            <th>Quotes</th>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
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
            <td>Quote <Link to={'/accessor/date'} ><RiArrowRightUpLine style={{backgroundColor:"#003366", color:"white",borderRadius:"5px"}} /></Link> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>













        </div>
      </div>
    </div>
  );
};

export default Dashboard;
