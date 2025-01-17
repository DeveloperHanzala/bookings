import React from "react";
import "./Client.css";
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io"
import img1 from '../Images/dash1.png';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale, // Register the "category" scale
  LinearScale,
  Tooltip,
} from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const ClientDashboard = () => {

    const data = [
        {
          title: "Total Buildings",
          value: 2456,
          percentage: "+2.5%",
          trendColor: "green",
          graphData: [2040, 2000, 2500, 2450, 2456],
        },
        {
          title: "Total Documents",
          value: 125,
          percentage: "+1.5%",
          trendColor: "orange",
          graphData: [1012, 11110, 11115, 9120, 19125],
        },
        {
          title: "Total BER Certificates",
          value: 2456,
          percentage: "+4.5%",
          trendColor: "green",
          graphData: [2400, 2420, 2430, 2450, 2456],
        },
      ];
    
      const getChartData = (graphData, color) => ({
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            data: graphData,
            borderColor: color,
            borderWidth: 2,
            pointRadius: 0,
            tension: 1.1,
            fill: false,
          },
        ],
      });
    
  return (
    <>
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
            <h2 className="dashfont">Client Name</h2>
        </div>
        <div className="col-md-4">
             <img src={img1} alt="" className="img-fluid" />
        </div>
    </div>
</div>

















        </div>
      </div>

      <div className="container my-5">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
              <div className="card-body text-center">
                <div className="row">
                    <div className="col-md-6">
                <h6 className="card-title text-muted">{item.title}</h6>
                <h3 className="card-value fw-bold">{item.value}</h3>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <span
                    className="percentage"
                    style={{ color: item.trendColor }}
                  >
                    {item.percentage}
                  </span>
                </div>
                    </div>
                <div className="col-md-6">
                <div className="chart-container mt-3">
                  <Line
                    data={getChartData(
                      item.graphData,
                      item.trendColor === "green" ? "#00c853" : "#ffa726"
                    )}
                    options={{
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        x: { display: false },
                        y: { display: false },
                      },
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
                    </div>    
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>




    <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className=" border-0">
            <tr className='border-0 '>
              <th className='border-0 table-light1'>No</th>
              <th className='border-0 table-light1'>Date</th>
              <th className='border-0 table-light1'>Property</th>
              <th className='border-0 table-light1'>Preferred Date</th>
              <th className='border-0 table-light1'>Quotes</th>
           
            </tr>
          </thead>
          <tbody >
          
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Thursday 16 Jan</td>
                <td className='border-0'>3 bed End-Terrace in Bellybeg, Co. Clare</td>
                <td className='border-0'>Sun 20 Jan</td>
                <td className='border-0'>
                <Link to={'/client/your-quote'} ><button className='btn btn-success'>View Quote</button></Link>
                </td>
              
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Thursday 16 Jan</td>
                <td className='border-0'>3 bed End-Terrace in Bellybeg, Co. Clare</td>
                <td className='border-0'>Sun 20 Jan</td>
                <td className='border-0'>
                <Link to={'/client/your-quote'} ><button className='btn btn-success'>View Quote</button></Link>
                </td>
              
              </tr>

              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Thursday 16 Jan</td>
                <td className='border-0'>3 bed End-Terrace in Bellybeg, Co. Clare</td>
                <td className='border-0'>Sun 20 Jan</td>
                <td className='border-0'>
                <Link to={'/client/your-quote'} ><button className='btn btn-success'>View Quote</button></Link>
                </td>
              
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Thursday 16 Jan</td>
                <td className='border-0'>3 bed End-Terrace in Bellybeg, Co. Clare</td>
                <td className='border-0'>Sun 20 Jan</td>
                <td className='border-0'>
                <Link to={'/client/your-quote'} ><button className='btn btn-success'>View Quote</button></Link>
                </td>
              
              </tr>
              <tr className='border-0'>
                <td className='border-0'>1</td>
                <td className='border-0'>Thursday 16 Jan</td>
                <td className='border-0'>3 bed End-Terrace in Bellybeg, Co. Clare</td>
                <td className='border-0'>Sun 20 Jan</td>
                <td className='border-0'>
                <Link to={'/client/your-quote'} ><button className='btn btn-success'>View Quote</button></Link>
                </td>
              
              </tr>
          </tbody>
        </table>
      </div>






    </div>



    </>
  )
}

export default ClientDashboard
