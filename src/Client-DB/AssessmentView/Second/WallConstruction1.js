import React, { useState } from "react";

const WallConstruction1 = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        Wall construction Main Wall
      </div>
      <div className="row p-2 pb-4">
        {/* Stone Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_stone"
              checked={formData.type_2_stone || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">stone</span>
        </div>

        {/* Solid Brick Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="Type_2_solid_brick"
              checked={formData.Type_2_solid_brick || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">solid brick</span>
        </div>

        {/* Cavity Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_cavity"
              checked={formData.type_2_cavity || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">cavity</span>
        </div>

        {/* Other components... */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_solid_concrete"
              checked={formData.type_2_solid_concrete || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">solid concrete</span>
        </div>

        {/* Hollow Block */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_hollow_block"
              checked={formData.type_2_hollow_block || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">hollow block</span>
        </div>

        {/* Timber Frame */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_timber_frame"
              checked={formData.type_2_timber_frame || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">timber frame</span>
        </div>

        {/* Other/Unknown */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_other_unknown"
              checked={formData.type_2_other_unknown || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">other/unknown</span>
        </div>

        {/* Insulation Thickness if Observable */}
        <div className="col-md-12 mt-2 col-4 align-items-center justify-content-center d-flex">
          <span className="fontass">Insulation thickness if observable (mm)</span>
          <div className="mx-2">
            <input
          
              type="text"
              name="type_2_insulation_thickness_observable"
              value={formData.type_2_insulation_thickness_observable || ""}
              onChange={handleChange}
              className="inpwall disabled-input"
            />
          </div>
        </div>

        {/* Other Inputs */}
        <div className="col-md-12 mt-2">
          <div className="mx-2">
            <input
              type="text"
              name="type_2_other_text"
              value={formData.type_2_other_text || ""}
              onChange={handleChange}
              className="inpwall disabled-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallConstruction1;
