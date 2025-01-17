import React from 'react'

const HeatingS1 = () => {
  return (
    <>
 <div className='row'>
    <div className='col-md-4'>
    <h6 className="fw-bold">Heating system #1 *</h6>
         <div className="shadow-sm pb-2 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      Heating system #1
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">efficiency %</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          proportion of group heating %
          </div>
        </div>


        <div className=" col-md-12 mt-2 col-12">
        <span className="fontass">Fuel type of heating system</span>
          <div className="mx-2">
            <input
              type="text"
              name=""
              className='inpwall'
            />
          </div>
         
        </div>
        <div className=" col-md-12 mt-2 col-12">
        <span className="fontass2">Make and model of heating system</span>
          <div className="mx-2">
            <input
              type="text"
              name=""
              className='inpwall1'
            />
          </div>
         
        </div>
       

      </div>
    </div> 
    </div>

    <div className='col-md-4'>
    <h6 className="fw-bold">Heating system #2 *</h6>
         <div className="shadow-sm pb-2 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      Heating system #2
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">efficiency %</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          proportion of group heating %
          </div>
        </div>


        <div className=" col-md-12 mt-2 col-12">
        <span className="fontass">Fuel type of heating system</span>
          <div className="mx-2">
            <input
              type="text"
              name=""
              className='inpwall'
            />
          </div>
         
        </div>
        <div className=" col-md-12 mt-2 col-12">
        <span className="fontass2">Make and model of heating system</span>
          <div className="mx-2">
            <input
              type="text"
              name=""
              className='inpwall1'
            />
          </div>
         
        </div>
       

      </div>
    </div> 
    </div>








    <div className='col-md-4'>
    <h6 className="fw-bold">CHP / Waste Heat *</h6>
         <div className="shadow-sm pb-2 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      CHP / Waste Heat
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-12 col-12 d-flex">
          <div className="col-md-3 mx-2">
            <input
              type="text"
              name=""
              
            />
          </div>
          <span className="fontass">% heat from CHP (or power station)</span>
        </div>
        <div className="col-md-12 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          power station
          </div>
        </div>


        <div className=" col-md-12  col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">CHP</span>
        </div>
        <div className="col-md-12  col-12 d-flex">
        <div className="mx-2">
          
          </div>
          <div  className=" fontass">
          CHP efficiencies
          </div>
        </div>

        <div className=" col-md-7 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">Electrical %</span>
        </div>
        <div className=" col-md-5  col-12">
        <span className="fontass">Fuel</span>
          <div className="">
            <input
              type="text"
              name=""
              className='inpwall'
            />
          </div>
         
        </div>

        <div className=" col-md-12  col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">Thermal %</span>
        </div>
      

       

      </div>
    </div> 
    </div>
    </div>




     
      
    </>
  )
}

export default HeatingS1
