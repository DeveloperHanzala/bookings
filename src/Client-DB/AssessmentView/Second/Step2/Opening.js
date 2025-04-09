import React, { useState } from 'react';

const Opening = ({ formData, handleChange }) => {
  const [numberOfRooms, setNumberOfRooms] = useState(5);
  
  const addRoom = () => {
    if (numberOfRooms < 50) {
      setNumberOfRooms(prev => prev + 1);
    }
  };

  const rooms = Array.from({ length: numberOfRooms }, (_, i) => i + 1);

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
            {rooms.map((roomNumber) => {
              const room = `room_${roomNumber}`;
              return (
                <tr key={roomNumber}>
                  <td data-label="Room">{`Room ${roomNumber}`}</td>
                  <td data-label="Opening">
                    <input
                      type="number"
                      name={`${room}_opening`}
                      value={formData[`${room}_opening`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Opening Dimensions (W x H or m²)">
                    <input
                      type="number"
                      name={`${room}_opening_dimensions`}
                      value={formData[`${room}_opening_dimensions`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Glazing Details">
                    <input
                      type="number"
                      name={`${room}_glazing_details`}
                      value={formData[`${room}_glazing_details`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Frame">
                    <input
                      type="number"
                      name={`${room}_frame`}
                      value={formData[`${room}_frame`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Gap">
                    <input
                      type="number"
                      name={`${room}_gap`}
                      value={formData[`${room}_gap`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Over Shading">
                    <input
                      type="number"
                      name={`${room}_over_shading`}
                      value={formData[`${room}_over_shading`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Direction">
                    <input
                      type="number"
                      name={`${room}_direction`}
                      value={formData[`${room}_direction`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="Wall / Roof Type">
                    <input
                      type="number"
                      name={`${room}_wall_roof_type`}
                      value={formData[`${room}_wall_roof_type`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="# of Openable Windows / Doors / Attic Hatches?">
                    <input
                      type="number"
                      name={`${room}_openable_windows_doors`}
                      value={formData[`${room}_openable_windows_doors`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                  <td data-label="# of Windows / Doors / Hatches with Draughtstripping">
                    <input
                      type="number"
                      name={`${room}_windows_doors`}
                      value={formData[`${room}_windows_doors`] || ''}
                      onChange={handleChange}
                      className="custom-input disabled-input border-2 border-md-0"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end mt-3">
          <button 
            onClick={addRoom}
            className="btn button3"
            disabled={numberOfRooms >= 50}
          >
            Add Row
          </button>
        </div>
      </div>
    </>
  );
};

export default Opening;