import React from "react";

const PrimaryF = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-4">
    <div className="bg-light rounded p-3">Primary Heating Fuel</div>
    <div className="row p-2 pb-0">
      {/* Mains Gas */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="main_gas"
            checked={formData.main_gas}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Mains Gas</span>
      </div>

      {/* Housecoal */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="housecoal"
            checked={formData.housecoal}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Housecoal</div>
      </div>

      {/* Bulk LPG */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="bulk_lpg"
            checked={formData.bulk_lpg}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Bulk LPG</span>
      </div>

      {/* Anthracite */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="anthracite"
            checked={formData.anthracite}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Anthracite</div>
      </div>

      {/* Bottled LPG */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="bottled_lpg"
            checked={formData.bottled_lpg}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Bottled LPG</span>
      </div>

      {/* Smokeless */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="smokeless"
            checked={formData.smokeless}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Smokeless</div>
      </div>

      {/* Heating Oil */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="heating_oil"
            checked={formData.heating_oil}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Heating Oil</span>
      </div>

      {/* Peat Briquettes */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="peat_briquettes"
            checked={formData.peat_briquettes}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Peat Briquettes</div>
      </div>

      {/* Electricity */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="electricity"
            checked={formData.electricity}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Electricity</span>
      </div>

      {/* Sod Peat */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="sod_peat"
            checked={formData.sod_peat}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Sod Peat</div>
      </div>

      {/* Heat from CHP */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="heat_from_chp"
            checked={formData.heat_from_chp}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Heat from CHP</span>
      </div>

      {/* Wood Pellets */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="wood_pellets"
            checked={formData.wood_pellets}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Wood Pellets</div>
      </div>

      {/* Bioethanol */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="bioethanol"
            checked={formData.bioethanol}
            onChange={handleChange}
          />
        </div>
        <span className="fontass">Bioethanol</span>
      </div>

      {/* Wood Chips */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="wood_chips"
            checked={formData.wood_chips}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Wood Chips</div>
      </div>

      {/* Other */}
      <div className="col-md-6 col-12">
        <div className="d-flex">
          <div className="mx-2">
            <input
            className='disabled-input'
              type="checkbox"
              name="other_heating_system"
              checked={formData.other_heating_system}
              onChange={handleChange}
            />
          </div>
          <span className="fontass">Other</span>
        </div>
        <div>
          <input
          
            type="text"
            className="inpwall disabled-input"
            name="other_heating_system_text"
            value={formData.other_heating_system_text || ""}
            onChange={handleChange} // for text input
          />
        </div>
      </div>

      {/* Biodiesel */}
      <div className="col-md-6 col-12 d-flex">
        <div className="mx-2">
          <input
          className='disabled-input'
            type="checkbox"
            name="biodiesel"
            checked={formData.biodiesel}
            onChange={handleChange}
          />
        </div>
        <div className="fontass">Biodiesel</div>
      </div>
    </div>
  </div>
  );
};

export default PrimaryF;
