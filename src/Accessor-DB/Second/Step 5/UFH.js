import React from 'react'

const UFH = () => {
  return (
    <>
    <div className='row'>
    <div className='col-md-6'>
    <h6 className="fw-bold">Underfloor heating (UFH) *</h6>
         <div className="shadow-sm pb-2 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      Underfloor heating (UFH)
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass"> in insulated timber floor</span>
        </div>
        <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          whole house UFH
          </div>
        </div>


        <div className=" col-md-4 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">  in screed</span>
        </div>
        <div className="col-md-8 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          Partial UFH including living area
          </div>
        </div>

        <div className=" col-md-4 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass"> in concrete</span>
        </div>
        
        <div className="col-md-8 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          Partial UFH not including living area
          </div>
        </div>

       

      </div>
    </div> 
    </div>

    <div className='col-md-6'>
    <h6 className="fw-bold">Pumps *</h6>
         <div className="shadow-sm pb-2 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      Pumps
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">How many central heating pumps for space heating?</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          Central heating pump(s) outdoors
          </div>
        </div>


        <div className=" col-md-12  col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">How many oil boiler fuel pumps?</span>
        </div>
        <div className="col-md-12  col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          Oil fuel pump(s) outdoors
          </div>
        </div>

        <div className=" col-md-12  col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">How many gas boiler flue fans?</span>
        </div>
      

       

      </div>
    </div> 
    </div>
    </div>


    <div className='col-md-12'>
    <h6 className="fw-bold">Comments on Heating Controls *</h6>
         <div className="shadow-sm pb-3 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      Comments on Heating Controls
      </div>
      <div className="row p-4 pb-0">
 
 <textarea rows={2} 
 style={{
     overflow: "hidden",
  
     height: "auto",
     border:"none",
     resize: "none",
   }} ></textarea>



</div>
    </div> 
    </div>


    </>
  )
}

export default UFH
