import { useEffect, useState } from 'react';

const Age = ({ id, formData, handleChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    pre_1900: false,
    between_1900_and_1929: false,
    between_1930_and_1949: false,
    between_1950_and_1966: false,
    between_1967_and_1977: false,
    between_1978_and_1982: false,
    between_1983_and_1993: false,
    between_1994_and_1999: false,
    from_2000_onwards: false,
  });

  useEffect(() => {
    setCheckedItems({
      pre_1900: formData?.pre_1900 || false,
      between_1900_and_1929: formData?.between_1900_and_1929 || false,
      between_1930_and_1949: formData?.between_1930_and_1949 || false,
      between_1950_and_1966: formData?.between_1950_and_1966 || false,
      between_1967_and_1977: formData?.between_1967_and_1977 || false,
      between_1978_and_1982: formData?.between_1978_and_1982 || false,
      between_1983_and_1993: formData?.between_1983_and_1993 || false,
      between_1994_and_1999: formData?.between_1994_and_1999 || false,
      from_2000_onwards: formData?.from_2000_onwards || false,
    });
  }, [formData]);
  

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    const newCheckedItems = Object.keys(checkedItems).reduce((acc, key) => {
      acc[key] = key === name ? checked : false;
      return acc;
    }, {});

    setCheckedItems(newCheckedItems);

    handleChange({ target: { name, value: checked } });
  };

  const checkedLabels = Object.entries(checkedItems)
    .filter(([_, isChecked]) => isChecked)
    .map(([key]) => {
      switch (key) {
        case 'pre_1900':
          return 'pre 1900';
        case 'between_1900_and_1929':
          return '1900 - 1929';
        case 'between_1930_and_1949':
          return '1930 - 1949';
        case 'between_1950_and_1966':
          return '1950 - 1966';
        case 'between_1967_and_1977':
          return '1967 - 1977';
        case 'between_1978_and_1982':
          return '1978 - 1982';
        case 'between_1983_and_1993':
          return '1983 - 1993';
        case 'between_1994_and_1999':
          return '1994 - 1999';
        case 'from_2000_onwards':
          return '2000 - onwards';
        default:
          return '';
      }
    });

  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
      Age: Dwelling 
      </div>
      <div className="p-2">
        {Object.keys(checkedItems).map((key) => (
          <div key={key} className="d-flex">
            <div className="mx-2">
              <input
                className='disabled-input'
                type="checkbox"
                name={key}
                checked={checkedItems[key]}
                onChange={handleCheckboxChange}
              />
            </div>
            {checkedLabels.find((label) =>
              label.toLowerCase().includes(key.replace(/_/g, ' '))
            ) || key.replace(/_/g, ' ')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Age;
