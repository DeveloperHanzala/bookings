import React from "react";

const SecondaryF = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-4">
      <div className="bg-light rounded p-3">Secondary Heating Fuel</div>
      <div className="row p-2 pb-0">
        <div className="col-md-6 mb-2 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="no_secondary_system_s"
              checked={formData.no_secondary_system_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass2">no secondary system</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="main_gas_s"
              checked={formData.main_gas_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">mains gas</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="housecoal_s"
              checked={formData.housecoal_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">housecoal</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="bulk_lpg_s"
              checked={formData.bulk_lpg_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">bulk LPG</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="anthracite_s"
              checked={formData.anthracite_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">anthracite</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="bottled_lpg_s"
              checked={formData.bottled_lpg_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">bottled LPG</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="smokeless_s"
              checked={formData.smokeless_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">smokeless</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="heating_oil_s"
              checked={formData.heating_oil_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">heating oil</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="peat_briquettes_s"
              checked={formData.peat_briquettes_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">peat briquettes</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="electricity_s"
              checked={formData.electricity_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">electricity</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="sod_peat_s"
              checked={formData.sod_peat_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">sod peat</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="heat_from_chp_s"
              checked={formData.heat_from_chp_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">heat from CHP</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="wood_pellets_s"
              checked={formData.wood_pellets_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">wood pellets</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="bioethanol_s"
              checked={formData.bioethanol_s}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">bioethanol</span>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="wood_chips_s"
              checked={formData.wood_chips_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">wood chips</div>
        </div>

        <div className="col-md-6 col-12 d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="biodiesel_s"
              checked={formData.biodiesel_s}
              onChange={handleChange}
            />
          </div>
          <div className="fontass">biodiesel</div>
        </div>

        <div className="col-md-12 col-12">
          <div className="d-flex">
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name="other_heating_system_s"
                checked={formData.other_heating_system_s}
                onChange={handleChange}
              />
            </div>
            <span className="fontass">other</span>
          </div>
          <div>
            <input
              type="text"
              name="other_heating_system_s_text"
              className="inpwall disabled-input"
              value={formData.other_heating_system_s_text || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryF;
