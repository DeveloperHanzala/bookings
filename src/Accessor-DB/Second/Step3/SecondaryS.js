import React from "react";

const SecondaryS = () => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded  p-2 pt-3 pb-3">
      Secondary Heating System 
      </div>
      <div className="row p-2 pb-4">
      <div className=" col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">no secondary system</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          radiator system
          </div>
        </div>
        <div className=" col-md-12 col-12  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">storage heaters</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className=" mx-2">
            <input
              type="checkbox"
              name=""
            />
          </div>
          <div  className=" fontass ">
          underfloor
          </div>
        </div>
        <div className=" col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">room heaters only</span>
        </div>
        <div className="col-md-12 col-12 d-flex ">
        <div className="mx-2 ">
            <input
              type="checkbox"
              name=""
             
            />
          </div>
          <div  className=" fontass  ">
          warm air
          </div>
        </div>
        <div className="col-md-12 col-12 d-flex ">
        <div className="mx-2 ">
            <input
              type="checkbox"
              name=""
             
            />
          </div>
          <div  className=" fontass  ">
          fan coil radiators
          </div>
        </div>
        <div className="col-md-12 col-8 d-flex ">
        <div className="mx-2 ">
            <input
              type="checkbox"
              name=""
             
            />
          </div>
          <div  className=" fontass  ">
          other (describe briefly):
          </div>
        </div>
  
    
        <div className=" col-md-6  col-4  ">
          <div className="mx-2">
            <input
              type="text"
              name=""
              className="inpwall"
            />
          </div>
             
        </div>

       


 




      </div>
    </div>
  );
};

export default SecondaryS;
