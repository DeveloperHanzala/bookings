import React from "react";

const Roof1 = ({ formData = {}, handleChange }) => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        Roof Construction: Main Dwelling
      </div>
      <div className="row p-2 pb-4">
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="type_2_pitched_insulation_btw_joists"
              checked={formData.type_2_pitched_insulation_btw_joists || false}
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
              type="checkbox"
              name="type_2_pitched_insulation_in_rafters"
              checked={formData.type_2_pitched_insulation_in_rafters || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">pitched - insulation in rafters</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          <div className="col-md-4 mx-1">
            <input
              type="text"
              name="type_2_thinkness"
              value={formData.type_2_thinkness || ""}
              className="inpwall"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-8 fontass">thickness (mm)</div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="type_2_Flat_insulation_integral"
              checked={formData.type_2_Flat_insulation_integral || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">flat - insulation integral</span>
        </div>
        <div className="col-md-5 col-8 d-flex">
          <div className="col-md-4 mx-1">
            <input
              type="checkbox"
              name="type_2_fibre"
              checked={formData.type_2_fibre || false}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-8 fontass">fibre</div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="type_2_room_in_roof"
              checked={formData.type_2_room_in_roof || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">room in roof</span>
        </div>
        <div className="col-md-5 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="type_2_warmcell"
                checked={formData.type_2_warmcell || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">warmcell</span>
          </div>
        </div>
        <div className="col-md-7 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="type_2_no_heat_loss_roof"
              checked={formData.type_2_no_heat_loss_roof || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">no heat loss roof</span>
        </div>
        <div className="col-md-5 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-12 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="type_2_eps"
                checked={formData.type_2_eps || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">EPS</span>
          </div>
        </div>
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="type_2_roof_Construction_Other"
              checked={formData.type_2_roof_Construction_Other || false}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">other</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-6 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="type_2_roof_construction_unknown"
                checked={formData.type_2_roof_construction_unknown || false}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">Unknown</span>
          </div>
          <div className="col-md-6 d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="type_2_dense"
                checked={formData.type_2_dense || false}
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
              name="type_2_roof_Construction_Other_text"
              value={formData.type_2_roof_Construction_Other_text || ""}
              className="inpwall"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roof1;
