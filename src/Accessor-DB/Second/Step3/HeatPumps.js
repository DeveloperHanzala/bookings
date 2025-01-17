import React from 'react'

const HeatPumps = () => {
  return (
    <>

      <div className="shadow-sm pb-4 mt-3 ">
      <div className="bg-light rounded  p-3">
      Heat Pumps 
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
        <div className="col-md-6 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className="fontass">
          air-to-air
          </div>
        </div>
        <div className="col-md-6 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
<div  className=" fontass">
ground-to-air
</div>
</div>
        <div className=" col-md-6 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">water-to-air</span>
        </div>
        <div className="col-md-6 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          air-to-water
          </div>
        </div>

        <div className=" col-md-6 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">ground-to-water</span>
        </div>
        <div className="col-md-6 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          water-to-water
          </div>
        </div>



        
        <div className=" col-md-6 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">gas-fired - ground / water</span>
        </div>
        <div className="col-md-6 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          gas-fired, air source
          </div>
        </div>

    
        <div className="col-md-12 mt-2 col-12 d-flex">
        <div className="mx-1">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          heat pump includes auxiliary electric heater
          </div>
        </div>


<div className='col-md-12 mt-3 col-12 '>
        <label className='fw-bold'>Manufacturer / make / model number</label>
        <input type='text' />
</div>






      </div>
    </div> 
    </>
  )
}

export default HeatPumps
