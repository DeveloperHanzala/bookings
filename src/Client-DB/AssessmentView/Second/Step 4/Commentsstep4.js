import React from 'react';

const Commentsstep4 = ({ formData, handleChange }) => {
  return (
    <div className="shadow-sm pb-4">
      <div className="bg-light rounded p-3">
        Comments on water heating system
      </div>
      <div className="row p-4 pb-0">
        <textarea
          className='disabled-input'
          name="Comments_on_water_heating"
          value={formData.Comments_on_water_heating || ""}
          onChange={handleChange}
          rows={20}
          cols={50}
          maxLength={55}
          style={{
            overflow: "hidden",
            width: "calc(50ch + 10px)",
            height: "auto",
            border: "none",
            resize: "none",
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Commentsstep4;
