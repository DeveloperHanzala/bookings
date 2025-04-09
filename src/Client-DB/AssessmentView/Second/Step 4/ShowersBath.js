import React from 'react';

const ShowersBath = ({ formData, handleChange }) => {
  return (
    <>
      <div className="shadow-sm pb-5 mt-3">
        <div className="bg-light rounded p-3">
          Showers and baths
        </div>
        <div className="row p-3">
          {/* Top row: two checkboxes */}
          <div className="border w-100 p-2 d-flex flex-wrap">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="mx-2">
                <input 
                     className='disabled-input'
                type="checkbox" 
                  name="showers_baths" 
                  checked={formData.showers_baths || false} 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <span>Showers and baths</span>
              </div>
            </div>
            <div className="col-md-8 d-flex justify-content-center align-items-center">
              <div className="mx-2">
                <input 
                     className='disabled-input'
                type="checkbox" 
                  name="water_use_target_125" 
                  checked={formData.water_use_target_125 || false} 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <span>Is water use target (hot and cold) 125 l/p/d (y/n)?</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of showers */}
      <div className="custom-table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Shower #</th>
              <th>Is flow rate known? (y/n)</th>
              <th>Shower type: Electric/Unvented/Vented/Vented+pump</th>
              <th>Flow restrictor? (y/n)</th>
              <th>Flow rate (if known)?</th>
              <th>WWHR efficiency and utilisation factor</th>
            </tr>
          </thead>
          <tbody>
            {/* For each shower row, we bind a set of controlled inputs */}
            { [1,2,3,4,5].map(num => (
              <tr key={num}>
                <td className="fw-bold">{num < 10 ? "0" + num : num}</td>
                <td>
                  <input 
                    type="text" 
                    className="custom-input disabled-input" 
                    name={`shower${num}_flow_rate_known`}
                    value={formData[`shower${num}_flow_rate_known`] || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    className="custom-input disabled-input" 
                    name={`shower${num}_shower_type`}
                    value={formData[`shower${num}_shower_type`] || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    className="custom-input disabled-input" 
                    name={`shower${num}_flow_restrictor`}
                    value={formData[`shower${num}_flow_restrictor`] || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    className="custom-input disabled-input" 
                    name={`shower${num}_flow_rate`}
                    value={formData[`shower${num}_flow_rate`] || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    className="custom-input disabled-input" 
                    name={`shower${num}_WWHR_efficiency`}
                    value={formData[`shower${num}_WWHR_efficiency`] || ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowersBath;


// showers_baths: false,
// water_use_target_125: false,
// shower1_flow_rate_known: "",
// shower1_shower_type: "",
// shower1_flow_restrictor: "",
// shower1_flow_rate: "",
// shower1_WWHR_efficiency: "",
// shower2_flow_rate_known: "",
// shower2_shower_type: "",
// shower2_flow_restrictor: "",
// shower2_flow_rate: "",
// shower2_WWHR_efficiency: "",
// shower3_flow_rate_known: "",
// shower3_shower_type: "",
// shower3_flow_restrictor: "",
// shower3_flow_rate: "",
// shower3_WWHR_efficiency: "",
// shower4_flow_rate_known: "",
// shower4_shower_type: "",
// shower4_flow_restrictor: "",
// shower4_flow_rate: "",
// shower4_WWHR_efficiency: "",
// shower5_flow_rate_known: "",
// shower5_shower_type: "",
// shower5_flow_restrictor: "",
// shower5_flow_rate: "",
// shower5_WWHR_efficiency: ""