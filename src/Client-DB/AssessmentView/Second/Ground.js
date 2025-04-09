import React from "react";

const Ground = ({ formData = {}, handleChange }) => {
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
              name="solid"
              checked={formData.solid}
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
              name="no_heat_loss_ground_floor"
              checked={formData.no_heat_loss_ground_floor}
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
              name="suspended"
              checked={formData.suspended}
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
              name="sealed"
              checked={formData.sealed}
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
              name="unsealed"
              checked={formData.unsealed}
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
              name="above_unheated_basement"
              checked={formData.above_unheated_basement}
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
              name="heated_basement"
              checked={formData.heated_basement}
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
              name="ground_Floor_Dwelling_other"
              checked={formData.ground_Floor_Dwelling_other}
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
              name="floor_insulation"
              value={formData.floor_insulation || ""}
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
                name="Ground_Floor_Construction_Main_Dwelling_eps"
                checked={formData.Ground_Floor_Construction_Main_Dwelling_eps}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">EPS</span>
          </div>
        </div>

        <div className="col-md-6 col-8 justify-content-center mt-2 d-flex">
          <div className="col-md-7 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="Ground_Floor_Construction_Main_Dwelling_unknow"
                checked={formData.Ground_Floor_Construction_Main_Dwelling_unknow}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">Unknown</span>
          </div>
          <div className="col-md-5 d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="Ground_Floor_Construction_Main_Dwelling_none"
                checked={formData.Ground_Floor_Construction_Main_Dwelling_none}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">None</span>
          </div>
        </div>

        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="Ground_Floor_Construction_Main_Dwelling_min_fibre"
              checked={formData.Ground_Floor_Construction_Main_Dwelling_min_fibre}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">min fibre</span>
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-5 col-4 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="Ground_Floor_Construction_Main_Dwelling_dense"
              checked={formData.Ground_Floor_Construction_Main_Dwelling_dense}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">dense</span>
        </div>
      </div>
    </div>
  );
};

export default Ground;
