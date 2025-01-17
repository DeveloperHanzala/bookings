import React from 'react'
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import './Admin.css';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const Payments = () => {
    const data = [
        {
          title: "Networth",
          value: "$57476",
          percentage: (
            <>
             <strong> +21.4%</strong> +$67k today
            </>
          ),
           trend: "up",
          trendColor: "green",
          graphData: [2040, 2000, 2500, 2450, 2456],
        },
        {
          title: "Income",
          value: "$27476",
          percentage: (
            <>
             <strong> +13%</strong> +$57k today
            </>
          ), trend: "Down" ,
          trendColor: "orange",
          graphData: [1012, 11110, 11115, 9120, 19125],
        },
        // {
        //   title: "Refunds",
        //   value: "$67476",
        //   percentage:(
        //     <>
        //      <strong> +13%</strong> +$67k today
        //     </>
        //   ), trend: "up" ,
        //   trendColor: "green",
        //   graphData: [2400, 2420, 2430, 2450, 2456],
        // },
        {
            title: "Pending Payments",
            value: "$97476",
            percentage: (
                <>
                 <strong> +13%</strong> +$67k today
                </>
              ), trend: "up" ,
            trendColor: "green",
            graphData: [2400, 2420, 2430, 2450, 2456],
          },
      ];

      const lineColors = ["#003366", "rgb(2, 202, 2)", "red", "#4BC0C0", "#9966FF", "#FF9F40"];
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
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Payments/Refunds</span>     </p>  
            </div>

            
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
    </div>
    <div className="fs-3 mx-2 fw-bold mb-0">Payments/Refunds</div> 
</div>






            </div>
     </div>

     <div className="container my-5">
      {/* Card Section */}
      <div className="row">
      {data.map((item, index) => (
  <div className="col-md-3 " key={index}>
    <div className=" bghover shadow-sm p-3 mb-5 ">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <h6 className="">{item.title}</h6>
            <h3 className="fw-bold">{item.value}</h3>
            <div className="d-flex align-items-center">
              {item.trend.toLowerCase() === "up" ? (
                <FaArrowUp style={{ color: "green", marginRight: "5px" }} />
              ) : (
                <FaArrowDown style={{ color: "red", marginRight: "5px" }} />
              )}
              <span>{item.percentage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}

      </div>

      {/* Reports Section */}
      <div className="row">
        <div className="col-12">
          <div className="reports-container p-4 shadow bg-white rounded">
            <div className='d-flex align-items-center flex-column flex-md-row justify-content-between '>
                <div>
            <h3 className="text-center mb-4">REPORTS</h3>
                </div>
<div>
       {/* Legend */}
       <div className="d-flex justify-content-center align-items-center mb-4">
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

export default Payments
