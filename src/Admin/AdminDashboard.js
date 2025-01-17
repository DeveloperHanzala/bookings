import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const AdminDashboard = () => {
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

      const lineColors = ["#003366", "red", "rgb(2, 202, 2)", "#4BC0C0", "#9966FF", "#FF9F40"];
      // Function to generate an array of dynamic dates
  const generateDates = (dataLength) => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < dataLength; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() - (dataLength - 1 - i)); // Adjust the date
      dates.push(newDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
    }
    return dates;
  };

  // Generate dates dynamically based on the first dataset's graphData length
  const dates = generateDates(data[0]?.graphData?.length || 0);
  return (
    <div className='dashboard '>
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
            <h2 className="dashfont">Admin Name</h2>
        </div>
        <div className="col-md-4">
             <img src={img1} alt="" className="img-fluid" />
        </div>
    </div>
</div>





            </div>
     </div>

     <div className="container  my-5">
      {/* Card Section */}
      <div className="row " >
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-md-12">
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
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reports Section */}
      <div className="row no-overflow-x">
        <div className="col-12 ">
          <div className="reports-container no-overflow-x p-4 shadow bg-white rounded">
            <div className='d-flex align-items-center flex-column flex-md-row justify-content-between '>
                <div>
            <h3 className="text-center mb-4">REPORTS</h3>
                </div>
<div>
       {/* Legend */}
       <div className="d-flex justify-content-center  align-items-center mb-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center me-3"
                  style={{ fontSize: "14px" }}
                >
                  <div
                    className="legend-color"
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: lineColors[index % lineColors.length],
                      marginRight: "5px",
                    }}
                  ></div>
                  {item.title}
                </div>
              ))}
            </div>
</div>
            </div>

         

            {/* Line Graph */}
            <div style={{ height: "400px", position: "relative" }}>
              <Line
                data={{
                  labels: dates, // Use dynamic dates for x-axis labels
                  datasets: data.map((item, index) => ({
                    label: item.title,
                    data: item.graphData,
                    borderColor: lineColors[index % lineColors.length],
                    fill: false,
                    tension: 0.4,
                  })),
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    x: {
                      display: true,
                      title: { display: true, text: "Dates" },
                    },
                    y: {
                      display: true,
                      title: { display: true, text: "Values" },
                    },
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
  )
}

export default AdminDashboard
