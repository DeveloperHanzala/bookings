import React from "react";

const WallConstruction4 = ({ formData, handleChange }) => {
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
              name="type_4_stone"
              checked={formData.type_4_stone || false}
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
              name="Type_4_solid_brick"
              checked={formData.Type_4_solid_brick || false}
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
              name="type_4_cavity"
              checked={formData.type_4_cavity || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">cavity</span>
        </div>

        {/* Solid Concrete Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_4_solid_concrete"
              checked={formData.type_4_solid_concrete || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">solid concrete</span>
        </div>

        {/* Hollow Block Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_4_hollow_block"
              checked={formData.type_4_hollow_block || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">hollow block</span>
        </div>

        {/* Timber Frame Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_4_timber_frame"
              checked={formData.type_4_timber_frame || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">timber frame</span>
        </div>

        {/* Other/Unknown Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_4_ther_unknown"
              checked={formData.type_4_ther_unknown || false}
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
              name="type_4_insulation_thickness_observable"
              value={formData.type_4_insulation_thickness_observable || ""}
              onChange={handleChange}
              className="disabled-input"
            />
          </div>
        </div>

        {/* Other Inputs */}
        <div className="col-md-12 mt-2">
          <div className="mx-2">
            <input
              type="text"
              name="type_4_ther_unknown_text"
              value={formData.type_4_ther_unknown_text || ""}
              onChange={handleChange}
              className="inpwall disabled-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallConstruction4;
