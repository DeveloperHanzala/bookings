import React from 'react'

const FloorArea = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="container mt-5">
        <h6 className="text-center fw-bold mb-4">Total Floor Areas, Heat Loss Floor Areas, Gross Heat Loss Wall Areas, Gross Heat Loss Roof Areas, Storey Heights* (internal dimensions only)</h6>
        <div className="custom-table-container shadow-sm">
          <div className='bg-light p-4'>
            Total Floor Areas, Heat Loss Floor Areas, Gross Heat Loss Wall Areas, Gross Heat Loss Roof Areas, Storey Heights* (internal dimensions only)
          </div>
          <table className="custom-table ">
            <thead>
              <tr>
                <th></th>
                <th>Storey height (m)</th>
                <th>Total floor area (m2)</th>
                <th>Heatloss Floor 1 Area (m2)</th>
                <th>Heatloss Floor 2 Area (m2)</th>
                <th>Heatloss Floor 3 Area (m2)</th>
                <th>Heatloss Floor 4 Area (m2)</th>
                <th>Heatloss Perimeter (m)</th>
                <th>Heatloss Wall 1 Area (m2)</th>
                <th>Heatloss Wall 2 Area (m2)</th>
                <th>Heatloss Wall 3 Area (m2)</th>
                <th>Heatloss Wall 4 Area (m2)</th>
                <th>Heatloss Roof 1 Area (m2)</th>
                <th>Heatloss Roof 2 Area (m2)</th>
                <th>Heatloss Roof 3 Area (m2)</th>
                <th>Heatloss Roof 4 Area (m2)</th>
              </tr>
            </thead>
            <tbody>
              {/* Ground Floor */}
              <tr>
                <td data-label="Ground / Lowest Floor" ><span className='d-none d-md-block'>Ground / Lowest Floor</span></td>
                <td data-label="Storey height (m)"><input type="text" className="custom-input border-2 border-md-0" name="ground_storey_heigh" value={formData.ground_storey_heigh || ''} onChange={handleChange} /></td>
                <td data-label="Total floor area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_total_floor_area" value={formData.ground_total_floor_area || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_floor_1" value={formData.ground_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_floor_2" value={formData.ground_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_floor_3" value={formData.ground_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_floor_4" value={formData.ground_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Perimeter (m)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_perimeter" value={formData.ground_heatloss_perimeter || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_wall_1" value={formData.ground_heatloss_wall_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_wall_2" value={formData.ground_heatloss_wall_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_wall_3" value={formData.ground_heatloss_wall_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_wall_4" value={formData.ground_heatloss_wall_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_roof_1" value={formData.ground_heatloss_roof_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_roof_2" value={formData.ground_heatloss_roof_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_roof_3" value={formData.ground_heatloss_roof_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="ground_heatloss_roof_4" value={formData.ground_heatloss_roof_4 || ''} onChange={handleChange} /></td>
              </tr>

              {/* First Floor */}
              <tr>
                <td data-label="First / Next Floor" ><span className='d-none d-md-block'>First / Next Floor</span></td>
                <td data-label="Storey height (m)"><input type="text" className="custom-input border-2 border-md-0" name="first_storey_heigh" value={formData.first_storey_heigh || ''} onChange={handleChange} /></td>
                <td data-label="Total floor area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_total_floor_area" value={formData.first_total_floor_area || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_floor_1" value={formData.first_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_floor_2" value={formData.first_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_floor_3" value={formData.first_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_floor_4" value={formData.first_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Perimeter (m)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_perimeter" value={formData.first_heatloss_perimeter || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_wall_1" value={formData.first_heatloss_wall_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_wall_2" value={formData.first_heatloss_wall_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_wall_3" value={formData.first_heatloss_wall_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_wall_4" value={formData.first_heatloss_wall_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_roof_1" value={formData.first_heatloss_roof_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_roof_2" value={formData.first_heatloss_roof_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_roof_3" value={formData.first_heatloss_roof_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="first_heatloss_roof_4" value={formData.first_heatloss_roof_4 || ''} onChange={handleChange} /></td>
              </tr>

              {/* Second Floor */}
              <tr>
                <td data-label="Second / Next Floor" ><span className='d-none d-md-block'>Second / Next Floor</span></td>
                <td data-label="Storey height (m)"><input type="text" className="custom-input border-2 border-md-0" name="second_storey_heigh" value={formData.second_storey_heigh || ''} onChange={handleChange} /></td>
                <td data-label="Total floor area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_total_floor_area" value={formData.second_total_floor_area || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_floor_1" value={formData.second_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_floor_2" value={formData.second_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_floor_3" value={formData.second_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_floor_4" value={formData.second_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Perimeter (m)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_perimeter" value={formData.second_heatloss_perimeter || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_wall_1" value={formData.second_heatloss_wall_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_wall_2" value={formData.second_heatloss_wall_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_wall_3" value={formData.second_heatloss_wall_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_wall_4" value={formData.second_heatloss_wall_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_roof_1" value={formData.second_heatloss_roof_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_roof_2" value={formData.second_heatloss_roof_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_roof_3" value={formData.second_heatloss_roof_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="second_heatloss_roof_4" value={formData.second_heatloss_roof_4 || ''} onChange={handleChange} /></td>
              </tr>

              {/* Third Floor */}
              <tr>
                <td data-label="Third / Next Floor" ><span className='d-none d-md-block'>Third / Next Floor </span></td>
                <td data-label="Storey height (m)"><input type="text" className="custom-input border-2 border-md-0" name="third_storey_heigh" value={formData.third_storey_heigh || ''} onChange={handleChange} /></td>
                <td data-label="Total floor area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_total_floor_area" value={formData.third_total_floor_area || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_floor_1" value={formData.third_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_floor_2" value={formData.third_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_floor_3" value={formData.third_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_floor_4" value={formData.third_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Perimeter (m)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_perimeter" value={formData.third_heatloss_perimeter || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_wall_1" value={formData.third_heatloss_wall_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_wall_2" value={formData.third_heatloss_wall_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_wall_3" value={formData.third_heatloss_wall_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_wall_4" value={formData.third_heatloss_wall_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_roof_1" value={formData.third_heatloss_roof_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_roof_2" value={formData.third_heatloss_roof_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_roof_3" value={formData.third_heatloss_roof_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="third_heatloss_roof_4" value={formData.third_heatloss_roof_4 || ''} onChange={handleChange} /></td>
              </tr>

              {/* Basement */}
              <tr>
                <td data-label="Basement"> <span className='d-none d-md-block'>Basement</span></td>
                <td data-label="Storey height (m)"><input type="text" className="custom-input border-2 border-md-0" name="basement_storey_heigh" value={formData.basement_storey_heigh || ''} onChange={handleChange} /></td>
                <td data-label="Total floor area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_total_floor_area" value={formData.basement_total_floor_area || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_floor_1" value={formData.basement_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_floor_2" value={formData.basement_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_floor_3" value={formData.basement_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Floor 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_floor_4" value={formData.basement_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Perimeter (m)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_perimeter" value={formData.basement_heatloss_perimeter || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_wall_1" value={formData.basement_heatloss_wall_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_wall_2" value={formData.basement_heatloss_wall_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_wall_3" value={formData.basement_heatloss_wall_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Wall 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_wall_4" value={formData.basement_heatloss_wall_4 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 1 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_roof_1" value={formData.basement_heatloss_roof_1 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 2 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_roof_2" value={formData.basement_heatloss_roof_2 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 3 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_roof_3" value={formData.basement_heatloss_roof_3 || ''} onChange={handleChange} /></td>
                <td data-label="Heatloss Roof 4 Area (m2)"><input type="text" className="custom-input border-2 border-md-0" name="basement_heatloss_roof_4" value={formData.basement_heatloss_roof_4 || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
          {/* <table className="custom-table d-block d-md-none   d-none d-md-block">
            <thead>
              <tr>
                <th style={{width:'100px'}} ></th>
                <th style={{width:'70px'}}>Storey height (m)</th>
                <th style={{width:'100px'}}>Total floor area (m2)</th>
                <th style={{width:'100px'}}>Heatloss Floor 1 Area (m2)</th>
                <th style={{width:'100px'}}>Heatloss Floor 2 Area (m2)</th>
                <th style={{width:'100px'}}>Heatloss Floor 3 Area (m2)</th>
                <th style={{width:'100px'}}>Heatloss Floor 4 Area (m2)</th>
                
              </tr>
            </thead>
            <tbody>
             
              <tr>
                <td>Ground / Lowest Floor</td>
                <td><input type="text" className="custom-input" name="ground_storey_heigh" value={formData.ground_storey_heigh || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="ground_total_floor_area" value={formData.ground_total_floor_area || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="ground_heatloss_floor_1" value={formData.ground_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="ground_heatloss_floor_2" value={formData.ground_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="ground_heatloss_floor_3" value={formData.ground_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="ground_heatloss_floor_4" value={formData.ground_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                 </tr>

                <tr>
                <td>First / Next Floor</td>
                <td><input type="text" className="custom-input" name="first_storey_heigh" value={formData.first_storey_heigh || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="first_total_floor_area" value={formData.first_total_floor_area || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="first_heatloss_floor_1" value={formData.first_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="first_heatloss_floor_2" value={formData.first_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="first_heatloss_floor_3" value={formData.first_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="first_heatloss_floor_4" value={formData.first_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                </tr>

              
              <tr>
                <td>Second / Next Floor</td>
                <td><input type="text" className="custom-input" name="second_storey_heigh" value={formData.second_storey_heigh || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="second_total_floor_area" value={formData.second_total_floor_area || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="second_heatloss_floor_1" value={formData.second_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="second_heatloss_floor_2" value={formData.second_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="second_heatloss_floor_3" value={formData.second_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="second_heatloss_floor_4" value={formData.second_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                 </tr>

              
              <tr>
                <td>Third / Next Floor</td>
                <td><input type="text" className="custom-input" name="third_storey_heigh" value={formData.third_storey_heigh || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="third_total_floor_area" value={formData.third_total_floor_area || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="third_heatloss_floor_1" value={formData.third_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="third_heatloss_floor_2" value={formData.third_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="third_heatloss_floor_3" value={formData.third_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="third_heatloss_floor_4" value={formData.third_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                 </tr>

             
              <tr>
                <td>Basement</td>
                <td><input type="text" className="custom-input" name="basement_storey_heigh" value={formData.basement_storey_heigh || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="basement_total_floor_area" value={formData.basement_total_floor_area || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="basement_heatloss_floor_1" value={formData.basement_heatloss_floor_1 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="basement_heatloss_floor_2" value={formData.basement_heatloss_floor_2 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="basement_heatloss_floor_3" value={formData.basement_heatloss_floor_3 || ''} onChange={handleChange} /></td>
                <td><input type="text" className="custom-input" name="basement_heatloss_floor_4" value={formData.basement_heatloss_floor_4 || ''} onChange={handleChange} /></td>
                </tr>
            </tbody>
          </table> */}

        </div>

        <div className='container-fluid mt-3'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='bg-light heighfloor text-center p-2'>
                <label className="fontass">Living area (m2)</label>
                <input type="text" className="form-control" name="living_area" value={formData.living_area || ''} onChange={handleChange} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='bg-light heighfloor text-center p-1'>
                <label className="fontass">Room in roof area (m2)</label>
                <input type="text" className="form-control" name="room_in_roof_area" value={formData.room_in_roof_area || ''} onChange={handleChange} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='bg-light heighfloor text-center p-1'>
                <label className="fontass">Perimeter/total ground floor (P/A) ratio</label>
                <div className='d-flex mt-3'>
                  <input type="text" className="form-control" placeholder='F type#1' name="f_type_1" value={formData.f_type_1 || ''} onChange={handleChange} />
                  <input type="text" className="form-control" placeholder='F type#2' name="f_type_2" value={formData.f_type_2 || ''} onChange={handleChange} />
                  <input type="text" className="form-control" placeholder='F type#3' name="f_type_3" value={formData.f_type_3 || ''} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className='col-md-4 mt-3'>
              <div className='bg-light heighfloor text-center p-2'>
                <label className="fontass">% draughtstripping</label>
                <input type="text" className="form-control" name="draughts_tripping" value={formData.draughts_tripping || ''} onChange={handleChange} />
              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div className='bg-light heighfloor text-center p-1'>
                <label className="fontass">Lighting design known (yes/no)?</label>
                <input type="text" className="form-control" name="lighting_design" value={formData.lighting_design || ''} onChange={handleChange} />
              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div className='bg-light heighfloor text-center p-1'>
                <div className="mt-4">
                  <div className="table-responsive">
                    <table className="thermal-table table table-bordered align-middle">
                      <thead>
                        <tr>
                          <th>Thermal mass</th>
                          <th>Light</th>
                          <th>Med</th>
                          <th>Heavy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>External wall</td>
                          <td><input type="checkbox" name="external_wall_light" checked={formData.external_wall_light || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="external_wall_med" checked={formData.external_wall_med || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="external_wall_heavy" checked={formData.external_wall_heavy || false} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                          <td>Floor</td>
                          <td><input type="checkbox" name="floor_light" checked={formData.floor_light || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="floor_med" checked={formData.floor_med || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="floor_heavy" checked={formData.floor_heavy || false} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                          <td>Separating walls</td>
                          <td><input type="checkbox" name="separating_wall_light" checked={formData.separating_wall_light || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="separating_wall_med" checked={formData.separating_wall_med || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="separating_wall_heavy" checked={formData.separating_wall_heavy || false} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                          <td>Internal walls</td>
                          <td><input type="checkbox" name="internal_wall_light" checked={formData.internal_wall_light || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="internal_wall_med" checked={formData.internal_wall_med || false} onChange={handleChange} /></td>
                          <td><input type="checkbox" name="internal_wall_heavy" checked={formData.internal_wall_heavy || false} onChange={handleChange} /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3">
                    <label className="overall-mass-label fw-bold">Overall thermal mass</label>
                    <input type="text" className="form-control" name="overall_thermall_mass" value={formData.overall_thermall_mass || ''} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloorArea;




