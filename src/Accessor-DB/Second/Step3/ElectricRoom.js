import React from 'react'

const ElectricRoom = () => {
  return (
    <>
<div className="shadow-sm pb-4 mt-3 ">
      <div className="bg-light rounded  p-3">
      Electric Room Heaters 
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-6 mb-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">Primary</span>
        </div>
      <div className=" col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">Secondary</span>
        </div>
        <div className="col-md-12 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className="fontass">
          panel, convector, or radiant heater
          </div>
        </div>
        <div className="col-md-12 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
<div  className=" fontass">
fan heater
</div>
</div>

      </div>
    </div> 


    <div className="shadow-sm pb-4 mt-3 ">
      <div className="bg-light rounded  p-3">
      Secondary heating make / manufacturer/model number
      </div>
      <div className="row p-2 d-flex  pb-0">
      <div className=" col-md-12 mb-2 col-12 ">
          <div className="mx-2">
            <input
              type="text"
              name=""
              className='w-100'
            />
          </div>
         
        </div>
     
 

      </div>
    </div> 


    </>
  )
}

export default ElectricRoom
