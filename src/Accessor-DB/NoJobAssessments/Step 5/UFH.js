import React from 'react';

const UFH = ({ formData, handleChange }) => {

  return (
    <>
      <div className="row">
        {/* Underfloor Heating Section */}
        <div className="col-md-6">
          <h6 className="fw-bold">Underfloor heating (UFH) *</h6>
          <div className="shadow-sm pb-2 mt-3">
            <div className="bg-light rounded p-3">
              Underfloor heating (UFH)
            </div>
            <div className="row p-2 pb-0">
              {/* in insulated timber floor */}
              <div className="col-md-6 col-12 d-flex">
                <div className="mx-2">
                  <input
                    type="checkbox"
                    name="in_insulated_timber_floor"
                    checked={formData.in_insulated_timber_floor || false}
                    onChange={handleChange}
                  />
                </div>
                <span className="fontass">in insulated timber floor</span>
              </div>
              {/* whole house UFH */}
              <div className="col-md-6 col-12 d-flex">
                <div className="mx-2">
                  <input
                    type="checkbox"
                    name="whole_house_UFH"
                    checked={formData.whole_house_UFH || false}
                    onChange={handleChange}
                  />
                </div>
                <div className="fontass">whole house UFH</div>
              </div>
              {/* in screed */}
              <div className="col-md-4 mt-2 col-12 d-flex">
                <div className="mx-2">
                  <input
                    type="checkbox"
                    name="in_screed"
                    checked={formData.in_screed || false}
                    onChange={handleChange}
                  />
                </div>
                <span className="fontass">in screed</span>
              </div>
              {/* partial UFH including living area */}
              <div className="col-md-8 mt-2 col-12 d-flex">
                <div className="mx-2">
                  <input
                    type="checkbox"
                    name="partial_UFH_including_living_area"
                    checked={formData.partial_UFH_including_living_area || false}
                    onChange={handleChange}
                  />
                </div>
                <div className="fontass">Partial UFH including living area</div>
              </div>
              {/* in concrete */}
              <div className="col-md-4 mt-2 col-12 d-flex">
                <div className="mx-2">
                  <input
                    type="checkbox"
                    name="in_concrete"
                    checked={formData.in_concrete || false}
                    onChange={handleChange}
                  />
                </div>
                <span className="fontass">in concrete</span>
              </div>
              {/* partial UFH not including living area */}
              <div className="col-md-8 mt-2 col-12 d-flex">
                <div className="mx-2">
                  <input
                    type="checkbox"
                    name="partial_UFH_not_including_living_area"
                    checked={formData.partial_UFH_not_including_living_area || false}
                    onChange={handleChange}
                  />
                </div>
                <div className="fontass">Partial UFH not including living area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pumps Section */}
        <div className="col-md-6">
          <h6 className="fw-bold">Pumps *</h6>
          <div className="shadow-sm pb-2 mt-3">
            <div className="bg-light rounded p-3">Pumps</div>
            <div className="row p-2 pb-0">
              {/* central_heating_pumps_for_space_heating */}
              <div className="col-md-12 col-12 d-flex align-items-center">
                <label className="mx-2 fontass" htmlFor="central_heating_pumps_for_space_heating">
                  How many central heating pumps for space heating?
                </label>
                <input
                  type="number"
                  id="central_heating_pumps_for_space_heating"
                  name="central_heating_pumps_for_space_heating"
                  value={formData.central_heating_pumps_for_space_heating || ""}
                  onChange={handleChange}
                  className="form-control w-auto"
                />
              </div>
              {/* central_heating_pumps_outdoors */}
              <div className="col-md-12 col-12 d-flex align-items-center mt-2">
                <label className="mx-2 fontass" htmlFor="central_heating_pumps_outdoors">
                  Central heating pump(s) outdoors
                </label>
                <input
                  type="number"
                  id="central_heating_pumps_outdoors"
                  name="central_heating_pumps_outdoors"
                  value={formData.central_heating_pumps_outdoors || ""}
                  onChange={handleChange}
                  className="form-control w-auto"
                />
              </div>
              {/* oil_boiler_fuel_pumps */}
              <div className="col-md-12 col-12 d-flex align-items-center mt-2">
                <label className="mx-2 fontass" htmlFor="oil_boiler_fuel_pumps">
                  How many oil boiler fuel pumps?
                </label>
                <input
                  type="number"
                  id="oil_boiler_fuel_pumps"
                  name="oil_boiler_fuel_pumps"
                  value={formData.oil_boiler_fuel_pumps || ""}
                  onChange={handleChange}
                  className="form-control w-auto"
                />
              </div>
              {/* oil_fuel_pumps_outdoors */}
              <div className="col-md-12 col-12 d-flex align-items-center mt-2">
                <label className="mx-2 fontass" htmlFor="oil_fuel_pumps_outdoors">
                  Oil fuel pump(s) outdoors
                </label>
                <input
                  type="number"
                  id="oil_fuel_pumps_outdoors"
                  name="oil_fuel_pumps_outdoors"
                  value={formData.oil_fuel_pumps_outdoors || ""}
                  onChange={handleChange}
                  className="form-control w-auto"
                />
              </div>
              {/* gas_boiler_flue_fans */}
              <div className="col-md-12 col-12 d-flex align-items-center mt-2">
                <label className="mx-2 fontass" htmlFor="gas_boiler_flue_fans">
                  How many gas boiler flue fans?
                </label>
                <input
                  type="number"
                  id="gas_boiler_flue_fans"
                  name="gas_boiler_flue_fans"
                  value={formData.gas_boiler_flue_fans || ""}
                  onChange={handleChange}
                  className="form-control w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments on Heating Controls Section */}
      <div className="col-md-12 mt-3">
        <h6 className="fw-bold">Comments on Heating Controls *</h6>
        <div className="shadow-sm pb-3 mt-3">
          <div className="bg-light rounded p-3">Comments on Heating Controls</div>
          <div className="row p-4 pb-0">
            <textarea
              rows={2}
              name="comments_on_heating_controls"
              value={formData.comments_on_heating_controls || ""}
              onChange={handleChange}
              style={{
                overflow: "hidden",
                height: "auto",
                border: "none",
                resize: "none",
              }}
              className="form-control"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default UFH;
