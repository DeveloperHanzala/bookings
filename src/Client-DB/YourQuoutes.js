import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51R32lXEzHZXHb7T05F7iW6VZBu3wjro3SxtkzRhNGlamDjakG7rH974D3lhBvoKVF2m3MWXz2IiyVz10y3CP5zE300yOTsTEDl"); // Use your actual Stripe public key

const YourQuotes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [selectedBid, setSelectedBid] = useState(null);
  const [bidDetails, setBidDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState(null);

  // Get bids from location state passed from ClientDashboard
  const bids = location.state?.bids || [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Initialize Stripe
    async function loadStripeInstance() {
      const stripeInstance = await stripePromise;
      setStripe(stripeInstance);
    }
    loadStripeInstance();
  }, []);

  const handleOpenModal = async (bid) => {
    setSelectedBid(bid);
    setShowModal(true);
    setLoading(true);

    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.get(
        `https://backend.homecert.ie/api/bids/${bid.id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBidDetails(response.data);
    } catch (error) {
      console.error("Error fetching bid details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchToQuoteModal = async (bid) => {
    setShowModal(false);
    setLoading(true);
    
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        `https://backend.homecert.ie/api/bids/${bid.id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBidDetails(response.data);
      setSelectedBid(bid);
      setShowQuote(true);
    } catch (error) {
      console.error("Error fetching quote details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBid(null);
    setBidDetails(null);
  };

  const handleQuoteModalClose = () => {
    setShowQuote(false);
    setSelectedBid(null);
    setBidDetails(null);
  };

  const handleAcceptQuote = async () => {
    if (!selectedBid) {
      alert("Please log in to continue");
      return;
    }

    const accessToken = localStorage.getItem("access_token");

    try {
      const response = await fetch(`https://backend.homecert.ie/api/checkout-session/${selectedBid.id}/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = await response.json();
      console.log("API Response:", data); // ✅ Debugging response

      if (data.checkout_session_id) {
        if (!stripe) {
          console.error("Stripe is not initialized yet.");
          return;
        }
        console.log("Redirecting to Stripe Checkout...");
        await stripe.redirectToCheckout({ sessionId: data.checkout_session_id });
      } else {
        console.error("Error: No session ID returned");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  if (!bids.length)
    return <div className="text-center mt-5">No bids available for this job</div>;

  return (
    <div className="container-fluid p-4 p-md-5">
      <div className="row">
        <div className="col-md-2 col-12 mb-4 mb-md-0">
          <Link to={"/client/dashboard"} className="">
            <IoIosArrowBack size={30} className="shadow bgbluu p-1 rounded-circle" color="white" />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="table-responsive">
          <div className="border-0">
            <div className="col-md-12 text-white bgbluu d-flex justify-content-center">
              <h2 className="display-5 fw-bold">Your Quotes</h2>
            </div>
          </div>
          <table className="table col-12 table-bordered table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Quote</th>
                <th>Submitted Date</th>
                <th>Assessor ID</th>
                <th>Profile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={bid.id}>
                  <td data-label="No">{index + 1}</td>
                  <td data-label="Quote">€{bid.amount}</td>
                  <td data-label="Submitted Date">
                    {new Date(bid.created_at).toLocaleDateString()}
                  </td>
                  <td data-label="Assessor ID">#{bid.assessor.id}</td>
                  <td data-label="Profile">
                    <button 
                      className="btn button3"
                      onClick={() => handleOpenModal(bid)}
                    >
                      View Profile
                      <RiArrowRightUpLine style={{ marginLeft: 5 }} />
                    </button>
                  </td>
                  <td data-label="Action" className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={() => handleSwitchToQuoteModal(bid)}
                    >
                      Accept Quote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Profile Modal */}
          {showModal && selectedBid && (
            <div
              className="modal fade show"
              style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              tabIndex="-1"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header text-white bgbluu">
                    <h5 className="modal-title">BER Assessor #{selectedBid.assessor.id}</h5>
                    <button
                      type="button"
                      className="btn-close closemodelbutton"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {loading ? (
                      <div className="text-center">
                        <div className="spinner-border text-dark" role="status"></div>
                      </div>
                    ) : bidDetails ? (
                      <>
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Earliest Availability:</span>
                          <span>{bidDetails.availability}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>SEAI Registered:</span>
                          <span>{bidDetails.SEAI_Registered ? "Yes" : "No"}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>VAT Registered:</span>
                          <span>{bidDetails.VAT_Registered ? "Yes" : "No"}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>Professional Insurance:</span>
                          <span>{bidDetails.insurance ? "Yes" : "No"}</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-danger">Failed to load details</div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn button12"
                      onClick={() => handleSwitchToQuoteModal(selectedBid)}
                    >
                      Accept €{selectedBid.amount} Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quote Modal */}
          {showQuote && selectedBid && (
            <div
              className="modal fade show"
              style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              tabIndex="-1"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header text-white bgbluu">
                    <div className="d-flex justify-content-center">
                      <h5>Secure Checkout</h5>
                    </div>
                    <button
                      type="button"
                      className="btn-close closemodelbutton"
                      onClick={handleQuoteModalClose}
                    ></button>
                  </div>
                  <h6 className="mt-3 mx-3 mb-3">
                    Instantly confirm your booking below:
                  </h6>
                  <div className="modal-body">
                    {loading ? (
                      <div className="text-center">
                        <div className="spinner-border text-dark" role="status"></div>
                      </div>
                    ) : bidDetails ? (
                      <div className="shadow p-4">
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>BER Assessor ID:</span>
                          <span>#{bidDetails.assessor.id}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>SEAI Registered:</span>
                          <span>{bidDetails.SEAI_Registered ? "Yes" : "No"}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>VAT Registered:</span>
                          <span>{bidDetails.VAT_Registered ? "Yes" : "No"}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>Insured:</span>
                          <span>{bidDetails.insurance ? "Yes" : "No"}</span>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between">
                          <span>Available From:</span>
                          <span>
                            {new Date(bidDetails.created_at).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="bg-light p-3 d-flex mt-2 align-items-center justify-content-between">
                          <span>
                            <span className="fw-bold text-success">
                              Total Price:{" "}
                            </span>
                            <br />
                            <span className="fontquote">
                              *Inclusive of SEAI fees and VAT (if applicable)
                            </span>
                          </span>
                          <span className="text-success">€{bidDetails.amount}</span>
                        </div>

                        <div className="bgsuccess1 p-3 d-flex mt-2 align-items-center justify-content-between">
                          <span>
                            <span className="fw-bold text-success">Due Now: </span>
                            <br />
                            <span className="fontquote">Booking Deposit</span>
                          </span>
                          <span className="text-success">€20</span>
                        </div>

                        <div className="text-center mt-2 fontquote">
                          <p>
                            Confirm your booking instantly by paying the booking
                            deposit, then pay the balance (€{bidDetails.amount - 20})
                            to your assessor on the day of your assessment.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-danger">
                        Failed to load bid details
                      </div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn button12"
                      onClick={handleAcceptQuote}
                    >
                      Pay Booking Deposit
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleQuoteModalClose}
                    >
                      Cancel
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

export default YourQuotes;