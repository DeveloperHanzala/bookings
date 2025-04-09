import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SolarHWS = ({ formData, handleChange }) => {
  // Helper for checkbox inputs
  const onCheckboxChange = (name) => (e) => {
    // Pass the boolean value (e.target.checked) to handleChange
    handleChange({ target: { name, value: e.target.checked } });
  };

  return (
    <>
      <div className="shadow-sm pb-5 mt-3">
        <div className="bg-light rounded p-3">
          Solar Water Heating System
        </div>
        <div className="row p-2 pb-5">
          {/* Radio buttons for Yes/No on solar water heating */}
          <div className="col-md-6 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="radio"
                name="solar_water_haeting"
                value="Yes"
                checked={formData.solar_water_haeting === "Yes"}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">Yes</span>
          </div>
          <div className="col-md-6 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="radio"
                name="solar_water_haeting"
                value="No"
                checked={formData.solar_water_haeting === "No"}
                onChange={handleChange}
              />
            </div>
            <div className="fontass">No</div>
          </div>

          {/* Evacuated tube */}
          <div className="col-md-4 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="evacuated_tube"
                checked={formData.evacuated_tube}
                onChange={onCheckboxChange("evacuated_tube")}
              />
            </div>
            <span className="fontass">evacuated tube</span>
          </div>

          {/* Flat plate, glazed */}
          <div className="col-md-4 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="flat_plate_glazed"
                checked={formData.flat_plate_glazed}
                onChange={onCheckboxChange("flat_plate_glazed")}
              />
            </div>
            <div className="fontass">flat plate, glazed</div>
          </div>

          {/* Flat plate unglazed */}
          <div className="col-md-4 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="flat_plate_unglazed"
                checked={formData.flat_plate_unglazed}
                onChange={onCheckboxChange("flat_plate_unglazed")}
              />
            </div>
            <span className="fontass">flat plate unglazed</span>
          </div>

          {/* Solar collector area */}
          <div className="col-md-7 mt-4 mx-2 col-12 d-flex">
            <div className="col-md-5 mx-1">
              <input
                   className='disabled-input'
                type="checkbox"
                name="solar_collector_area"
                value={formData.solar_collector_area || ""}
                onChange={handleChange}
              />
            </div>
            <div className="fontass">solar collector area (m2)</div>
          </div>

          {/* Area type checkboxes */}
          <div className="col-md-4 mt-4 col-12">
            <div className="d-flex">
              <div className="mx-2">
                <input
                     className='disabled-input'
                type="checkbox"
                  name="area_is_gross"
                  checked={formData.area_is_gross}
                  onChange={onCheckboxChange("area_is_gross")}
                />
              </div>
              <div className="fontass2">area is "gross" area</div>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <input
                     className='disabled-input'
                type="checkbox"
                  name="area_is_aperture"
                  checked={formData.area_is_aperture}
                  onChange={onCheckboxChange("area_is_aperture")}
                />
              </div>
              <div className="fontass2">area is "aperture" area</div>
            </div>
          </div>

          {/* Overshading group */}
          <div className="col-md-3 mt-3 col-12 d-flex">
            <div className="mx-2"></div>
            <div className="fontass">overshading:</div>
          </div>
          <div className="col-md-4 mt-3 col-12">
            <div className="d-flex">
              <div className="mx-2">
                <input
                     className='disabled-input'
                type="checkbox"
                  name="very_little_less_20_per"
                  checked={formData.very_little_less_20_per}
                  onChange={onCheckboxChange("very_little_less_20_per")}
                />
              </div>
              <div className="fontass2">
                very little (<IoIosArrowBack />20%)
              </div>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <input
                     className='disabled-input'
                type="checkbox"
                  name="significant_sixty_to_eighty_per"
                  checked={formData.significant_sixty_to_eighty_per}
                  onChange={onCheckboxChange("significant_sixty_to_eighty_per")}
                />
              </div>
              <div className="fontass2">
                significant (61-80%)
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 col-12">
            <div className="d-flex">
              <div className="mx-2">
                <input
                     className='disabled-input'
                type="checkbox"
                  name="modest_twenty_to_sixty"
                  checked={formData.modest_twenty_to_sixty}
                  onChange={onCheckboxChange("modest_twenty_to_sixty")}
                />
              </div>
              <div className="fontass2">
                modest (20-60%)
              </div>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <input
                     className='disabled-input'
                type="checkbox"
                  name="heavy_more_than_eighty"
                  checked={formData.heavy_more_than_eighty}
                  onChange={onCheckboxChange("heavy_more_than_eighty")}
                />
              </div>
              <div className="fontass2">
                heavy (<IoIosArrowForward />80%)
              </div>
            </div>
          </div>

          {/* Dedicated solar storage volume */}
          <div className="col-md-12 mt-5 col-12 d-flex">
            <span className="fontass">dedicated solar storage volume (litres)</span>
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="dedicated_solar_storage_volume"
                value={formData.dedicated_solar_storage_volume || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Containment checkboxes */}
          <div className="col-md-12 mt-4 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="contained_within_combained_cylinder"
                checked={formData.contained_within_combained_cylinder}
                onChange={onCheckboxChange("contained_within_combained_cylinder")}
              />
            </div>
            <div className="fontass">
              contained within combined cylinder
            </div>
          </div>
          <div className="col-md-12 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="contained_within_separate_cylinder"
                checked={formData.contained_within_separate_cylinder}
                onChange={onCheckboxChange("contained_within_separate_cylinder")}
              />
            </div>
            <span className="fontass">
              contained within separate cylinder
            </span>
          </div>

          {/* Orientation and tilt */}
          <div className="col-md-6 mt-4 col-12 d-flex justify-content-end align-items-center">
            <div className="col-md-4 mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="orientation"
                value={formData.orientation || ""}
                onChange={handleChange}
              />
            </div>
            <div className="fontass">orientation</div>
          </div>
          <div className="col-md-6 mt-4 col-12 d-flex justify-content-start align-items-center">
            <div className="col-md-4 mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="tilt"
                value={formData.tilt || ""}
                onChange={handleChange}
              />
            </div>
            <div className="fontass">tilt</div>
          </div>

          {/* Solar panel make and model */}
          <div className="col-md-12 mt-4 col-12">
            <div className="mx-2 fontass">Solar panel make and model:</div>
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="solar_panel_make_model"
                value={formData.solar_panel_make_model || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarHWS;
