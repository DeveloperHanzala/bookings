import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const PrimaryHWS = ({ formData, handleChange }) => {
  // Helper to normalize checkbox events to pass boolean values.
  const onCheckboxChange = (name) => (e) => {
    handleChange({ target: { name, value: e.target.checked } });
  };

  return (
    <>
      {/* Primary Hot Water System Section */}
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Primary Hot Water System
        </div>
        <div className="row p-2 pb-0">
          {/* 1. from primary heating system */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="from_primamry_heating_system"
                checked={formData.from_primamry_heating_system}
                onChange={onCheckboxChange("from_primamry_heating_system")}
              />
            </div>
            <span className="fontass">from primary heating system</span>
          </div>

          {/* 2. gas instant: single point */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_instant_single_point"
                checked={formData.gas_instant_single_point}
                onChange={onCheckboxChange("gas_instant_single_point")}
              />
            </div>
            <div className="fontass">gas instant: single point</div>
          </div>

          {/* 3. backboiler / kitchen range */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="backboiler_kitchen_rage"
                checked={formData.backboiler_kitchen_rage}
                onChange={onCheckboxChange("backboiler_kitchen_rage")}
              />
            </div>
            <span className="fontass">backboiler / kitchen range</span>
          </div>

          {/* 4. electric immersion */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="electric_immersion"
                checked={formData.electric_immersion}
                onChange={onCheckboxChange("electric_immersion")}
              />
            </div>
            <div className="fontass">electric immersion</div>
          </div>

          {/* 5. gas instant: multi point */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_instant_multi_point"
                checked={formData.gas_instant_multi_point}
                onChange={onCheckboxChange("gas_instant_multi_point")}
              />
            </div>
            <span className="fontass">gas instant: multi point</span>
          </div>

          {/* Fuel type options */}
          {/* 6. fuel: gas */}
          <div className="col-md-1 mx-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="primamry_heating_gas"
                checked={formData.primamry_heating_gas}
                onChange={onCheckboxChange("primamry_heating_gas")}
              />
            </div>
            <div className="fontass">gas</div>
          </div>

          {/* 7. fuel: oil */}
          <div className="col-md-1 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="primamry_heating_oil"
                checked={formData.primamry_heating_oil}
                onChange={onCheckboxChange("primamry_heating_oil")}
              />
            </div>
            <span className="fontass">oil</span>
          </div>

          {/* 8. fuel: SF */}
          <div className="col-md-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="primamry_heating_sf"
                checked={formData.primamry_heating_sf}
                onChange={onCheckboxChange("primamry_heating_sf")}
              />
            </div>
            <div className="fontass">SF</div>
          </div>

          {/* 9. electric instantaneous */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="electric_instantaneoues"
                checked={formData.electric_instantaneoues}
                onChange={onCheckboxChange("electric_instantaneoues")}
              />
            </div>
            <span className="fontass">electric instantaneous</span>
          </div>

          {/* 10. gas circulator pre 1998 */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_circulator_pre_1998"
                checked={formData.gas_circulator_pre_1998}
                onChange={onCheckboxChange("gas_circulator_pre_1998")}
              />
            </div>
            <div className="fontass">gas circulator pre 1998</div>
          </div>

          {/* 11. gas circulator 1998 or later */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="primamry_heating_gas_circulator_1998_later"
                checked={formData.primamry_heating_gas_circulator_1998_later}
                onChange={onCheckboxChange("primamry_heating_gas_circulator_1998_later")}
              />
            </div>
            <span className="fontass">gas circulator 1998 or later</span>
          </div>

          {/* Label: If instantaneous combi boiler: */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2"></div>
            <div className="fw-bold fontass">If instantaneous combi boiler:</div>
          </div>

          {/* 12. keep hot facility controlled by */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="keep_hot_facility_controlled_by"
                checked={formData.keep_hot_facility_controlled_by}
                onChange={onCheckboxChange("keep_hot_facility_controlled_by")}
              />
            </div>
            <span className="fontass">keep hot facility controlled by</span>
          </div>

          {/* 13. timeclock */}
          <div className="col-md-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="time_clock"
                checked={formData.time_clock}
                onChange={onCheckboxChange("time_clock")}
              />
            </div>
            <div className="fontass">timeclock</div>
          </div>

          {/* 14. no timeclock */}
          <div className="col-md-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="no_time_clock"
                checked={formData.no_time_clock}
                onChange={onCheckboxChange("no_time_clock")}
              />
            </div>
            <span className="fontass">no timeclock</span>
          </div>

          {/* Label: If storage combi: store volume */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2"></div>
            <div className="fw-bold fontass">If storage combi: store volume</div>
          </div>

          {/* 15. <55 litres */}
          <div className="col-md-3 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="less_than_55_liters"
                checked={formData.less_than_55_liters}
                onChange={onCheckboxChange("less_than_55_liters")}
              />
            </div>
            <span className="fontass">
              <IoIosArrowBack /> 55 litres
            </span>
          </div>

          {/* 16. =55 litres */}
          <div className="col-md-3 mt-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="greater_than_50"
                checked={formData.greater_than_50}
                onChange={onCheckboxChange("greater_than_50")}
              />
            </div>
            <div className="fontass">
              <IoIosArrowBack />=55 litres
            </div>
          </div>
        </div>
      </div>

      {/* Hot Water Cylinder, Insulation and Controls Section */}
      <h6 className="fw-bold mt-3">Hot Water Cylinder, Insulation and Controls *</h6>
      <div className="shadow-sm pb-4 mt-2">
        <div className="bg-light rounded p-3">
          Hot Water Cylinder, Insulation and Controls
        </div>
        <div className="row p-2 pb-0">
          {/* 17. cylinder */}
          <div className="col-md-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="hot_water_cylinder"
                checked={formData.hot_water_cylinder}
                onChange={onCheckboxChange("hot_water_cylinder")}
              />
            </div>
            <span className="fontass fw-bold">cylinder</span>
          </div>
          {/* 18. combi */}
          <div className="col-md-3 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="combi"
                checked={formData.combi}
                onChange={onCheckboxChange("combi")}
              />
            </div>
            <div className="fw-bold fontass">combi</div>
          </div>
          {/* 19. CPSU */}
          <div className="col-md-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="CPSU"
                checked={formData.CPSU}
                onChange={onCheckboxChange("CPSU")}
              />
            </div>
            <span className="fontass fw-bold">CPSU</span>
          </div>
          {/* 20. thermal store */}
          <div className="col-md-4 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="thermal_store"
                checked={formData.thermal_store}
                onChange={onCheckboxChange("thermal_store")}
              />
            </div>
            <div className="fw-bold fontass">thermal store</div>
          </div>
          {/* 21. no access */}
          <div className="col-md-3 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="no_access"
                checked={formData.no_access}
                onChange={onCheckboxChange("no_access")}
              />
            </div>
            <span className="fontass">no access</span>
          </div>
          {/* 22. Insulation label */}
          <div className="col-md-2 mt-2 mx-2 col-12 d-flex">
            <div className="fw-bold fontass">Insulation:</div>
          </div>
          {/* 23. no insulation */}
          <div className="col-md-2 mt-2 col-12 d-flex">
            <div>
              <input
                type="checkbox"
                name="no_insulations"
                checked={formData.no_insulations}
                onChange={onCheckboxChange("no_insulations")}
              />
            </div>
            <span className="fontass2">no insulation</span>
          </div>
          {/* 24. primary pipework insulated */}
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="hot_water_cylinder_pipework_insulated"
                checked={formData.hot_water_cylinder_pipework_insulated}
                onChange={onCheckboxChange("hot_water_cylinder_pipework_insulated")}
              />
            </div>
            <div className="fontass2">primary pipework insulated</div>
          </div>
          {/* 25. capacity (litres) or dimensions */}
          <div className="col-md-5 mt-2 col-12 d-flex">
            <div className="col-md-4 mx-2">
              <input
                type="text"
                name="Capacity_liters_dimensions"
                value={formData.Capacity_liters_dimensions || ""}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">capacity (litres) or dimensions</span>
          </div>
          {/* 26. lagging jacket */}
          <div className="col-md-3 mt-2 col-12">
            <div className="d-flex">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="laggin_jacket"
                  checked={formData.laggin_jacket}
                  onChange={onCheckboxChange("laggin_jacket")}
                />
              </div>
              <div className="fontass2">lagging jacket</div>
            </div>
            {/* 27. factory fitted */}
            <div className="d-flex">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="factory_fitted"
                  checked={formData.factory_fitted}
                  onChange={onCheckboxChange("factory_fitted")}
                />
              </div>
              <div className="fontass2">factory fitted</div>
            </div>
          </div>
          {/* 28. insulation thickness */}
          <div className="col-md-4 mt-2 col-12 d-flex">
            <div className="col-md-4 mx-1">
              <input
                type="text"
                name="insulation_thickness"
                value={formData.insulation_thickness || ""}
                onChange={handleChange}
              />
            </div>
            <span className="fontass2">insulation thickness (mm)</span>
          </div>
          {/* 29. Note */}
          <div className="col-md-12 col-12 d-flex">
            <span className="fontass">
              Cylinder volume/dimensions does not include insulation thickness
            </span>
          </div>
          {/* 30. Controls label */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2"></div>
            <div className="fw-bold fontass">Controls:</div>
          </div>
          {/* 31. cylinder thermostat */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="cylinder_thermostat"
                checked={formData.cylinder_thermostat}
                onChange={onCheckboxChange("cylinder_thermostat")}
              />
            </div>
            <span className="fontass">cylinder thermostat</span>
          </div>
          {/* 32. independant timer */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="independant_timeer"
                checked={formData.independant_timeer}
                onChange={onCheckboxChange("independant_timeer")}
              />
            </div>
            <div className="fontass">independant timer</div>
          </div>
          {/* 33. storage is outdoors */}
          <div className="col-md-12 col-12">
            <div className="d-flex">
              <div className="mx-2">
                <input
                  type="checkbox"
                  name="storage_is_outdoors"
                  checked={formData.storage_is_outdoors}
                  onChange={onCheckboxChange("storage_is_outdoors")}
                />
              </div>
              <span className="fontass">storage is outdoors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Supplementary Summer Hot Water Section */}
      <h6 className="fw-bold mt-3">Supplementary Summer Hot Water *</h6>
      <div className="shadow-sm pb-4 mt-2">
        <div className="bg-light rounded p-3">
          Supplementary Summer Hot Water
        </div>
        <div className="row p-2 pb-0">
          {/* 34. not applicable */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="supplementary_hot_water_not_applicable"
                checked={formData.supplementary_hot_water_not_applicable}
                onChange={onCheckboxChange("supplementary_hot_water_not_applicable")}
              />
            </div>
            <span className="fontass"> not applicable</span>
          </div>
          {/* 35. electric heater present for supplementary hot water heating */}
          <div className="col-md-12 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="electric_heater_present_for_supplementary"
                checked={formData.electric_heater_present_for_supplementary}
                onChange={onCheckboxChange("electric_heater_present_for_supplementary")}
              />
            </div>
            <div className="fontass">
              electric heater present for supplementary hot water heating*
              *only if space heating and water heating cannot be separated 
              and main water heating isn't electric. See DEAP manual
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryHWS;
