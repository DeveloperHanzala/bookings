import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const SolarHWS = () => {
  return (
    <>
      <div className="shadow-sm pb-5 mt-3 ">
           <div className="bg-light rounded  p-3">
           Solar Water Heating System 
           </div>
           <div className="row p-2 pb-5">
           <div className=" col-md-6 mt-3 col-12 d-flex">
               <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <span className="fontass">Yes</span>
             </div>
             <div className="col-md-6 mt-3 col-12 d-flex">
             <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <div  className=" fontass">
               No
               </div>
             </div>
     
     
             <div className=" col-md-4 mt-3 col-12 d-flex">
               <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <span className="fontass">evacuated tube</span>
             </div>
             <div className="col-md-4 mt-3 col-12 d-flex">
             <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <div  className=" fontass">
               flat plate, glazed
               </div>
             </div>
     
             <div className=" col-md-4 mt-3 col-12 d-flex">
               <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <span className="fontass">flat plate unglazed</span>
             </div>
             <div className="col-md-7 mt-4 mx-2 col-12 d-flex">
             <div className="col-md-5 mx-1">
                 <input
                   type="text"
                   name=""
                   
                 />
               </div>
               <div  className=" fontass">
               solar collector area (m2)
               </div>
             </div>
              
              <div className="col-md-4 mt-4 col-12">
       <div className=' d-flex'>
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass2">
          area is "gross" area
          </div>
       </div>
       <div className=' d-flex'>
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass2">
          area is "aperture area
          </div>
       </div>
        </div>
            

             <div className="col-md-3 mt-3 col-12 d-flex">
             <div className="mx-2">
                
               </div>
               <div  className=" fontass">
               overshading:
               </div>
             </div>
             <div className="col-md-4 mt-3 col-12">
       <div className=' d-flex'>
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass2">
          very little (<IoIosArrowBack />20%)
          </div>
       </div>
       <div className=' d-flex'>
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass2">
          significant (61-80%)
          </div>
       </div>
        </div>
            
        <div className="col-md-4 mt-3 col-12">
       <div className=' d-flex'>
        <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass2">
          modest (20-60%)
          </div>
       </div>
       <div className=' d-flex'>
          <div className="mx-2">
            <input
              type="checkbox"
              name=""
              
            />
          </div>
          <div  className=" fontass2">
          heavy (<IoIosArrowForward />80%)
          </div>
       </div>
        </div>



     
             <div className=" col-md-12 mt-5 col-12 d-flex">
             <span className="fontass">dedicated solar storage volume (litres)</span>
               <div className="mx-2">
                 <input
                   type="text"
                   name=""
                   
                 />
               </div>
              
             </div>
             <div className="col-md-12 mt-4 col-12 d-flex">
             <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <div  className=" fontass">
               contained within combined cylinder
               </div>
             </div>
     
             <div className=" col-md-12 mt-3 col-12 d-flex">
               <div className="mx-2">
                 <input
                   type="checkbox"
                   name=""
                   
                 />
               </div>
               <span className="fontass">contained within combined cylinder</span>
             </div>
             <div className="col-md-6 mt-4 col-12 d-flex justify-content-end  align-items-center">
             <div className="col-md-4 mx-2">
                <input type="text" />
               </div>
               <div  className=" fontass">
               orientation
               </div>
             </div>
     
             <div className="col-md-6 mt-4 col-12 d-flex justify-content-start align-items-center">
             <div className="col-md-4 mx-2">
                <input type="text" />
               </div>
               <div  className=" fontass">
               tilt
               </div>
             </div>

             <div className="col-md-12 mt-4 col-12">
             <div  className="mx-2 fontass">
             Solar panel make and model:
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

export default SolarHWS
