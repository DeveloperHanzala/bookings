import React from "react";

const SecondaryS = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-2 pt-3 pb-3">
        Secondary Heating System
      </div>
      <div className="row p-2 pb-4">
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="radiator_system_secondary"
              checked={formData.radiator_system_secondary}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Radiator system</span>
        </div>

        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="storage_heaters_secondary"
              checked={formData.storage_heaters_secondary}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Storage heaters</span>
        </div>

        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="underfloor_secondary"
              checked={formData.underfloor_secondary}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Underfloor</span>
        </div>

        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="room_heaters_only_secondary"
              checked={formData.room_heaters_only_secondary}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Room heaters only</span>
        </div>

        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="warm_air_secondary"
              checked={formData.warm_air_secondary}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Warm air</span>
        </div>

        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="fan_coil_radiator_secondary"
              checked={formData.fan_coil_radiator_secondary}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Fan coil radiators</span>
        </div>

        <div className="col-md-12 col-8 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="other_secondary_heating"
              checked={formData.other_secondary_heating}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Other (describe briefly):</span>
        </div>

        <div className="col-md-6 col-4">
          <div className="mx-2">
            <input
              type="text"
              name="other_secondary_heating_text"
              value={formData.other_secondary_heating_text || ""}
              onChange={handleChange}
              className="inpwall disabled-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryS;
