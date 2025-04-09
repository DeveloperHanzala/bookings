import React from 'react';

const HeatingS1 = ({ formData, handleChange }) => {
  return (
    <div className="row">
      {/* Heating System #1 */}
      <div className="col-md-4">
        <h6 className="fw-bold">Heating system #1 *</h6>
        <div className="shadow-sm pb-2 mt-3">
          <div className="bg-light rounded p-3">Heating system #1</div>
          <div className="row p-2 pb-0">
            {/* Efficiency */}
            <div className="col-md-12 col-12">
              <span className="fontass">Efficiency %</span>
              <div className="mx-2">
                <input
                  type="number"
                  name="efficiency"
                  value={formData.efficiency || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Proportion of group heating */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass">Proportion of group heating %</span>
              <div className="mx-2">
                <input
                  type="number"
                  name="proportion_of_group_heating"
                  value={formData.proportion_of_group_heating || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Fuel type */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass">Fuel type of heating system</span>
              <div className="mx-2">
                <input
                  type="text"
                  name="fuel_type_heating_system"
                  value={formData.fuel_type_heating_system || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Make and model */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass2">Make and model of heating system</span>
              <div className="mx-2">
                <input
                  type="text"
                  name="heating_system_1_make_model"
                  value={formData.heating_system_1_make_model || ''}
                  onChange={handleChange}
                  className="inpwall1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heating System #2 */}
      <div className="col-md-4">
        <h6 className="fw-bold">Heating system #2 *</h6>
        <div className="shadow-sm pb-2 mt-3">
          <div className="bg-light rounded p-3">Heating system #2</div>
          <div className="row p-2 pb-0">
            {/* Efficiency */}
            <div className="col-md-12 col-12">
              <span className="fontass">Efficiency %</span>
              <div className="mx-2">
                <input
                  type="number"
                  name="efficiency_2"
                  value={formData.efficiency_2 || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Proportion of group heating */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass">Proportion of group heating %</span>
              <div className="mx-2">
                <input
                  type="number"
                  name="proportion_of_group_heating_2"
                  value={formData.proportion_of_group_heating_2 || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Fuel type */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass">Fuel type of heating system</span>
              <div className="mx-2">
                <input
                  type="text"
                  name="fuel_type_heating_system_2"
                  value={formData.fuel_type_heating_system_2 || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Make and model */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass2">Make and model of heating system</span>
              <div className="mx-2">
                <input
                  type="text"
                  name="heating_system_1_make_model_2"
                  value={formData.heating_system_1_make_model_2 || ''}
                  onChange={handleChange}
                  className="inpwall1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHP / Waste Heat */}
      <div className="col-md-4">
        <h6 className="fw-bold">CHP / Waste Heat *</h6>
        <div className="shadow-sm pb-2 mt-3">
          <div className="bg-light rounded p-3">CHP / Waste Heat</div>
          <div className="row p-2 pb-0">
            {/* % heat from CHP (or power station) */}
            <div className="col-md-12 col-12">
              <span className="fontass">% heat from CHP (or power station)</span>
              <div className="col-md-3 mx-2">
                <input
                  type="number"
                  name="group_heating_heat_from_chp"
                  value={formData.group_heating_heat_from_chp || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
            {/* Power station checkbox */}
            <div className="col-md-12 col-12 mt-2 d-flex align-items-center">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="group_heating_power_station"
                  checked={formData.group_heating_power_station}
                  onChange={handleChange}
                />
              </div>
              <span className="fontass">Power station</span>
            </div>
            {/* CHP checkbox */}
            <div className="col-md-12 col-12 mt-2 d-flex align-items-center">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="group_heating_chp"
                  checked={formData.group_heating_chp}
                  onChange={handleChange}
                />
              </div>
              <span className="fontass">CHP</span>
            </div>
            {/* Electrical checkbox */}
            <div className="col-md-12 col-12 mt-2 d-flex align-items-center">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="group_heating_electrical"
                  checked={formData.group_heating_electrical}
                  onChange={handleChange}
                />
              </div>
              <span className="fontass">Electrical %</span>
            </div>
            {/* Thermal checkbox */}
            <div className="col-md-12 col-12 mt-2 d-flex align-items-center">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="group_heating_thermal"
                  checked={formData.group_heating_thermal}
                  onChange={handleChange}
                />
              </div>
              <span className="fontass">Thermal %</span>
            </div>
            {/* Fuel */}
            <div className="col-md-12 col-12 mt-2">
              <span className="fontass">Fuel</span>
              <div className="mx-2">
                <input
                  type="text"
                  name="group_heating_fuel"
                  value={formData.group_heating_fuel || ''}
                  onChange={handleChange}
                  className="inpwall"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatingS1;
