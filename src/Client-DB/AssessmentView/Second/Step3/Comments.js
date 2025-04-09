import React from 'react';

const Comments = ({ formData, handleChange }) => {
  return (
    <>
      <div className="shadow-sm pb-4">
        <div className="bg-light rounded p-3">
          Comments on heating system
        </div>
        <div className="row p-4 pb-0">
          <textarea
            className='disabled-input'
            rows={68}
            cols={50}
            name="comments_on_heating_system" // Ensuring this matches the key in formData
            value={formData.comments_on_heating_system || ''} // Binding the textarea value to formData
            onChange={handleChange} // Handling changes through handleChange
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
    </>
  );
};

export default Comments;
