import React from "react";

const WallConstruction = () => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded  p-3">
      Wall construction Main Wall
      </div>
      <div className="row p-2 pb-4">
      <div className=" col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass"> stone</span>
        </div>
        <div className="col-md-7 col-8 d-flex">
          <div className=" col-md-4 mx-2">
            <input
              type="text"
              name=""
              className="inpwall"
            />
          </div>
          <div  className=" col-md-8 fontass ">
          wall thickness (mm)
          </div>
        </div>
        <div className=" col-md-5 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">solid brick</span>
        </div>
        <div className="col-md-7 col-8 d-flex">
          <div className=" col-md-4 mx-1">
            <input
              type="text"
              name=""
              className="inpwall"
            />
          </div>
          <div  className=" col-md-8 fontass ">
          is wall semi exposed?
          </div>
        </div>
        <div className=" col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">cavity</span>
        </div>
        <div className="col-md-7 col-8 text-center">
          <div  className=" fw-bold  ">
          Wall Insulation
          </div>
        </div>
        <div className=" col-md-5 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass"> solid concrete</span>
        </div>
       <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
        <div className="col-md-5 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass"> as built</span>
        </div>
        <div className="col-md-5 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass"> bead</span>
</div>
       </div>
   
       <div className=" col-md-5 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">hollow block</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">cavity fill</span>
        </div>
        <div className="col-md-5 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass"> EPS</span>
</div>
       </div>

       <div className=" col-md-5 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">timber frame</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">external</span>
        </div>
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass"> min fibre</span>
</div>
       </div>
       <div className=" col-md-5 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">other/unknown</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">internal</span>
        </div>
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">dense</span>
</div>
       </div>


       <div className=" col-md-5 col-4   d-flex">
          <div className="mx-2">
            <input
              type="text"
              name=""
              className="inpwall"
            />
          </div>
        
        </div>
        <div className=" col-md-12 mt-2 col-4 align-items-center justify-content-center d-flex">
        <span className="fontass">insulation thickness if observable(mm)</span>
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

export default WallConstruction;
