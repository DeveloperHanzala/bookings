import React from 'react';

const HouseTypes = ({ id, formData, handleChange }) => {
  const checkedLabels = Object.entries(formData)
    .filter(([_, isChecked]) => isChecked)
    .map(([key]) => {
      switch (key) {
        case 'DetachedHouse':
          return 'Detached House';
        case 'semiDetached':
          return 'Semi Detached House';
        case 'endOfTerrace':
          return 'End of Terrace';
        case 'midTerrace':
          return 'Mid Terrace';
        case 'groundFloorApartment':
          return 'Ground Floor Apartment';
        case 'midFloorApartment':
          return 'Mid Floor Apartment';
        case 'topFloorApartment':
          return 'Top-Floor Apartment';
        case 'basementApartment':
          return 'Basement Apartment';
        case 'maisonette':
          return 'Maisonette';
        default:
          return '';
      }
    });

  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
      Dwelling Type 
      </div>
      <div className="p-2 pb-4">
        {['DetachedHouse', 'semiDetached', 'endOfTerrace', 'midTerrace', 'groundFloorApartment', 'midFloorApartment', 'topFloorApartment', 'basementApartment', 'maisonette'].map((houseType) => (
          <div className="d-flex" key={houseType}>
            <div className="mx-2">
              <input
              className='disabled-input'
                type="checkbox"
                name={houseType}
                checked={formData[houseType]}
                readOnly

                onChange={() => {}} // Trigger parent's handleChange to update state and send the API request
              />
            </div>
            {houseType.replace(/([A-Z])/g, ' $1').trim()} {/* Converts camelCase to readable string */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseTypes;
