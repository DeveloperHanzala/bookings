import { useState } from 'react';

const Age = () => {
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
          return 'pre 1900';
        case 'semiDetached':
          return '1900 - 1929';
        case 'endOfTerrace':
          return '1930 - 1949';
        case 'midTerrace':
          return '1950 - 1966';
        case 'groundFloorApartment':
          return '1967 - 1977';
        case 'midFloorApartment':
          return '1978 - 1982';
        case 'topFloorApartment':
          return '1983 - 1993';
        case 'basementApartment':
          return '1994 - 1999';
        case 'maisonette':
          return '2000 - onwards';
        default:
          return '';
      }
    });

  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        {checkedLabels.length > 0 ? checkedLabels.join(', ') : ' Age: Extension'}
      </div>
      <div className="p-2">
      <div className="d-flex">
          <div className="mx-2">
            <input
              type="checkbox"
              name="DetachedHouse"
              checked={checkedItems.DetachedHouse}
              onChange={handleCheckboxChange}
            />
          </div>
          pre 1900
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
          1900 - 1929
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
          1930 - 1949
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
          1950 - 1966
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
          1967 - 1977
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
          1978 - 1982
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
          1983 - 1993
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
          1994 - 1999
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
          2000 - onwards
        </div>
      </div>
    </div>
  );
};

export default Age;
