import React from "react";

const Ground1 = ({ formData = {}, handleChange }) => {
  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        Ground Floor: Main Dwelling
      </div>
      <div className="row p-2 pb-4">
        <div className="col-md-4 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_solid"
              checked={formData.type_2_solid}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">solid</span>
        </div>
        <div className="col-md-8 col-8 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_no_heat_loss_ground_floor"
              checked={formData.type_2_no_heat_loss_ground_floor}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">no heat loss ground floor</div>
        </div>
        <div className="col-md-4 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_suspended"
              checked={formData.type_2_suspended}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">suspended</span>
        </div>
        <div className="col-md-4 col-8 d-flex">
          <div className="col-md-4 mx-1">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_sealed"
              checked={formData.type_2_sealed}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-8 fontass">sealed</div>
        </div>
        <div className="col-md-4 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_unsealed"
              checked={formData.type_2_unsealed}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">unsealed</span>
        </div>
        <div className="col-md-12 col-8 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_above_unheated_basement"
              checked={formData.type_2_above_unheated_basement}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">above unheated basement</div>
        </div>
        <div className="col-md-12 col-8 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_heated_basement"
              checked={formData.type_2_heated_basement}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">heated basement</div>
        </div>
        <div className="col-md-12 col-8 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_ground_Floor_Dwelling_other"
              checked={formData.type_2_ground_Floor_Dwelling_other}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">other</div>
        </div>

        <div className="col-md-5 col-4 d-flex">
          <span className="fw-bold fontass">Floor Insulation</span>
        </div>
        <div className="col-md-7 col-8 justify-content-center d-flex">
          <div className="col-md-12 d-flex">
            <div className="mx-2"></div>
            <span className="fw-bold fontass">Type of insulation (if any)</span>
          </div>
        </div>
        <div className="col-md-6 col-4">
          <div className="mx-2">
            <input
              type="text"
              name="type_2_floor_insulation"
              value={formData.type_2_floor_insulation || ""}
              className="inpwall disabled-input"
              onChange={handleChange}
            />
          </div>
          <span className="fontass">
            thickness (mm) <br /> (only if any observed)
          </span>
        </div>
        <div className="col-md-6 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-12 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_2_ground_Floor_insulation_none"
                checked={formData.type_2_ground_Floor_insulation_none}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">None</span>
          </div>
        </div>

        <div className="col-md-6 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-7 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_2_ground_floor_construction_main_dwelling_eps"
                checked={formData.type_2_ground_floor_construction_main_dwelling_eps}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">EPS</span>
          </div>
          <div className="col-md-5 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="type_2_ground_floor_construction_main_dwelling_min_fibre"
                checked={formData.type_2_ground_floor_construction_main_dwelling_min_fibre}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">min fibre</span>
          </div>
        </div>

        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_ground_floor_construction_main_dwelling_dense"
              checked={formData.type_2_ground_floor_construction_main_dwelling_dense}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">dense</span>
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="type_2_ground_floor_construction_main_dwelling_unknow"
              checked={formData.type_2_ground_floor_construction_main_dwelling_unknow}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Unknown</span>
        </div>
      </div>
    </div>
  );
};

export default Ground1;
