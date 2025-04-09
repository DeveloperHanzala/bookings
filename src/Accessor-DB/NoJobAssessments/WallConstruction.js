import React, { useEffect } from "react";

const WallConstruction = ({ formData = {}, handleChange }) => {
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
              type="checkbox"
              name="stone"
              checked={formData.stone || false} // default to false if undefined
              onChange={handleChange}
            />
          </div>
          <span className="fontass">stone</span>
        </div>

        {/* Solid Brick Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="solid_brick"
              checked={formData.solid_brick || false} // default to false if undefined
              onChange={handleChange}
            />
          </div>
          <span className="fontass">solid brick</span>
        </div>

        {/* Cavity Checkbox */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="cavity"
              checked={formData.cavity || false} // default to false if undefined
              onChange={handleChange}
            />
          </div>
          <span className="fontass">cavity</span>
        </div>

        {/* Other components... */}
        {/* Solid Concrete */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="solid_concrete"
              checked={formData.solid_concrete || false} // default to false if undefined
              onChange={handleChange}
            />
          </div>
          <span className="fontass">solid concrete</span>
        </div>

        {/* Hollow Block */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="hollow_block"
              checked={formData.hollow_block || false} // default to false if undefined
              onChange={handleChange}
            />
          </div>
          <span className="fontass">hollow block</span>
        </div>

        {/* Timber Frame */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="timber_frame"
              checked={formData.timber_frame || false} // default to false if undefined
              onChange={handleChange}
            />
          </div>
          <span className="fontass">timber frame</span>
        </div>

        {/* Other/Unknown */}
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="other_unknown"
              checked={formData.other_unknown || false} // default to false if undefined
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
              name="insulation_thickness_observable"
              value={formData.insulation_thickness_observable || ""}
              onChange={handleChange}
              className="inpwall"
            />
          </div>
        </div>

        {/* Other Inputs */}
        <div className="col-md-12 mt-2">
          <div className="mx-2">
            <input
              type="text"
              name="other_unknow_text"
              value={formData.other_unknow_text || ""}
              onChange={handleChange}
              className="inpwall"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default WallConstruction;
