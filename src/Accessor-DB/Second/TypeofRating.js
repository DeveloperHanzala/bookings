import { useState } from 'react';

const TypeofRating = () => {
  const [firstSectionChecked, setFirstSectionChecked] = useState({
    DetachedHouse: false,
    semiDetached: false,
  });

  const [secondSectionChecked, setSecondSectionChecked] = useState({
    endOfTerrace: false,
    midTerrace: false,
    groundFloorApartment: false,
    midFloorApartment: false,
    topFloorApartment: false,
    basementApartment: false,
    maisonette: false,
  });

  const handleFirstSectionChange = (e) => {
    const { name } = e.target;
    setFirstSectionChecked({
      DetachedHouse: name === "DetachedHouse",
      semiDetached: name === "semiDetached",
    });
  };

  const handleSecondSectionChange = (e) => {
    const { name } = e.target;
    setSecondSectionChecked({
      endOfTerrace: name === "endOfTerrace",
      midTerrace: name === "midTerrace",
      groundFloorApartment: name === "groundFloorApartment",
      midFloorApartment: name === "midFloorApartment",
      topFloorApartment: name === "topFloorApartment",
      basementApartment: name === "basementApartment",
      maisonette: name === "maisonette",
    });
  };

  const checkedLabels = (section) => {
    return Object.entries(section)
      .filter(([_, isChecked]) => isChecked)
      .map(([key]) => {
        switch (key) {
          case 'DetachedHouse':
            return 'new-final dwelling';
          case 'semiDetached':
            return 'existing dwelling';
          case 'endOfTerrace':
            return 'new: owner occupation';
          case 'midTerrace':
            return 'sale';
          case 'groundFloorApartment':
            return 'private letting';
          case 'midFloorApartment':
            return 'social housing letting';
          case 'topFloorApartment':
            return 'grant support';
          case 'basementApartment':
            return 'major renovation';
          case 'maisonette':
            return 'Other';
          default:
            return '';
        }
      });
  };

  return (
    <>
      {/* Section 1: Detached, semi-detached */}
      <div className="shadow-sm">
        <div className="bg-light rounded p-3">
          {checkedLabels(firstSectionChecked).length > 0
            ? checkedLabels(firstSectionChecked).join(', ')
            : 'Type of Rating'}
        </div>
        <div className="p-2">
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="DetachedHouse"
                checked={firstSectionChecked.DetachedHouse}
                onChange={handleFirstSectionChange}
              />
            </div>
            new-final dwelling
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="semiDetached"
                checked={firstSectionChecked.semiDetached}
                onChange={handleFirstSectionChange}
              />
            </div>
            existing dwelling
          </div>
        </div>
      </div>

      {/* Section 2: End of terrace, mid terrace, apartments */}
      <div className="shadow-sm mt-2">
        <div className="bg-light rounded p-3">
          {checkedLabels(secondSectionChecked).length > 0
            ? checkedLabels(secondSectionChecked).join(', ')
            : 'Purpose of Rating'}
        </div>
        <div className="p-2">
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="endOfTerrace"
                checked={secondSectionChecked.endOfTerrace}
                onChange={handleSecondSectionChange}
              />
            </div>
            new: owner occupation
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="midTerrace"
                checked={secondSectionChecked.midTerrace}
                onChange={handleSecondSectionChange}
              />
            </div>
            sale
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="groundFloorApartment"
                checked={secondSectionChecked.groundFloorApartment}
                onChange={handleSecondSectionChange}
              />
            </div>
            private letting
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="midFloorApartment"
                checked={secondSectionChecked.midFloorApartment}
                onChange={handleSecondSectionChange}
              />
            </div>
            social housing letting
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="topFloorApartment"
                checked={secondSectionChecked.topFloorApartment}
                onChange={handleSecondSectionChange}
              />
            </div>
            grant support
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="basementApartment"
                checked={secondSectionChecked.basementApartment}
                onChange={handleSecondSectionChange}
              />
            </div>
            major renovation
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name="maisonette"
                checked={secondSectionChecked.maisonette}
                onChange={handleSecondSectionChange}
              />
            </div>
            Other
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeofRating;
