import React from 'react'

const ShowersBath = () => {
  return (
    <>
     <div className="shadow-sm pb-5 mt-3 ">
               <div className="bg-light rounded  p-3">
               Showers and baths
               </div>
               <div className="row  p-3">
                <div className='border'>
                <div className='col-md-4 d-flex justify-content-center'>
                <div className=' mx-2'>  
                    <input type="checkbox" name="Shower" id="shower" />
                </div>
                <div>
                     <span>Showers and baths</span>
                </div>
                </div>
                <div className='col-md-8 d-flex justify-content-center'>
                <div className=' mx-2'>  
                    <input type="checkbox" name="Shower" id="shower" />
                </div>
                <div>
                     <span>Is water use target (hot and cold) 125 l/p/d (y/n)?</span>
                </div>
                </div>
                </div>
               </div>



                <div className='custom-table-container'>
                <table className="custom-table ">
       
       <thead >
         <tr>
         <th>Shower #</th>
           <th>Is flow rate known? 
           (y/n)</th>
           <th> Shower type: Electric/
 Unvented/ Vented/ 
Vented+pump</th>
           <th>Flow restrictor? 
           (y/n)</th>
           <th>Flow rate 
           (if known)?</th>
           <th>WWHR efficiency and 
           utilisation factor</th>
           
          
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='fw-bold'>01</td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
          
           
         </tr>
         <tr>
         <td className='fw-bold'>02</td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
          
           
         </tr>
         <tr>
         <td className='fw-bold'>03</td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
          
           
         </tr>
         <tr>
         <td className='fw-bold'>04</td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
          
           
         </tr>
         <tr>
         <td className='fw-bold'>05</td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
           <td><input type="text" className="custom-input"    /></td>
          
           
         </tr>
         
       </tbody>
     </table>
                </div>






             </div> 



    </>
  )
}

export default ShowersBath
