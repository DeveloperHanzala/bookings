import { useEffect, useState } from 'react';

const TypeofRating = ({ formData, handleChange }) => {
  const [firstSectionChecked, setFirstSectionChecked] = useState({
    new_final_dwelling: false,
    existing_dwelling: false,
  });

  const [secondSectionChecked, setSecondSectionChecked] = useState({
    new_owner_occupation: false,
    sale: false,
    private_letting: false,
    social_housing_letting: false,
    grant_support: false,
    major_renovation: false,
    purpose_of_rating_other: false,
  });

  useEffect(() => {
    setFirstSectionChecked({
      new_final_dwelling: formData.new_final_dwelling,
      existing_dwelling: formData.existing_dwelling,
    });

    setSecondSectionChecked({
      new_owner_occupation: formData.new_owner_occupation,
      sale: formData.sale,
      private_letting: formData.private_letting,
      social_housing_letting: formData.social_housing_letting,
      grant_support: formData.grant_support,
      major_renovation: formData.major_renovation,
      purpose_of_rating_other: formData.purpose_of_rating_other,
    });
  }, [formData]);

  const handleFirstSectionChange = (e) => {
    const { name, checked } = e.target;
    const updatedState = {
      new_final_dwelling: name === 'new_final_dwelling' ? checked : false,
      existing_dwelling: name === 'existing_dwelling' ? checked : false,
    };

    setFirstSectionChecked(updatedState);
    handleChange({ target: { name, value: checked } });
  };

  const handleSecondSectionChange = (e) => {
    const { name, checked } = e.target;
    const updatedState = {
      ...secondSectionChecked,
      [name]: checked,
    };

    setSecondSectionChecked(updatedState);
    handleChange({ target: { name, value: checked } });
  };

  const labels = {
    new_final_dwelling: 'New Final Dwelling',
    existing_dwelling: 'Existing Dwelling',
    new_owner_occupation: 'New: Owner Occupation',
    sale: 'Sale',
    private_letting: 'Private Letting',
    social_housing_letting: 'Social Housing Letting',
    grant_support: 'Grant Support',
    major_renovation: 'Major Renovation',
    purpose_of_rating_other: 'Other',
  };

  const checkedLabels = (section) => {
    return Object.entries(section)
      .filter(([_, isChecked]) => isChecked)
      .map(([key]) => labels[key]);
  };

  return (
    <>
      <div className="shadow-sm">
        <div className="bg-light rounded p-3">
          {checkedLabels(firstSectionChecked).length > 0
            ? checkedLabels(firstSectionChecked).join(', ')
            : 'Type of Rating'}
        </div>
        <div className="p-2">
          {Object.keys(firstSectionChecked).map((key) => (
            <div className="d-flex" key={key}>
              <div className="mx-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={firstSectionChecked[key]}
                  onChange={handleFirstSectionChange}
                />
              </div>
              {labels[key]}
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-sm mt-2">
        <div className="bg-light rounded p-3">
          {checkedLabels(secondSectionChecked).length > 0
            ? checkedLabels(secondSectionChecked).join(', ')
            : 'Purpose of Rating'}
        </div>
        <div className="p-2">
          {Object.keys(secondSectionChecked).map((key) => (
            <div className="d-flex" key={key}>
              <div className="mx-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={secondSectionChecked[key]}
                  onChange={handleSecondSectionChange}
                />
              </div>
              {labels[key]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TypeofRating;
