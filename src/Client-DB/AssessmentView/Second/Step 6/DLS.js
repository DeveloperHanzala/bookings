import React from 'react';

const DLS = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-2 mt-3">
      <div className="bg-light rounded p-3">
        Heating Controls (tick all that apply)
      </div>
      <div className="row p-2 pb-0">
        {/* 1. Pre 1991 full flow mid-high temp: not pre-insulated */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
                 className='disabled-input'
                type="checkbox"
              name="pre_1991_full_flow_mid_high_temp_not_pre_insulated"
              checked={formData.pre_1991_full_flow_mid_high_temp_not_pre_insulated}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            Pre 1991 full flow mid-high temp: not pre-insulated
          </span>
        </div>

        {/* 2. Pre 1991 full flow low temp: pre-insulated */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
                 className='disabled-input'
                type="checkbox"
              name="pre_1991_full_flow_low_temp_pre_insulated"
              checked={formData.pre_1991_full_flow_low_temp_pre_insulated}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            Pre 1991 full flow low temp: pre-insulated
          </span>
        </div>

        {/* 3. 1991 or later variable flow mid temp: pre-insulated */}
        <div className="col-md-12 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
                 className='disabled-input'
                type="checkbox"
              name="from_1991_or_later_variable_flow_mid_temp_pre_insulated"
              checked={formData.from_1991_or_later_variable_flow_mid_temp_pre_insulated}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            1991 or later variable flow mid temp: pre-insulated
          </span>
        </div>

        {/* 4. 1991 or later variable flow low temp: pre-insulated */}
        <div className="col-md-12 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
                 className='disabled-input'
                type="checkbox"
              name="from_1991_or_later_variable_flow_low_temp_pre_insulated"
              checked={formData.from_1991_or_later_variable_flow_low_temp_pre_insulated}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            1991 or later variable flow low temp: pre-insulated
          </span>
        </div>

        {/* 5. Consumption charged flat rate */}
        <div className="col-md-12 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
                 className='disabled-input'
                type="checkbox"
              name="consumption_charged_flat_rate"
              checked={formData.consumption_charged_flat_rate}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            Consumption charged flat rate
          </span>
        </div>

        {/* 6. Linked to use */}
        <div className="col-md-12 mt-2 col-12 d-flex">
          <div className="mx-2">
            <input
                 className='disabled-input'
                type="checkbox"
              name="linked_to_use"
              checked={formData.linked_to_use}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            Linked to use
          </span>
        </div>
      </div>
    </div>
  );
};

export default DLS;
