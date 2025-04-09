import { useEffect, useState } from 'react';

const Age2 = ({ id, formData, handleChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    xxpre: false,
    xxbetween_1900_and_1929: false,
    xxbetween_1930_and_1949: false,
    xxbetween_1950_and_1966: false,
    xxbetween_1967_and_1977: false,
    xxbetween_1978_and_1982: false,
    xxbetween_1983_and_1993: false,
    xxbetween_1994_and_1999: false,
    xxfrom_2000_onwards: false,
  });

  useEffect(() => {
    setCheckedItems({
      xxpre: formData?.xxpre || false,
      xxbetween_1900_and_1929: formData?.xxbetween_1900_and_1929 || false,
      xxbetween_1930_and_1949: formData?.xxbetween_1930_and_1949 || false,
      xxbetween_1950_and_1966: formData?.xxbetween_1950_and_1966 || false,
      xxbetween_1967_and_1977: formData?.xxbetween_1967_and_1977 || false,
      xxbetween_1978_and_1982: formData?.xxbetween_1978_and_1982 || false,
      xxbetween_1983_and_1993: formData?.xxbetween_1983_and_1993 || false,
      xxbetween_1994_and_1999: formData?.xxbetween_1994_and_1999 || false,
      xxfrom_2000_onwards: formData?.xxfrom_2000_onwards || false,
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
        case 'xxpre':
          return 'pre 1900';
        case 'xxbetween_1900_and_1929':
          return '1900 - 1929';
        case 'xxbetween_1930_and_1949':
          return '1930 - 1949';
        case 'xxbetween_1950_and_1966':
          return '1950 - 1966';
        case 'xxbetween_1967_and_1977':
          return '1967 - 1977';
        case 'xxbetween_1978_and_1982':
          return '1978 - 1982';
        case 'xxbetween_1983_and_1993':
          return '1983 - 1993';
        case 'xxbetween_1994_and_1999':
          return '1994 - 1999';
        case 'xxfrom_2000_onwards':
          return '2000 - onwards';
        default:
          return '';
      }
    });

  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-2">
      Age: Extension 2
      </div>
      <div className="p-2">
        {Object.keys(checkedItems).map((key) => (
          <div key={key} className="d-flex">
            <div className="mx-2">
              <input
                type="checkbox"
                name={key}
                checked={checkedItems[key]}
                onChange={handleCheckboxChange}
              />
            </div>
            {checkedLabels.find((label) =>
              label.toLowerCase().includes(key.replace(/_/g, ' ').replace('x', ''))
            ) || key.replace(/_/g, ' ').replace('x', '')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Age2;
