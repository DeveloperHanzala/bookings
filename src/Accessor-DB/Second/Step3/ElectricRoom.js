import React from 'react';

const ElectricRoom = ({ formData, handleChange }) => {
  // Helper function for checkbox inputs:
  const onCheckboxChange = (name) => (e) => {
    handleChange({ target: { name, value: e.target.checked } });
  };

  return (
    <>
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Electric Room Heaters
        </div>
        <div className="row p-2 pb-0">
          {/* Primary and Secondary checkboxes (no mapping provided for these) */}
          <div className="col-md-6 mb-2 col-12 d-flex">
            <div className="mx-2">
              <input type="checkbox" /* not mapped */ />
            </div>
            <span className="fontass">Primary</span>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <div className="mx-2">
              <input type="checkbox" /* not mapped */ />
            </div>
            <span className="fontass">Secondary</span>
          </div>

          {/* Mapped checkbox: panel, convector, or radiant heater */}
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="panel_converter_radiant_heater"
                checked={formData.panel_converter_radiant_heater}
                onChange={onCheckboxChange("panel_converter_radiant_heater")}
              />
            </div>
            <div className="fontass">
              panel, convector, or radiant heater
            </div>
          </div>

          {/* Mapped checkbox: fan heater */}
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="fan_heater"
                checked={formData.fan_heater}
                onChange={onCheckboxChange("fan_heater")}
              />
            </div>
            <div className="fontass">
              fan heater
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Secondary heating make / manufacturer/model number
        </div>
        <div className="row p-2 d-flex pb-0">
          <div className="col-md-12 mb-2 col-12">
            <div className="mx-2">
              <input
                type="text"
                name="secondary_heating_manufacturer"
                className="w-100"
                value={formData.secondary_heating_manufacturer || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricRoom;
