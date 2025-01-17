import { useState } from 'react';

const HouseTypes = () => {
  const [checkedItems, setCheckedItems] = useState({
    DetachedHouse:false,
    semiDetached: false,
    endOfTerrace: false,
    midTerrace: false,
    groundFloorApartment: false,
    midFloorApartment: false,
    topFloorApartment: false,
    basementApartment: false,
    maisonette: false,
  });

  const handleCheckboxChange = (e) => {
    const { name } = e.target;

    // Set the selected checkbox to true and others to false
    setCheckedItems((prevState) => {
      const newCheckedItems = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === name;
        return acc;
      }, {});
      return newCheckedItems;
    });
  };

  const checkedLabels = Object.entries(checkedItems)
    .filter(([_, isChecked]) => isChecked)
    .map(([key]) => {
      switch (key) {
        case 'DetachedHouse':
          return 'Detached House';
        case 'semiDetached':
          return 'semi detached house';
        case 'endOfTerrace':
          return 'end of terrace';
        case 'midTerrace':
          return 'mid terrace';
        case 'groundFloorApartment':
          return 'ground floor apartment';
        case 'midFloorApartment':
          return 'mid floor apartment';
        case 'topFloorApartment':
          return 'top-floor apartment';
        case 'basementApartment':
          return 'basement apartment';
        case 'maisonette':
          return 'maisonette';
        default:
          return '';
      }
    });

  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded  p-3">
        {checkedLabels.length > 0 ? checkedLabels.join(', ') : 'No house type selected'}
      </div>
      <div className="p-2 pb-4">
      <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="DetachedHouse"
              checked={checkedItems.DetachedHouse}
              onChange={handleCheckboxChange}
            />
          </div>
          Detached House
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="semiDetached"
              checked={checkedItems.semiDetached}
              onChange={handleCheckboxChange}
            />
          </div>
          semi detached house
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="endOfTerrace"
              checked={checkedItems.endOfTerrace}
              onChange={handleCheckboxChange}
            />
          </div>
          end of terrace
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="midTerrace"
              checked={checkedItems.midTerrace}
              onChange={handleCheckboxChange}
            />
          </div>
          mid terrace
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="groundFloorApartment"
              checked={checkedItems.groundFloorApartment}
              onChange={handleCheckboxChange}
            />
          </div>
          ground floor apartment
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="midFloorApartment"
              checked={checkedItems.midFloorApartment}
              onChange={handleCheckboxChange}
            />
          </div>
          mid floor apartment
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="topFloorApartment"
              checked={checkedItems.topFloorApartment}
              onChange={handleCheckboxChange}
            />
          </div>
          top-floor apartment
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="basementApartment"
              checked={checkedItems.basementApartment}
              onChange={handleCheckboxChange}
            />
          </div>
          basement apartment
        </div>
        <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="maisonette"
              checked={checkedItems.maisonette}
              onChange={handleCheckboxChange}
            />
          </div>
          maisonette
        </div>
      </div>
    </div>
  );
};

export default HouseTypes;
