import { useEffect, useState } from 'react';

const Age1 = ({ id, formData, handleChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    xpre_1900: false,
    xbetween_1900_and_1929: false,
    xbetween_1930_and_1949: false,
    xbetween_1950_and_1966: false,
    xbetween_1967_and_1977: false,
    xbetween_1978_and_1982: false,
    xbetween_1983_and_1993: false,
    xbetween_1994_and_1999: false,
    xfrom_2000_onwards: false,
  });

  useEffect(() => {
    setCheckedItems({
      xpre_1900: formData?.xpre_1900 || false,
      xbetween_1900_and_1929: formData?.xbetween_1900_and_1929 || false,
      xbetween_1930_and_1949: formData?.xbetween_1930_and_1949 || false,
      xbetween_1950_and_1966: formData?.xbetween_1950_and_1966 || false,
      xbetween_1967_and_1977: formData?.xbetween_1967_and_1977 || false,
      xbetween_1978_and_1982: formData?.xbetween_1978_and_1982 || false,
      xbetween_1983_and_1993: formData?.xbetween_1983_and_1993 || false,
      xbetween_1994_and_1999: formData?.xbetween_1994_and_1999 || false,
      xfrom_2000_onwards: formData?.xfrom_2000_onwards || false,
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
        case 'xpre_1900':
          return 'pre 1900';
        case 'xbetween_1900_and_1929':
          return '1900 - 1929';
        case 'xbetween_1930_and_1949':
          return '1930 - 1949';
        case 'xbetween_1950_and_1966':
          return '1950 - 1966';
        case 'xbetween_1967_and_1977':
          return '1967 - 1977';
        case 'xbetween_1978_and_1982':
          return '1978 - 1982';
        case 'xbetween_1983_and_1993':
          return '1983 - 1993';
        case 'xbetween_1994_and_1999':
          return '1994 - 1999';
        case 'xfrom_2000_onwards':
          return '2000 - onwards';
        default:
          return '';
      }
    });

  return (
    <div className="shadow-sm pb-5">
      <div className="bg-light rounded p-3">
        {checkedLabels.length > 0 ? checkedLabels.join(', ') : 'Age: Extension'}
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

export default Age1;
