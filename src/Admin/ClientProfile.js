import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const ClientProfile = () => {
  const [client, setClient] = useState({});
  const { id } = useParams(); // Extracting client id from the URL params
  const accessToken = localStorage.getItem("access_token");

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  useEffect(() => {
    if (id && accessToken) {
      axios.get(`https://backend.homecert.ie/api/client/${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setClient(response.data);
      })
      .catch(error => {
        console.error("Error fetching client data:", error);
      });
    }
  }, [id, accessToken]); // Run useEffect whenever id or accessToken changes

  if (!client.first_name) {
    // Optional: Display a loading state while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-end">
            <img src={img} alt="" className="img-fluid dashimg mx-2" />
            <IoIosArrowDown size={20} className="mx-2" />
            <span className="notibg mx-2 text-center">
              <IoMdNotifications color="black" size={20} />
            </span>
          </div>

          <div className="col-md-12 text-start">
            <p>Company Name <IoIosArrowForward /> <span className="text-dark">Clients </span></p>
          </div>

          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
            <div className="fs-3 mx-2 fw-bold mb-0">Client Profile</div>
          </div>
        </div>
      </div>

      <div className='container mt-4'>
        <div className='row bg-light p-4'>
          <div className='col-md-3'>
            <img src={img} alt="" className="img-fluid rounded-circle mx-2" />
          </div>

          <div className='col-md-9'>
            <h4 className='text-dark mb-0'>{client.first_name} {client.last_name}</h4>
          
            <div className='d-flex'>
              <p className='text-dark mt-3 mb-0'>
                <CiMail size={20} className='mx-2' />
                {client.email}
              </p>
              <p className='text-dark mx-3 mt-3 mb-0'>
                <FaPhoneAlt size={20} className='mx-2' />
                {client.phone_number || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
