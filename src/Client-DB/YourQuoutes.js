import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";

const YourQuotes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleQuoteModal = () => {
    setShowQuote(true);
  };

  const handleQuoteModalClose = () => {
    setShowQuote(false);
  };

  return (
    <>
      <div className="container p-5">
        <div className="table-responsive">
          <div className="border-0">
            <div className="col-md-12 text-white bgbluu d-flex justify-content-center">
              <h2 className="display-5 fw-bold">Your Quotes</h2>
            </div>
          </div>
          <table className="table table-bordered table-hover">
            <thead className="border-0">
              <tr className="border-0">
                <th className="border-0 table-light1">No</th>
                <th className="border-0 table-light1">Quote</th>
                <th className="border-0 table-light1">Available From</th>
                <th className="border-0 table-light1">Assessor ID</th>
                <th className="border-0 table-light1">Profile</th>
                <th className="border-0 table-light1">Quotes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-0">
                <td className="border-0">1</td>
                <td className="border-0">$285</td>
                <td className="border-0">Sun 20 Jan</td>
                <td className="border-0">#102036</td>
                <td className="border-0">
                  View Profile{" "}
                  <RiArrowRightUpLine
                    style={{
                      backgroundColor: "#003366",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenModal}
                  />
                </td>
                <td className="border-0">
                  <button className="btn btn-success" onClick={handleQuoteModal}>
                    Accept Quote
                  </button>
                </td>
              </tr>
              <tr className="border-0">
                <td className="border-0">1</td>
                <td className="border-0">$285</td>
                <td className="border-0">Sun 20 Jan</td>
                <td className="border-0">#102036</td>
                <td className="border-0">
                  View Profile{" "}
                  <RiArrowRightUpLine
                    style={{
                      backgroundColor: "#003366",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenModal}
                  />
                </td>
                <td className="border-0">
                  <button className="btn btn-success" onClick={handleQuoteModal}>
                    Accept Quote
                  </button>
                </td>
              </tr>
              <tr className="border-0">
                <td className="border-0">1</td>
                <td className="border-0">$285</td>
                <td className="border-0">Sun 20 Jan</td>
                <td className="border-0">#102036</td>
                <td className="border-0">
                  View Profile{" "}
                  <RiArrowRightUpLine
                    style={{
                      backgroundColor: "#003366",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenModal}
                  />
                </td>
                <td className="border-0">
                  <button className="btn btn-success" onClick={handleQuoteModal}>
                    Accept Quote
                  </button>
                </td>
              </tr>
              <tr className="border-0">
                <td className="border-0">1</td>
                <td className="border-0">$285</td>
                <td className="border-0">Sun 20 Jan</td>
                <td className="border-0">#102036</td>
                <td className="border-0">
                  View Profile{" "}
                  <RiArrowRightUpLine
                    style={{
                      backgroundColor: "#003366",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenModal}
                  />
                </td>
                <td className="border-0">
                  <button className="btn btn-success" onClick={handleQuoteModal}>
                    Accept Quote
                  </button>
                </td>
              </tr>
              <tr className="border-0">
                <td className="border-0">1</td>
                <td className="border-0">$285</td>
                <td className="border-0">Sun 20 Jan</td>
                <td className="border-0">#102036</td>
                <td className="border-0">
                  View Profile{" "}
                  <RiArrowRightUpLine
                    style={{
                      backgroundColor: "#003366",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenModal}
                  />
                </td>
                <td className="border-0">
                  <button className="btn btn-success" onClick={handleQuoteModal}>
                    Accept Quote
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-white bgbluu">
                <div className=" d-flex  justify-content-center">
                <h5 className="">BER Assessor #102036</h5>
                </div>
                <button
                  type="button"
                  className="btn-close closemodelbutton"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
               <div className="d-flex align-items-center justify-content-between">
              <span>Earliest Availability</span>
              <span>Sun 20 Jan</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>SEAI Registered:</span>
              <span>Yes</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>VAT Registered:</span>
              <span>No</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>Professional Insurance</span>
              <span>Yes</span>
               </div>
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
    onClick={() => {
      handleQuoteModal(); // Call the first function
      handleCloseModal(); // Call the second function
    }}
  >
    Accept $285 Quote
  </button>
</div>

            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuote && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-white bgbluu">
              <div className=" d-flex  justify-content-center">
                <h5 className="">Accept Quote</h5>
                </div>
                <button
                  type="button"
                  className="btn-close closemodelbutton"
                  onClick={handleQuoteModalClose}
                ></button>
              </div>
              <h6 className="mt-3 mx-3 mb-3">Instantly confirm your booking below:</h6>
              <div className="modal-body ">
                <div className="shadow p-4">
                <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>BER Assessor ID:</span>
              <span>#102036</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>SEAI Registered:</span>
              <span>Yes</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>VAT Registered:</span>
              <span>No</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>Insured:</span>
              <span>Yes</span>
               </div>
               <div className="d-flex mt-2 align-items-center justify-content-between">
              <span>Available Form:</span>
              <span>Sun 19 Jan 2025</span>
               </div>

               <div className=" bg-light p-3 d-flex mt-2 align-items-center justify-content-between">
              <span><span className="fw-bold text-success">Total Price: </span>   <br/>
              <span className="fontquote">*Inclusive of SEAI fees and VAT (if applicable)</span></span>
              <span className="text-success">$285</span>
               </div>


               <div className=" bgsuccess1 p-3 d-flex mt-2 align-items-center justify-content-between">
              <span><span className="fw-bold text-success">Due Now: </span>   <br/>
              <span className="fontquote">Booking Deposit</span></span>
              <span className="text-success">$50</span>
               </div>

                <div className="text-center mt-2 fontquote">
                  <p>Confirm your booking instantly by paying the booking deposit, then pay the balance ($285) to your assessor on the day of your assessment.</p>
                </div>

                </div>

              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn button12"
                  onClick={handleQuoteModalClose}
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
    </>
  );
};

export default YourQuotes;
