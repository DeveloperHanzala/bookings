import React from 'react'

const Ventilation = () => {
  return (
    <>
    <div className='container  mt-5'>
      <div className='shadow-sm'>
    <div className='bg-light text-center  p-4'>
       <span className='fw-bold fs-4'> Ventilation Factors</span>
    </div>
        <div className='row'>
        <div className='col-md-7 '>
          <div className='p-3'>

              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div className='col-md-6 d-flex' >
                  <div className='col-md-3'>
                  <input type='text' className='inpwall1' />
                  </div>
                  <div className='col-md-9 mx-1'>
                <span> draught lobby on main entrance</span>
                  </div>
                </div>
                <div className='col-md-6 d-flex mx-2'>
                <div className='col-md-3'>
                  <input type='text' className='inpwall1' />
                  </div>
                  <div className='col-md-9 mx-1'>
                <span> number of sides sheltered</span>
                  </div>
              </div>
                </div>
                <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div className='col-md-6 d-flex '>
                <div className='col-md-3'>
                  <input type='text' className='inpwall1' />
                  </div>
                  <div className='col-md-9 mx-1'>
                <span> pressure test results available</span>
                  </div>
              </div>
              <div className='col-md-6 d-flex mx-2'>
                <div className='col-md-3'>
                  <input type='text' className='inpwall1' />
                  </div>
                  <div className='col-md-9 mx-1'>
                <span> Pressure test result reference number</span>
                  </div>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div className='col-md-4'>
                <input type='text' />
                </div>
                <div className='col-md-8 mx-2'>
                <span>  If yes, enter adjusted result (ac/h)</span>
              </div>
              </div>
              <div className='col-md-12 mt-3 mb-4 d-flex align-items-center' >
                <div className='col-md-4'>
                <input type='text' />
                </div>
                <div className='col-md-8 mx-2'>
                <span> Is there uninsulated ducting on MVHR 
                system outside dwelling envelope?</span>
              </div>
              </div>
<div className='col-md-12 mb-4' style={{color:"#003366"}}>
    <span className='fw-bold'> DEAP manual contains guidance on using non default SFP and efficiency for 
    mechanical ventilation units as well as identifying the air flow rate in EAHPs</span>
</div>
          </div>





            </div>


            <div className='col-md-5 '>
          <div className='p-3'>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span>  If yes, enter adjusted result (ac/h)</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span>  If yes, enter adjusted result (ac/h)</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span>  positive input ventilation from loft</span>
              </div>
              </div>

              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span>  positive input ventilation from outside</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span>  If yes, enter adjusted result (ac/h)</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span> whole house extract ventilation</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span>balanced whole-house mech. ventilation without heat recovery</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div>
                <input type='checkbox' className='p-2' />
                </div>
                <div className=' mx-2'>
                <span> balanced whole-house mechanical ventilation with heat recovery</span>
              </div>
              </div>
              <div className='col-md-12 mt-3  d-flex align-items-center' >
                <div className='col-md-6 d-flex' >
                  <div className='col-md-3'>
                  <input type='checkbox' className='p-2' />
                  </div>
                  <div className='col-md-9'>
                <span> exhaust air heat pump (EAHP)</span>
                  </div>
                </div>
                <div className='col-md-6 d-flex'>
                <div className='col-md-3'>
                  <input type='text' className='inpwall1' />
                  </div>
                  <div className='col-md-9 mx-1'>
                <span>air flow rate for EAHP (m3/h)</span>
                  </div>
              </div>
                </div>

          </div>





            </div>
        </div>

      </div>
    </div>







    </>
  )
}

export default Ventilation
