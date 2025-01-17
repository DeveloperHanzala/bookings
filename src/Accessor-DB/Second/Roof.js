import React from "react";

const Roof = () => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded  p-3">
      Roof Construction: Main Dwelling
      </div>
      <div className="row p-2 pb-4">
      <div className=" col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass"> pitched - insulation btw joists</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          
          <div  className=" ">
          Roof insulation
          </div>
        </div>
        <div className=" col-md-7 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">pitched - insulation in rafters</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          <div className=" col-md-4 mx-1">
            <input
              type="text"
              name=""
              className="inpwall"
            />
          </div>
          <div  className=" col-md-8 fontass ">
          thickness (mm)
          </div>
        </div>
        <div className=" col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass"> flat - insulation integral</span>
        </div>
        <div className="col-md-5 col-8 d-flex ">
        <div className=" col-md-4 mx-1">
            <input
              type="checkbox"
              name=""
             
            />
          </div>
          <div  className="  col-md-8 fontass  ">
          fibre
          </div>
        </div>
        <div className=" col-md-7 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">room in roof</span>
        </div>
       <div className="col-md-5 col-8 justify-content-center mt-2 d-flex">
        <div className="col-md-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">warmcell</span>
        </div>
        
       </div>
   
       <div className=" col-md-7 col-4  d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">no heat loss roof</span>
        </div>
        <div className="col-md-5 col-8 justify-content-center mt-2 d-flex">
        
        <div className="col-md-12 d-flex">
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
         <span className="fontass">other</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">Unknown</span>
        </div>
        <div className="col-md-6 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
         <span className="fontass">Dense</span>
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
      




      </div>
    </div>
  );
};

export default Roof;
