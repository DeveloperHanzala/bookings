import React, { useState, useEffect } from "react";
import axios from "axios";
import './Login.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi"; // New phone icon
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("Homeowners");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Variables for ref and dynamic job id
  let refCode = null;
  let jobIdFromRef = null;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refParam = params.get("ref");
    if (refParam) {
      // Expecting format: "122344121534556/<jobid>"
      const parts = refParam.split('/');
      if (parts[0] === "122344121534556") {
        // Auto-set to Ber Assessor
        setUserType("Ber Assessor");
        refCode = parts[0];
        if (parts[1]) {
          jobIdFromRef = parts[1];
        }
      }
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    // Validate phone number format if Homeowners
    let phoneNumber = formData.phone;
    if (userType === "Homeowners") {
      if (!phoneNumber.startsWith("+")) {
        phoneNumber = `+${phoneNumber}`; // Prepend "+" if it's missing
      }
    }
  
    try {
      // Prepare data based on user type
      const requestData = userType === "Homeowners"
        ? { email: formData.email, phone_number: phoneNumber }
        : { email: formData.email, password: formData.password };
  
      const response = await axios.post("https://backend.homecert.ie/api/signin/", requestData);
  
      const userTypeMapping = {
        "Homeowners": "client",
        "Ber Assessor": "accessor",
        "Admin": "admin"
      };
  
      const expectedUserType = userTypeMapping[userType];
      const actualUserType = response.data.user_type;
  
      if (!actualUserType) {
        throw new Error("User type not found in response");
      }
  
      if (actualUserType !== expectedUserType) {
        setError(`Your account is registered as ${actualUserType}, not ${userType}. Please select the correct user type.`);
        setLoading(false);
        return;
      }
  
      if (response.data.access) {
        localStorage.setItem("access_token", response.data.access);
      }
      
      // Check for ref query parameter and if user is Ber Assessor with a job id, redirect accordingly
      const params = new URLSearchParams(location.search);
      const refParam = params.get("ref");
      if (refParam) {
        const parts = refParam.split('/');
        if (parts[0] === "122344121534556" && parts[1] && userType === "Ber Assessor") {
          navigate(`/job-details/${parts[1]}`);
          return;
        }
      }
      
      // Regular redirection if no special ref is present
      switch (userType) {
        case "Homeowners":
          navigate("/client/dashboard");
          break;
        case "Ber Assessor":
          navigate("/accessor/dashboard");
          break;
        case "Admin":
          navigate("/admin/dashboard");
          break;
        default:
          navigate("/client/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Invalid credentials. Please try again.");
      } else if (error.message.includes("User type")) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  const renderFields = () => (
    <>
      <div className="input-group">
        <span className="icon"><MdOutlineEmail size={20} /></span>
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      {userType === "Homeowners" ? (
        <div className="input-group">
          <span className="icon"><FiPhone size={20} /></span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div className="input-group">
          <span className="icon"><RiLockPasswordFill size={20} /></span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      )}
      {userType === "Homeowners" ? (
        <div>
          {/* Additional fields or instructions for Homeowners if needed */}
        </div>
      ) : (
        <div className="text-end">
          <Link to={'/forget-password'}>
            <p>Forget Password</p>
          </Link>
        </div>
      )}
    </>
  );

  return (
    <div className="bglogin">
      <div className="container nooverflowy">
        <div className="login-container d-none d-md-block">
          <div className="row">
            <Link to={"/"} className="d-none d-md-block">
              <IoMdCloseCircle size={20} color="#003366" />
            </Link>
            <div className="col-md-6 login-left d-none d-md-block">
              <div className="text-center">
                <h1>LOGIN</h1>
                <p>How to get started?</p>
                {/* Hide user type buttons if the special ref parameter is present */}
                {(new URLSearchParams(location.search).get("ref") || "").split('/')[0] !== "122344121534556" && (
                  <div className="button-group">
                    {["Homeowners", "Ber Assessor", "Admin"].map((type) => (
                      <button 
                        key={type} 
                        className={userType === type ? "active" : ""} 
                        onClick={() => setUserType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <form className="login-form text-center" onSubmit={handleLogin}>
                {renderFields()}
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Logging in..." : "Login Now"}
                </button>
              </form>
            </div>

            <div className="col-md-6 login-right image-container d-none d-md-block"></div>
          </div>
        </div>
        
        <div className="mobile-login d-block d-md-none">
          <Link to={"/"} className="d-md-none d-block">
            <IoMdCloseCircle size={20} color="#003366" />
          </Link>
          <div className="login-left p-2">
            <div className="text-center">
              <h1>LOGIN</h1>
              <p>How to get started?</p>
              {(new URLSearchParams(location.search).get("ref") || "").split('/')[0] !== "122344121534556" && (
                <div className="button-group">
                  {["Homeowners", "Ber Assessor", "Admin"].map((type) => (
                    <button 
                      key={type} 
                      className={userType === type ? "active" : ""} 
                      onClick={() => setUserType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <form className="login-form text-center" onSubmit={handleLogin}>
              {renderFields()}
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
