import React from 'react';

const SFboiler = ({ formData, id, handleChange }) => {
  // Helper for checkboxes to pass the checked value instead of the string value.
  const onCheckboxChange = (name) => (e) => {
    handleChange({ target: { name, value: e.target.checked } });
  };

  // For the “grate” option, we will use a radio group so the user can choose either
  // “rectangular” or “trapezium”. If you prefer checkboxes, you could update the logic.
  const onRadioChange = (e) => {
    // e.target.value will be "rectangular" or "trapezium"
    handleChange({ target: { name: "grate", value: e.target.value } });
  };

  return (
    <>
      {/* =================== Solid Fuel Boilers =================== */}
      <div className="shadow-sm pb-4">
        <div className="bg-light rounded p-3">
          Solid Fuel Boilers
        </div>
        <div className="row p-2 pb-0">
          {/* Primary / Secondary (if you need to track these add keys in your parent state) */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                onChange={onCheckboxChange("solid_fuel_boilers_primary")}
                // Optionally, add checked={formData.solid_fuel_boilers_primary}
              />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                onChange={onCheckboxChange("solid_fuel_boilers_secondary")}
                // Optionally, add checked={formData.solid_fuel_boilers_secondary}
              />
            </div>
            <span className="fontass">Secondary</span>
          </div>

          {/* Open fire + back boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="open_fire_back_boiler"
                checked={formData.open_fire_back_boiler}
                onChange={onCheckboxChange("open_fire_back_boiler")}
              />
            </div>
            <span className="fontass">open fire + back boiler</span>
          </div>

          {/* Closed room heater + back boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="closed_room_heater_back_boiler"
                checked={formData.closed_room_heater_back_boiler}
                onChange={onCheckboxChange("closed_room_heater_back_boiler")}
              />
            </div>
            <span className="fontass">closed room heater + back boiler</span>
          </div>

          {/* Grate (using a radio group for selection) */}
          <div className="col-md-12 mt-2 col-12">
            <span className="fw-bold">Grate</span>
            <div className="d-flex align-items-center">
              <input
                type="radio"
                name="grate"
                value="rectangular"
                checked={formData.grate === "rectangular"}
                onChange={onRadioChange}
              />
              <span className="mx-2 fontass">rectangular</span>
              <input
                type="radio"
                name="grate"
                value="trapezium"
                checked={formData.grate === "trapezium"}
                onChange={onRadioChange}
              />
              <span className="mx-2 fontass">trapezium</span>
            </div>
          </div>

          {/* Manual feed boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="manual_feed_boiler"
                checked={!!formData.manual_feed_boiler}
                onChange={onCheckboxChange("manual_feed_boiler")}
              />
            </div>
            <span className="fontass">manual feed boiler</span>
          </div>

          {/* Auto feed boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="auto_feed_boiler"
                checked={formData.auto_feed_boiler}
                onChange={onCheckboxChange("auto_feed_boiler")}
              />
            </div>
            <span className="fontass">auto feed boiler</span>
          </div>

          {/* MF / AF boiler in heated space */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="mf_af_boiler_heated_space"
                checked={formData.mf_af_boiler_heated_space}
                onChange={onCheckboxChange("mf_af_boiler_heated_space")}
              />
            </div>
            <span className="fontass">MF / AF boiler in heated space?</span>
          </div>

          {/* Integral oven */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="interal_oven"
                checked={formData.interal_oven}
                onChange={onCheckboxChange("interal_oven")}
              />
            </div>
            <span className="fontass">integral oven</span>
          </div>

          {/* Independant oven */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="independant_oven"
                checked={formData.independant_oven}
                onChange={onCheckboxChange("independant_oven")}
              />
            </div>
            <span className="fontass">independant oven</span>
          </div>

          {/* Biomass boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="biomass_boiler"
                checked={formData.biomass_boiler}
                onChange={onCheckboxChange("biomass_boiler")}
              />
            </div>
            <span className="fontass">biomass boiler</span>
          </div>

          {/* Wood chip / pellet boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="wood_chips_pellet_boiler"
                checked={formData.wood_chips_pellet_boiler}
                onChange={onCheckboxChange("wood_chips_pellet_boiler")}
              />
            </div>
            <span className="fontass">wood chip / pellet boiler</span>
          </div>

          {/* Manufacturer text input */}
          <div className="col-md-12 mt-3 col-12">
            <label className="fw-bold">Manufacturer / make / model number</label>
            <input
              type="text"
              name="solid_fuel_manufacturer"
              value={formData.solid_fuel_manufacturer || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* =================== Electric Boilers =================== */}
      <div className="shadow-sm pb-4">
        <div className="bg-light rounded p-3">
          Electric Boilers
        </div>
        <div className="row p-2 pb-0">
          {/* Direct acting */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="direct_acting"
                checked={formData.direct_acting}
                onChange={onCheckboxChange("direct_acting")}
              />
            </div>
            <span className="fontass">direct acting</span>
          </div>
          {/* Dry core */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="dry_core"
                checked={formData.dry_core}
                onChange={onCheckboxChange("dry_core")}
              />
            </div>
            <span className="fontass">dry core</span>
          </div>
          {/* CPSU */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="electric_boilers_cpsu"
                checked={formData.electric_boilers_cpsu}
                onChange={onCheckboxChange("electric_boilers_cpsu")}
              />
            </div>
            <span className="fontass">CPSU</span>
          </div>
          {/* Water storage */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="water_storage"
                checked={formData.water_storage}
                onChange={onCheckboxChange("water_storage")}
              />
            </div>
            <span className="fontass">water storage</span>
          </div>
          {/* Dry core / water storage in heated space */}
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="dry_core_water_storage"
                checked={formData.dry_core_water_storage}
                onChange={onCheckboxChange("dry_core_water_storage")}
              />
            </div>
            <span className="fontass">dry core / water storage in heated space</span>
          </div>
        </div>
      </div>

      {/* =================== Gas Room Heaters =================== */}
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Gas Room Heaters
        </div>
        <div className="row p-2 pb-0">
          {/* Primary / Secondary */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                onChange={onCheckboxChange("gas_room_heaters_primary")}
                // Optionally add checked={formData.gas_room_heaters_primary}
              />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                onChange={onCheckboxChange("gas_room_heaters_secondary")}
                // Optionally add checked={formData.gas_room_heaters_secondary}
              />
            </div>
            <span className="fontass">Secondary</span>
          </div>
          {/* Pre 1980 */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_room_pre_1980"
                checked={formData.gas_room_pre_1980}
                onChange={onCheckboxChange("gas_room_pre_1980")}
              />
            </div>
            <span className="fontass">pre 1980</span>
          </div>
          {/* Coal effect - sealed flue */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="coal_effect_sealed_flue"
                checked={formData.coal_effect_sealed_flue}
                onChange={onCheckboxChange("coal_effect_sealed_flue")}
              />
            </div>
            <span className="fontass">coal effect - sealed flue</span>
          </div>
          {/* Coal effect - open to chimney */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="coal_effect_open_to_chimney"
                checked={formData.coal_effect_open_to_chimney}
                onChange={onCheckboxChange("coal_effect_open_to_chimney")}
              />
            </div>
            <span className="fontass">coal effect - open to chimney</span>
          </div>
          {/* Flueless */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="flueless"
                checked={formData.flueless}
                onChange={onCheckboxChange("flueless")}
              />
            </div>
            <span className="fontass">flueless</span>
          </div>
          {/* Gas room condensing */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_room_condensing"
                checked={formData.gas_room_condensing}
                onChange={onCheckboxChange("gas_room_condensing")}
              />
            </div>
            <span className="fontass">condensing</span>
          </div>
          {/* Gas room back boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_room_back_boiler"
                checked={formData.gas_room_back_boiler}
                onChange={onCheckboxChange("gas_room_back_boiler")}
              />
            </div>
            <span className="fontass">back boiler</span>
          </div>
          {/* Gas room other */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="gas_room_other"
                checked={formData.gas_room_other}
                onChange={onCheckboxChange("gas_room_other")}
              />
            </div>
            <span className="fontass">other (none of above)</span>
          </div>
          {/* Open-fronted */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="open_fronted"
                checked={formData.open_fronted}
                onChange={onCheckboxChange("open_fronted")}
              />
            </div>
            <span className="fontass">open-fronted</span>
          </div>
          {/* Glass-fronted */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="glass_fronted"
                checked={formData.glass_fronted}
                onChange={onCheckboxChange("glass_fronted")}
              />
            </div>
            <span className="fontass">glass-fronted</span>
          </div>
          {/* Flue type options */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <span className="fontass fw-bold">Flue type</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-1">
              <input
                type="checkbox"
                name="flue_type_open"
                checked={formData.flue_type_open}
                onChange={onCheckboxChange("flue_type_open")}
              />
            </div>
            <span className="fontass">open</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-1">
              <input
                type="checkbox"
                name="flue_type_balanced"
                checked={formData.flue_type_balanced}
                onChange={onCheckboxChange("flue_type_balanced")}
              />
            </div>
            <span className="fontass">balanced</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-1">
              <input
                type="checkbox"
                name="flue_type_fan_assisted"
                checked={formData.flue_type_fan_assisted}
                onChange={onCheckboxChange("flue_type_fan_assisted")}
              />
            </div>
            <span className="fontass">fan assisted</span>
          </div>
        </div>
      </div>

      {/* =================== Oil Room Heaters =================== */}
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Oil Room Heaters
        </div>
        <div className="row p-2 pb-0">
          {/* Primary / Secondary */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                onChange={onCheckboxChange("oil_room_heaters_primary")}
                // Optionally add checked={formData.oil_room_heaters_primary}
              />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                onChange={onCheckboxChange("oil_room_heaters_secondary")}
                // Optionally add checked={formData.oil_room_heaters_secondary}
              />
            </div>
            <span className="fontass">Secondary</span>
          </div>
          {/* Room heater / range */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="room_heater_range"
                checked={formData.room_heater_range}
                onChange={onCheckboxChange("room_heater_range")}
              />
            </div>
            <span className="fontass">room heater / range</span>
          </div>
          {/* Room heater/range with boiler (no rads) */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="room_heater_range_boiler"
                checked={formData.room_heater_range_boiler}
                onChange={onCheckboxChange("room_heater_range_boiler")}
              />
            </div>
            <span className="fontass">room heater/range with boiler (no rads)</span>
          </div>
          {/* Age options */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="fw-bold fontass">Age</div>
            <div className="mx-2">
              <input
                type="checkbox"
                name="oil_room_heaters_pre_2000"
                checked={formData.oil_room_heaters_pre_2000}
                onChange={onCheckboxChange("oil_room_heaters_pre_2000")}
              />
            </div>
            <span className="fontass">pre 2000</span>
          </div>
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="oil_room_heaters_2000_later"
                checked={formData.oil_room_heaters_2000_later}
                onChange={onCheckboxChange("oil_room_heaters_2000_later")}
              />
            </div>
            <span className="fontass">2000 or later</span>
          </div>
        </div>
      </div>

      {/* =================== Solid Fuel Room Heaters =================== */}
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Solid Fuel Room Heaters
        </div>
        <div className="row p-2 pb-0">
          {/* open fire in grate */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="open_fire_in_grate"
                checked={formData.open_fire_in_grate}
                onChange={onCheckboxChange("open_fire_in_grate")}
              />
            </div>
            <span className="fontass">open fire in grate</span>
          </div>
          {/* Solid fuel open fire back boiler */}
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="solid_fuel_open_fire_back_boiler"
                checked={formData.solid_fuel_open_fire_back_boiler}
                onChange={onCheckboxChange("solid_fuel_open_fire_back_boiler")}
              />
            </div>
            <span className="fontass">solid fuel open fire back boiler</span>
          </div>
          {/* Closed room heater */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="closed_room_heater"
                checked={formData.closed_room_heater}
                onChange={onCheckboxChange("closed_room_heater")}
              />
            </div>
            <span className="fontass">closed room heater</span>
          </div>
          {/* Closed room heater with back boiler */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="closed_room_heater_with_back_boiler"
                checked={formData.closed_room_heater_with_back_boiler}
                onChange={onCheckboxChange("closed_room_heater_with_back_boiler")}
              />
            </div>
            <span className="fontass">closed room heater with back boiler</span>
          </div>
          {/* Stove (pellet-fired) */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="stove"
                checked={formData.stove}
                onChange={onCheckboxChange("stove")}
              />
            </div>
            <span className="fontass">stove (pellet-fired)</span>
          </div>
          {/* Flueless bioethanol */}
          <div className="col-md-6 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="flueless_bioethanol"
                checked={formData.flueless_bioethanol}
                onChange={onCheckboxChange("flueless_bioethanol")}
              />
            </div>
            <span className="fontass">flueless bioethanol</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SFboiler;
