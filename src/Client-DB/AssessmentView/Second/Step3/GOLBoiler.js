import React from 'react'

const GOLBoiler = ({ formData, id, handleChange }) => {
  // A helper function for checkboxes that calls handleChange with the checked value
  const onCheckboxChange = (name) => (e) => {
    // Here we “normalize” the event so that the parent gets {name, value}
    handleChange({ target: { name, value: e.target.checked } });
  };

  return (
    <>
      {/* Gas / Oil / LPG Boilers Section */}
      <div className="shadow-sm pb-4">
        <div className="bg-light rounded p-3">
          Gas / Oil / LPG Boilers
        </div>
        <div className="row p-2 pb-0">

          {/* Primary / Secondary (if needed – no state mapping provided) */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                className='disabled-input'
                // If you need to track these, add a name and checked attribute.
                // For example: name="gas_oil_primary" checked={formData.gas_oil_primary || false}
                onChange={onCheckboxChange("gas_oil_primary")}
              />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                onChange={onCheckboxChange("gas_oil_secondary")}
                // Uncomment and update if tracking this value:
                // checked={formData.gas_oil_secondary || false}
              />
            </div>
            <span className="fontass">Secondary</span>
          </div>

          {/* Row for column labels */}
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="fw-bold">Boiler type</div>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="fw-bold">Flue type</div>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="fw-bold">Age</div>
          </div>

          {/* Boiler type checkboxes */}
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="standard"
                checked={formData.standard}
                onChange={onCheckboxChange("standard")}
              />
            </div>
            <span className="fontass">standard</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="open"
                checked={formData.open}
                onChange={onCheckboxChange("open")}
              />
            </div>
            <span className="fontass">open</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              {/* Assuming "pre_1998_or_later" maps to "1998 or later" */}
              <input
              className='disabled-input'
                type="checkbox"
                name="pre_1998_or_later"
                checked={formData.pre_1998_or_later}
                onChange={onCheckboxChange("pre_1998_or_later")}
              />
            </div>
            <span className="fontass">1998 or later</span>
          </div>

          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="Combi"
                checked={formData.Combi}
                onChange={onCheckboxChange("Combi")}
              />
            </div>
            <span className="fontass">combi</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="balanced"
                checked={formData.balanced}
                onChange={onCheckboxChange("balanced")}
              />
            </div>
            <span className="fontass">balanced</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="pre_1998"
                checked={formData.pre_1998}
                onChange={onCheckboxChange("pre_1998")}
              />
            </div>
            <span className="fontass">pre 1998</span>
          </div>

          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="condensing"
                checked={formData.condensing}
                onChange={onCheckboxChange("condensing")}
              />
            </div>
            <span className="fontass">condensing</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="fan_assisted"
                checked={formData.fan_assisted}
                onChange={onCheckboxChange("fan_assisted")}
              />
            </div>
            <span className="fontass">fan assisted</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="oil_pre_1985"
                checked={formData.oil_pre_1985}
                onChange={onCheckboxChange("oil_pre_1985")}
              />
            </div>
            <span className="fontass">oil: pre 1985</span>
          </div>

          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="back_boiler"
                checked={formData.back_boiler}
                onChange={onCheckboxChange("back_boiler")}
              />
            </div>
            <span className="fontass">back boiler</span>
          </div>

          {/* Mounting row */}
          <div className="col-md-4 mt-2 col-12 d-flex">
            <span className="fw-bold">Mounting</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="gas_lpg_pre_1979"
                checked={formData.gas_lpg_pre_1979}
                onChange={onCheckboxChange("gas_lpg_pre_1979")}
              />
            </div>
            <span className="fontass">gas/ LPG pre 1979</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="cpsu"
                checked={formData.cpsu}
                onChange={onCheckboxChange("cpsu")}
              />
            </div>
            <span className="fontass">CPSU</span>
          </div>

          {/* Wall / Ignition / etc. */}
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="wall"
                checked={formData.wall}
                onChange={onCheckboxChange("wall")}
              />
            </div>
            <span className="fontass">Wall</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="fw-bold">Ignition</div>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="range_cooker"
                checked={formData.range_cooker}
                onChange={onCheckboxChange("range_cooker")}
              />
            </div>
            <span className="fontass">range cooker</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="floor"
                checked={formData.floor}
                onChange={onCheckboxChange("floor")}
              />
            </div>
            <span className="fontass">Floor</span>
          </div>
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="auto"
                checked={formData.auto}
                onChange={onCheckboxChange("auto")}
              />
            </div>
            <span className="fontass">auto</span>
          </div>

          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="single_burner"
                checked={formData.single_burner}
                onChange={onCheckboxChange("single_burner")}
              />
            </div>
            <span className="fontass">single burner</span>
          </div>
          <div className="col-md-4 col-12 d-flex">
            {/* Empty column */}
          </div>

          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="permanent_pilot"
                checked={formData.permanent_pilot}
                onChange={onCheckboxChange("permanent_pilot")}
              />
            </div>
            <span className="fontass">permanent pilot</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="twin_burner"
                checked={formData.twin_burner}
                onChange={onCheckboxChange("twin_burner")}
              />
            </div>
            <span className="fontass">twin burner</span>
          </div>

          {/* Manufacturer text input */}
          <div className='col-md-12 mt-3 col-12'>
            <label className='fw-bold'>
              Manufacturer / make / model number
            </label>
            <input
            className='disabled-input'
              type='text'
              name="gas_oil_manufacturer"
              value={formData.gas_oil_manufacturer || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Electric Storage Heaters Section */}
      <h6 className="fw-bold mt-4">Electric Storage Heaters *</h6>
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Electric Storage Heaters
        </div>
        <div className="row p-2 pb-0">
          {/* Primary / Secondary */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                onChange={onCheckboxChange("electric_storage_heater_primary")}
                // If you want to track: checked={formData.electric_storage_heater_primary || false}
              />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                onChange={onCheckboxChange("electric_storage_heater_secondary")}
                // If you want to track: checked={formData.electric_storage_heater_secondary || false}
              />
            </div>
            <span className="fontass">Secondary</span>
          </div>

          {/* Options */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="modern_slimeline"
                checked={formData.modern_slimeline}
                onChange={onCheckboxChange("modern_slimeline")}
              />
            </div>
            <span className="fontass">modern / slimline</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="electric_storage_heater_fan_assisted"
                checked={formData.electric_storage_heater_fan_assisted}
                onChange={onCheckboxChange("electric_storage_heater_fan_assisted")}
              />
            </div>
            <span className="fontass">fan assisted</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="converter"
                checked={formData.converter}
                onChange={onCheckboxChange("converter")}
              />
            </div>
            <span className="fontass">convector</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="old_pre_1980_volume"
                checked={formData.old_pre_1980_volume}
                onChange={onCheckboxChange("old_pre_1980_volume")}
              />
            </div>
            <span className="fontass">old (pre-1980) large volume</span>
          </div>

          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                className='disabled-input'
                type="checkbox"
                name="integrated_storage_direct_acting"
                checked={formData.integrated_storage_direct_acting}
                onChange={onCheckboxChange("integrated_storage_direct_acting")}
              />
            </div>
            <span className="fontass">
              integrated storage / direct acting (inc. room stat)
            </span>
          </div>

          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="fw-bold">Control options</div>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                className='disabled-input'
                type="checkbox"
                name="manual_charge_control"
                checked={formData.manual_charge_control}
                onChange={onCheckboxChange("manual_charge_control")}
              />
            </div>
            <span className="fontass">manual charge control</span>
          </div>
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                className='disabled-input'
                type="checkbox"
                name="automatic_weather_dependant"
                checked={formData.automatic_weather_dependant}
                onChange={onCheckboxChange("automatic_weather_dependant")}
              />
            </div>
            <span className="fontass">automatic / weather dependent</span>
          </div>
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-1">
              <input
                className='disabled-input'
                type="checkbox"
                name="celect_type"
                checked={formData.celect_type}
                onChange={onCheckboxChange("celect_type")}
              />
            </div>
            <span className="fontass">Celect-type</span>
          </div>

          {/* Manufacturer text input */}
          <div className='col-md-12 mt-3 col-12'>
            <label className='fw-bold'>
              Manufacturer / make / model number
            </label>
            <input
              className='disabled-input'
              type='text'
              name="electric_storage_heater"
              value={formData.electric_storage_heater || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Warm Air Systems Section */}
      <h6 className="fw-bold mt-4">Warm Air Systems *</h6>
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Warm Air Systems
        </div>
        <div className="row p-2 pb-0">
          {/* Primary / Secondary */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                className='disabled-input'
                type="checkbox"
                onChange={onCheckboxChange("warm_air_primary")}
                // Optionally add checked attribute
                // checked={formData.warm_air_primary || false}
              />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                onChange={onCheckboxChange("warm_air_secondary")}
                // checked={formData.warm_air_secondary || false}
              />
            </div>
            <span className="fontass">Secondary</span>
          </div>

          {/* Ducted / Other Features */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="fw-bold fontass">Ducted or Stub Ducted</div>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="fw-bold fontass">Other Features</div>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="ducted_or_stud_ducted_on_off"
                checked={formData.ducted_or_stud_ducted_on_off}
                onChange={onCheckboxChange("ducted_or_stud_ducted_on_off")}
              />
            </div>
            <span className="fontass">on - off</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="features_fan_assited"
                checked={formData.features_fan_assited}
                onChange={onCheckboxChange("features_fan_assited")}
              />
            </div>
            <span className="fontass">fan assisted</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="ducted_or_stud_ducted_modulating"
                checked={formData.ducted_or_stud_ducted_modulating}
                onChange={onCheckboxChange("ducted_or_stud_ducted_modulating")}
              />
            </div>
            <span className="fontass">modulating</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="features_fan_condensing"
                checked={formData.features_fan_condensing}
                onChange={onCheckboxChange("features_fan_condensing")}
              />
            </div>
            <span className="fontass">condensing</span>
          </div>

          {/* Age / Other types */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="fontass fw-bold">Age</div>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="features_fan_flue_heat_recovery"
                checked={formData.features_fan_flue_heat_recovery}
                onChange={onCheckboxChange("features_fan_flue_heat_recovery")}
              />
            </div>
            <span className="fontass">with flue heat recovery</span>
          </div>

          {/* Other types / additional options */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="fontass fw-bold">Other types</div>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            {/* If you wish to track a “pre 1998” option for warm air, ensure its key is separate */}
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="warm_air_pre_1998"
                checked={formData.warm_air_pre_1998}
                onChange={onCheckboxChange("warm_air_pre_1998")}
              />
            </div>
            <span className="fontass">pre 1998</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="room_heater_with_in_floor_ducts"
                checked={formData.room_heater_with_in_floor_ducts}
                onChange={onCheckboxChange("room_heater_with_in_floor_ducts")}
              />
            </div>
            <span className="fontass">Room heater with in floor ducts</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="electric_electricaire"
                checked={formData.electric_electricaire}
                onChange={onCheckboxChange("electric_electricaire")}
              />
            </div>
            <span className="fontass">Electric electricaire</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default GOLBoiler;
