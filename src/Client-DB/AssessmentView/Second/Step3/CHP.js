import React from 'react';

const CHP = ({ formData, handleChange }) => {
  // Helper for checkbox events
  const onCheckboxChange = (name) => (e) => {
    handleChange({ target: { name, value: e.target.checked } });
  };

  return (
    <>
      <div className="shadow-sm pb-4 mt-3">
        <div className="bg-light rounded p-3">
          Individual CHP?
        </div>
        <div className="row p-2 pb-0">
          {/* Checkbox for Individual CHP */}
          <div className="col-md-12 mb-2 col-12 d-flex align-items-center">
            <div className="mx-2">
              <input
                className='disabled-input'
                type="checkbox"
                name="individual_chp"
                checked={formData.individual_chp}
                onChange={onCheckboxChange("individual_chp")}
              />
            </div>
            <span className="fontass">Is there an individual CHP?</span>
          </div>
          
          {/* % heat from CHP */}
          <div className="col-md-12 mb-2 col-12 d-flex">
            <div className="col-md-4 mx-2">
              <input
                type="text"
                name="percentage_heat_from_chp"
                className="inpwall1 disabled-input"
                value={formData.percentage_heat_from_chp || ""}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">% heat from CHP</span>
          </div>

          <div className="col-md-12 col-12 d-flex">
            <span className="fw-bold mx-2">CHP efficiencies</span>
          </div>

          {/* Electrical % */}
          <div className="col-md-12 mt-2 col-12 d-flex align-items-center">
            <div className="col-md-4 mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="electrical"
                value={formData.electrical || ""}
                onChange={handleChange}
              />
            </div>
            <div className="fontass">Electrical %</div>
          </div>

          {/* Thermal % */}
          <div className="col-md-12 mt-2 col-12 d-flex align-items-center">
            <div className="col-md-4 mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="thermal"
                value={formData.thermal || ""}
                onChange={handleChange}
              />
            </div>
            <div className="fontass">Thermal %</div>
          </div>

          {/* Fuel */}
          <div className="col-md-12 mt-2 col-12 d-flex">
            <div className="mx-2 fontass">Fuel</div>
            <div className="mx-2">
              <input
                   className='disabled-input'
                type="checkbox"
                name="fuel"
                value={formData.fuel || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CHP;
