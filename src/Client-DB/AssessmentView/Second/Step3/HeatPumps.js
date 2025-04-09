import React from 'react';

const HeatPumps = ({ formData, handleChange }) => {
  // Helper function to "normalize" checkbox events.
  const onCheckboxChange = (name) => (e) => {
    // We send an event-like object with the boolean value from e.target.checked.
    handleChange({ target: { name, value: e.target.checked } });
  };

  return (
    <>
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Heat Pumps
        </div>
        <div className="row p-2 pb-0">
          {/* air-to-air */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="air_to_air"
                checked={formData.air_to_air}
                onChange={onCheckboxChange("air_to_air")}
              />
            </div>
            <span className="fontass">air-to-air</span>
          </div>
          
          {/* ground-to-air */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="ground_to_air"
                checked={formData.ground_to_air}
                onChange={onCheckboxChange("ground_to_air")}
              />
            </div>
            <span className="fontass">ground-to-air</span>
          </div>
          
          {/* water-to-air */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="water_to_air"
                checked={formData.water_to_air}
                onChange={onCheckboxChange("water_to_air")}
              />
            </div>
            <span className="fontass">water-to-air</span>
          </div>
          
          {/* air-to-water */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="air_to_water"
                checked={formData.air_to_water}
                onChange={onCheckboxChange("air_to_water")}
              />
            </div>
            <span className="fontass">air-to-water</span>
          </div>
          
          {/* ground-to-water */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="ground_to_water"
                checked={formData.ground_to_water}
                onChange={onCheckboxChange("ground_to_water")}
              />
            </div>
            <span className="fontass">ground-to-water</span>
          </div>
          
          {/* water-to-water */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="water_to_water"
                checked={formData.water_to_water}
                onChange={onCheckboxChange("water_to_water")}
              />
            </div>
            <span className="fontass">water-to-water</span>
          </div>
          
          {/* gas-fired - ground / water */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="gas_fired_ground_watered"
                checked={formData.gas_fired_ground_watered}
                onChange={onCheckboxChange("gas_fired_ground_watered")}
              />
            </div>
            <span className="fontass">gas-fired - ground / water</span>
          </div>
          
          {/* gas-fired, air source */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="gas_fired_air_source"
                checked={formData.gas_fired_air_source}
                onChange={onCheckboxChange("gas_fired_air_source")}
              />
            </div>
            <span className="fontass">gas-fired, air source</span>
          </div>
          
          {/* heat pump includes auxiliary electric heater */}
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-1">
              <input
                   className='disabled-input'
                type="checkbox"
                name="heat_pump_includes_auxiliary_electric_heaters"
                checked={formData.heat_pump_includes_auxiliary_electric_heaters}
                onChange={onCheckboxChange("heat_pump_includes_auxiliary_electric_heaters")}
              />
            </div>
            <span className="fontass">
              heat pump includes auxiliary electric heater
            </span>
          </div>
          
          {/* Manufacturer / make / model number */}
          <div className="col-md-12 mt-3 col-12">
            <label className="fw-bold">
              Manufacturer / make / model number
            </label>
            <input
              type="text"
                className='disabled-input'
              name="heat_pump_manufacturer"
              value={formData.heat_pump_manufacturer || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeatPumps;
