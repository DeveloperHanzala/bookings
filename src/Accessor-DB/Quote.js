import React from 'react'

const Quote = () => {
  return (
    <>

    <div className="container-fluid step1bg">
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font text-light">Your Preferred Date</h1>
              <p className="step1para text-light">
                Not sure yet? Just select 'I'm <span className="text-warning">Flexible</span>
              </p>
            </div>
          </div>
        </div>
      </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='p-5 '>
                    <div className='shadow round text-center'>
                            <div className=' bg-primary round text-light'>
                                <h2 className='display-6 '>Job Details</h2>
                            </div>
                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Location:</span>
                                </div>
                                <div>
                                    <span>Ballybofey, Co. Donegal</span>
                                </div>
                            </div>
                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Eircode:</span>
                                </div>
                                <div>
                                    <span>F93WE1C</span>
                                </div>
                            </div>

                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Property Type:</span>
                                </div>
                                <div>
                                    <span>Detached</span>
                                </div>
                            </div>
                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Size:</span>
                                </div>
                                <div>
                                    <span>185 - 210 Sq. mt</span>
                                </div>
                            </div>
                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Beds:</span>
                                </div>
                                <div>
                                    <span>05</span>
                                </div>
                            </div>
                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Heat Pump:</span>
                                </div>
                                <div>
                                    <span>None</span>
                                </div>
                            </div>

                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Additions:</span>
                                </div>
                                <div>
                                    <span>None</span>
                                </div>
                            </div>
                            <div className='d-flex p-4 justify-content-between'>
                                <div>
                                    <span>Purpose:</span>
                                </div>
                                <div>
                                    <span>Letting</span>
                                </div>
                            </div>
                    </div>

                    </div>
                </div>
                <div className='col-md-6'>
                <div className='p-5 '>
                    <div className='shadow round  text-center'>
                            <div className=' bg-primary round text-light'>
                                <h2 className='display-6 '>Your Quote</h2>
                            </div>
                            <div className=' p-4 text-center'>
                                <div>
                                    <span>Include SEAI fees.</span>
                                </div>
                                
                            </div>
                            <div className=' p-4 text-center'>
                                <div>
                                    <span>Include VAT (if registered).</span>
                                </div>
                                
                            </div>
                            <div className=' p-4 text-center'>
                                <div>
                                    <span>Include €30 Website fee.</span>
                                </div>
                                
                            </div>
                            <div className=' p-3 text-center'>
                                <div >
                                    <span className='border border-primary px-5 p-3'>€170</span>
                                    <p className='mt-3'>Eg. 170, no euro sign or cents.</p>
                                </div>
                                
                            </div>
                            <div className=' pb-4 text-center'>
                                <div className='px-5'>
                                    <input type='checkbox' className='mx-2' />
                                    <span>I agree to the <span className='text-danger'>  terms of use </span> <br/> and I am available from Mon 06 Jan.</span>
                                   
                                </div>
                                
                            </div>
                            <div className=' pb-4 text-center'>
                                <div className='px-5'>
                                  <button className='btn btn-primary px-5'>Submit Quote</button>
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

export default Quote
