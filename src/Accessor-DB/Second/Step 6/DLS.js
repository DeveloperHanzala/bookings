import React from 'react'

const DLS = () => {
  return (
    <>
      <div className="shadow-sm pb-2 mt-3 ">
             
      <div className="bg-light rounded  p-3">
      Heating Controls (tick all that apply)
      </div>
      <div className="row p-2 pb-0">
      <div className=" col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">  pre 1991 full flow mid-high temp: not pre-insulated</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          pre 1991 full flow low temp: pre-insulated
          </div>
        </div>


        <div className=" col-md-12 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass">  1991 or later variable flow mid temp: pre-insulated</span>
        </div>
        <div className="col-md-12 mt-2 col-12 d-flex">
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass">
          1991 or later variable flow low temp: pre-insulated
          </div>
        </div>

        <div className=" col-md-12 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <span className="fontass"> See DEAP C1.1 for dist. loss factor derivation method</span>
        </div>
        
  
       

      </div>
    </div> 
   
   




    </>
  )
}

export default DLS
