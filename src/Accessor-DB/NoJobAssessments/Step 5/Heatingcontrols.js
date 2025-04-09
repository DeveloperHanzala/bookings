import React from 'react';

const Heatingcontrols = ({ formData, handleChange }) => {
  // Custom handler for checkboxes to send the proper boolean value.

  return (
    <div className="shadow-sm pb-4 mt-3">
      <div className="bg-light rounded p-3">
        Heating Controls (tick all that apply)
      </div>
      <div className="row p-2 pb-0">
        {/* 1. no_controls */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="no_controls"
              checked={formData.no_controls || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">no controls</span>
        </div>

        {/* 2. programmer_time_clock */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="programmer_time_clock"
              checked={formData.programmer_time_clock || false}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">programmer / timeclock</div>
        </div>

        {/* 3. room_thermostat */}
        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="room_thermostat"
              checked={formData.room_thermostat || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">room thermostat</span>
        </div>

        {/* 4. number (text input) */}
        <div className="col-md-6 col-12 d-flex align-items-center">
          <div className="mx-2">
            <input
              type="text"
              name="number"
              value={formData.number || ""}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">number</div>
        </div>

        {/* 5. trvs */}
        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="trvs"
              checked={formData.trvs || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">TRV's</span>
        </div>

        {/* 6. per_rads_trvs (text input) */}
        <div className="col-md-6 col-12 d-flex align-items-center">
          <div className="mx-2">
            <input
              type="text"
              name="per_rads_trvs"
              value={formData.per_rads_trvs || ""}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">% rads with TRVs</div>
        </div>

        {/* 7. bypass (checkbox) */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="bypass"
              checked={formData.bypass || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">TRV's (bypass)</span>
        </div>

        {/* 8. load_compensator */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="load_compensator"
              checked={formData.load_compensator || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">load compensator</span>
        </div>

        {/* 9. weather_compersator */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="weather_compersator"
              checked={formData.weather_compersator || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">weather compensator</span>
        </div>

        {/* 10. full_zone_control */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="full_zone_control"
              checked={formData.full_zone_control || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">full zone control</span>
        </div>

        {/* 11. boiler_energy_management */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="boiler_energy_management"
              checked={formData.boiler_energy_management || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">boiler energy management system</span>
        </div>

        {/* 12. delay_start_thermostat */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="delay_start_thermostat"
              checked={formData.delay_start_thermostat || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">delay start thermostat</span>
        </div>

        {/* 13. boiler_interlock */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="boiler_interlock"
              checked={formData.boiler_interlock || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">boiler interlock</span>
        </div>

        {/* 14. appliances_thermostat */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="appliances_thermostat"
              checked={formData.appliances_thermostat || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">appliance thermostat</span>
        </div>

        {/* 15. appliances_time_clock */}
        <div className="col-md-12 col-12 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="appliances_time_clock"
              checked={formData.appliances_time_clock || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">appliance timeclock</span>
        </div>
      </div>
    </div>
  );
};

export default Heatingcontrols;
