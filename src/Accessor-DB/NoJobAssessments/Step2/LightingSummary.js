import React from 'react';

const LightingSummary = ({ formData, handleChange }) => {
  return (
    <>
      <div className='container mt-5'>
        <div className='shadow-sm'>
          <div className='bg-light text-center p-4'>
            <span className='fw-bold fs-4'>Lighting summary</span> (total number of each bulb type from room by room record)
          </div>
          <div className='row p-3'>
            <div className='col-md-4 d-flex align-items-center'>
              <div className='col-md-5'>
                <input
                  type='text'
                  name='linear_flourescent'
                  value={formData.linear_flourescent || ''}
                  onChange={handleChange}
                  className='inpwall1'
                />
              </div>
              <div className='mx-2'>
                <span>#Linear flourescent</span>
              </div>
            </div>

            <div className='col-md-4 d-flex align-items-center'>
              <div className='col-md-5'>
                <input
                  type='text'
                  name='cfl'
                  value={formData.cfl || ''}
                  onChange={handleChange}
                  className='inpwall1'
                />
              </div>
              <div className='mx-2'>
                <span>#CFL</span>
              </div>
            </div>

            <div className='col-md-4 d-flex align-items-center'>
              <div className='col-md-5'>
                <input
                  type='text'
                  name='halogen_lamps'
                  value={formData.halogen_lamps || ''}
                  onChange={handleChange}
                  className='inpwall1'
                />
              </div>
              <div className='mx-2'>
                <span>#Halogen lamps</span>
              </div>
            </div>

            <div className='col-md-4 mt-3 d-flex align-items-center'>
              <div className='col-md-5'>
                <input
                  type='text'
                  name='led'
                  value={formData.led || ''}
                  onChange={handleChange}
                  className='inpwall1'
                />
              </div>
              <div className='mx-2'>
                <span>#LED</span>
              </div>
            </div>

            <div className='col-md-4 mt-3 d-flex align-items-center'>
              <div className='col-md-5'>
                <input
                  type='text'
                  name='hologen_lv'
                  value={formData.hologen_lv || ''}
                  onChange={handleChange}
                  className='inpwall1'
                />
              </div>
              <div className='mx-2'>
                <span>#Halogen LV</span>
              </div>
            </div>

            <div className='col-md-4 mt-3 d-flex align-items-center'>
              <div className='col-md-5'>
                <input
                  type='text'
                  name='incadescent_unknown'
                  value={formData.incadescent_unknown || ''}
                  onChange={handleChange}
                  className='inpwall1'
                />
              </div>
              <div className='mx-2'>
                <span>#Incandescent/ unknown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightingSummary;
