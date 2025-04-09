import React from 'react';

const Ventilation = ({ formData, handleChange }) => {
  return (
    <>
      <div className='container mt-5'>
        <div className='shadow-sm'>
          <div className='bg-light text-center p-4'>
            <span className='fw-bold fs-4'> Ventilation Factors</span>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='p-3'>
                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div className='col-md-6 d-flex'>
                    <div className='col-md-3'>
                      <input
                        type='text'
                        className='inpwall1'
                        name='draught_lobby_on_main_entrance'
                        value={formData.draught_lobby_on_main_entrance || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='col-md-9 mx-1'>
                      <span> draught lobby on main entrance</span>
                    </div>
                  </div>
                  <div className='col-md-6 d-flex mx-2'>
                    <div className='col-md-3'>
                      <input
                        type='text'
                        className='inpwall1'
                        name='number_of_sides_sheltered'
                        value={formData.number_of_sides_sheltered || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='col-md-9 mx-1'>
                      <span> number of sides sheltered</span>
                    </div>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div className='col-md-6 d-flex'>
                    <div className='col-md-3'>
                      <input
                        type='text'
                        className='inpwall1'
                        name='pressure_test_results_available'
                        value={formData.pressure_test_results_available || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='col-md-9 mx-1'>
                      <span> pressure test results available</span>
                    </div>
                  </div>
                  <div className='col-md-6 d-flex mx-2'>
                    <div className='col-md-3'>
                      <input
                        type='text'
                        className='inpwall1'
                        name='pressure_test_resut_reference_number'
                        value={formData.pressure_test_resut_reference_number || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='col-md-9 mx-1'>
                      <span> Pressure test result reference number</span>
                    </div>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div className='col-md-4'>
                    <input
                      type='text'
                      name='if_yes_enter_adjusted_results'
                      value={formData.if_yes_enter_adjusted_results || ''}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-md-8 mx-2'>
                    <span> If yes, enter adjusted result (ac/h)</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 mb-4 d-flex align-items-center'>
                  <div className='col-md-4'>
                    <input
                      type='text'
                      name='is_there_uninsulated_ductng_on_mvhr'
                      value={formData.is_there_uninsulated_ductng_on_mvhr || ''}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-md-8 mx-2'>
                    <span> Is there uninsulated ducting on MVHR system outside dwelling envelope?</span>
                  </div>
                </div>

                <div className='col-md-12 mb-4' style={{ color: '#003366' }}>
                  <span className='fw-bold'>
                    DEAP manual contains guidance on using non-default SFP and efficiency for mechanical ventilation units as well as identifying the air flow rate in EAHPs
                  </span>
                </div>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='p-3'>
                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div>
                    <input
                      type='checkbox'
                      className='p-2'
                      name='natural_ventilation'
                      checked={formData.natural_ventilation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mx-2'>
                    <span> Natural ventilation</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div>
                    <input
                      type='checkbox'
                      className='p-2'
                      name='positive_input_ventilation_from_loft'
                      checked={formData.positive_input_ventilation_from_loft}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mx-2'>
                    <span> Positive input ventilation from loft</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div>
                    <input
                      type='checkbox'
                      className='p-2'
                      name='positive_input_ventilation_from_outside'
                      checked={formData.positive_input_ventilation_from_outside}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mx-2'>
                    <span> Positive input ventilation from outside</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div>
                    <input
                      type='checkbox'
                      className='p-2'
                      name='whole_house_extract_ventilation'
                      checked={formData.whole_house_extract_ventilation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mx-2'>
                    <span> Whole house extract ventilation</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div>
                    <input
                      type='checkbox'
                      className='p-2'
                      name='balanceed_whole_mechanical_ventilation'
                      checked={formData.balanceed_whole_mechanical_ventilation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mx-2'>
                    <span> Balanced whole-house mechanical ventilation without heat recovery</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div>
                    <input
                      type='checkbox'
                      className='p-2'
                      name='exhaust_air_heat_pump'
                      checked={formData.exhaust_air_heat_pump}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mx-2'>
                    <span> Exhaust air heat pump (EAHP)</span>
                  </div>
                </div>

                <div className='col-md-12 mt-3 d-flex align-items-center'>
                  <div className='col-md-6 d-flex'>
                    <div className='col-md-3'>
                      <input
                        type='text'
                        className='inpwall1'
                        name='air_flow_rate_to_eahp'
                        value={formData.air_flow_rate_to_eahp || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='col-md-9 mx-1'>
                      <span> Air flow rate for EAHP (m3/h)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ventilation;
