import React from 'react'

const CHP = () => {
  return (
    <>
    <div className="shadow-sm pb-4 mt-3 ">
      <div className="bg-light rounded  p-3">
      Individual CHP? 
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-12 mb-2 col-12 d-flex">
          <div className="col-md-4 mx-2">
            <input
              type="text"
              name=""
              className='inpwall1'
            />
          </div>
          <span className="fontass">% heat from CHP</span>
        </div>
      <div className=" col-md-12 col-12 d-flex">
         
          <span className="fw-bold mx-2">CHP efficiencies</span>
        </div>
        <div className="col-md-12 mt-2 col-12 d-flex align-items-center">
        <div className="col-md-4 mx-2">
            <input
              type="text"
              name=""
              
            />
          </div>
          <div  className="fontass">
          Electrical %
          </div>
        </div>
        <div className="col-md-12 mt-2 col-12 d-flex align-items-center">
        <div className="col-md-4 mx-2">
            <input
              type="text"
              name=""
              
            />
          </div>
          <div  className="fontass">
          Thermal %
          </div>
        </div>
        <div className="col-md-12 mt-2 col-12">
        <div  className="mx-2 fontass">
        Fuel
</div>
        <div className="mx-2">
            <input
              type="text"
              name=""
              
            />
          </div>

</div>

      </div>
    </div> 



    </>
  )
}

export default CHP
