import React from 'react';

const Opening = ({ formData, handleChange }) => {
  const roomFields = [
    "room_1", "room_2", "room_3", "room_4", "room_5"
  ];

  return (
    <>
      <div className='container shadow-sm p-4 custom-table-container'>
        <div className='bg-light text-center p-4'>
          <span className='fw-bold fs-4'>OPENING DATA</span>
        </div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Room</th>
              <th>Opening</th>
              <th>Opening Dimensions (W x H or m²)</th>
              <th>Glazing Details</th>
              <th>Frame</th>
              <th>Gap</th>
              <th>Over Shading</th>
              <th>Direction</th>
              <th>Wall / Roof Type</th>
              <th># of Openable Windows / Doors / Attic Hatches?</th>
              <th># of Windows / Doors / Hatches with Draughtstripping</th>
            </tr>
          </thead>
          <tbody>
            {roomFields.map((room, index) => (
              <tr key={index}>
                <td>{`Room ${index + 1}`}</td>
                <td><input type="text" name={`${room}_opening`} value={formData[`${room}_opening`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_opening_dimensions`} value={formData[`${room}_opening_dimensions`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_glazing_details`} value={formData[`${room}_glazing_details`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_frame`} value={formData[`${room}_frame`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_gap`} value={formData[`${room}_gap`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_over_shading`} value={formData[`${room}_over_shading`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_direction`} value={formData[`${room}_direction`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_wall_roof_type`} value={formData[`${room}_wall_roof_type`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_openable_windows_doors`} value={formData[`${room}_openable_windows_doors`]} onChange={handleChange} className="custom-input" /></td>
                <td><input type="text" name={`${room}_windows_doors`} value={formData[`${room}_windows_doors`]} onChange={handleChange} className="custom-input" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Opening;
