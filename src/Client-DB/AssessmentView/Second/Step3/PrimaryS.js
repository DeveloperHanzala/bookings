import React from "react";

const PrimaryS = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        Primary Heating System
      </div>
      <div className="row p-2 pb-4">
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="radiator_system_primary"
              checked={formData.radiator_system_primary || false}
              onChange={handleChange}
              className='disabled-input'
            />
          </div>
          <span className="fontass">radiator system</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="storage_heaters_primary"
              checked={formData.storage_heaters_primary || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">storage heaters</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="underfloor_primary"
              checked={formData.underfloor_primary || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">underfloor</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="warm_air_primary"
              checked={formData.warm_air_primary || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">warm air</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="room_heaters_only_primary"
              checked={formData.room_heaters_only_primary || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">room heaters only</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="communtiy_primary"
              checked={formData.communtiy_primary || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">community</span>
        </div>
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="fan_coil_radiator_primay"
              checked={formData.fan_coil_radiator_primay || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">fan coil radiators</span>
        </div>
        <div className="col-md-12 col-8 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="other_primary_heating"
              checked={formData.other_primary_heating || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">other (describe briefly):</span>
        </div>
       
          <div className="col-md-6 col-4">
            <input
             
              type="text"
              name="other_primary_heating_text"
              value={formData.other_primary_heating_text || ""}
              onChange={handleChange}
              className="inpwall disabled-input"
            />
          </div>

      </div>
    </div>
  );
};

export default PrimaryS;
