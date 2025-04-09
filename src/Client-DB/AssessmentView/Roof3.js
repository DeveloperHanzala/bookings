import React from "react";

const Roof3 = ({ formData = {}, handleChange }) => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        Roof Construction: Main Dwelling
      </div>
      <div className="row p-2 pb-4">
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_pitched_insulation_btw_joists"
              checked={formData.type_3_pitched_insulation_btw_joists || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">pitched - insulation btw joists</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          <div>Roof insulation</div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_pitched_insulation_in_rafters"
              checked={formData.type_3_pitched_insulation_in_rafters || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">pitched - insulation in rafters</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          <div className="col-md-4 mx-1">
            <input
            
              type="text"
              name="type_3_thinkness"
              value={formData.type_3_thinkness || ""}
              className="inpwall disabled-input"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-8 fontass">thickness (mm)</div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_Flat_insulation_integral"
              checked={formData.type_3_Flat_insulation_integral || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">flat - insulation integral</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          <div className="col-md-4 mx-1">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_fibre"
              checked={formData.type_3_fibre || false}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-8 fontass">fibre</div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_room_in_roof"
              checked={formData.type_3_room_in_roof || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">room in roof</span>
        </div>
        <div className="col-md-5 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_3_warmcell"
                checked={formData.type_3_warmcell || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">warmcell</span>
          </div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_no_heat_loss_roof"
              checked={formData.type_3_no_heat_loss_roof || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">no heat loss roof</span>
        </div>
        <div className="col-md-5 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_3_eps"
                checked={formData.type_3_eps || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">EPS</span>
          </div>
        </div>
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_3_roof_Construction_Other"
              checked={formData.type_3_roof_Construction_Other || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">other</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-6 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_3_roof_construction_unknown"
                checked={formData.type_3_roof_construction_unknown || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">Unknown</span>
          </div>
          <div className="col-md-6 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_3_dense"
                checked={formData.type_3_dense || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">Dense</span>
          </div>
        </div>
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="text"
              name="type_3_roof_Construction_Other_text"
              value={formData.type_3_roof_Construction_Other_text || ""}
              className="inpwall disabled-input"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roof3;
