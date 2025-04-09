import React from 'react';

const Roomdata = ({ formData, handleChange }) => {
  return (
    <>
      <div className='container shadow-sm p-md-5 p-0 custom-table-container'>
        <div className='bg-light text-center p-4'>
          <span className='fw-bold fs-4'> ROOM DATA</span>
        </div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Chimney or Flueless</th>
              <th>Open Flues</th>
              <th>Fans / vents</th>
              <th>Rads with or w/o TRVs?</th>
              <th>Number of fixed lights</th>
              <th>What type of fixed lights? Use more than 1 row if needed</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((roomNumber) => (
              <tr key={roomNumber}>
                <td data-label="Chimney or Flueless">
                  <input
                    type="number"
                    className="custom-input"
                    name={`room_${roomNumber}_chimney_flueless`}
                    value={formData[`room_${roomNumber}_chimney_flueless`] || ''}
                    onChange={handleChange}
                  />
                </td>
                <td data-label="Open Flues">
                  <input
                    type="number"
                    className="custom-input"
                    name={`room_${roomNumber}_open_flues`}
                    value={formData[`room_${roomNumber}_open_flues`] || ''}
                    onChange={handleChange}
                  />
                </td>
                <td data-label="Fans / vents">
                  <input
                    type="number"
                    className="custom-input"
                    name={`room_${roomNumber}_fans_vents`}
                    value={formData[`room_${roomNumber}_fans_vents`] || ''}
                    onChange={handleChange}
                  />
                </td>
                <td data-label="Rads with or w/o TRVs?">
                  <input
                    type="number"
                    className="custom-input"
                    name={`room_${roomNumber}_rads_with_or_trvs`}
                    value={formData[`room_${roomNumber}_rads_with_or_trvs`] || ''}
                    onChange={handleChange}
                  />
                </td>
                <td data-label="Number of fixed lights">
                  <input
                    type="number"
                    className="custom-input"
                    name={`room_${roomNumber}_number_of_fixed_lights`}
                    value={formData[`room_${roomNumber}_number_of_fixed_lights`] || ''}
                    onChange={handleChange}
                  />
                </td>
                <td data-label="What type of fixed lights? Use more than 1 row if needed">
                  <input
                    type="number"
                    className="custom-input"
                    name={`room_${roomNumber}_type_of_fixed_light`}
                    value={formData[`room_${roomNumber}_type_of_fixed_light`] || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Roomdata;
