import React from 'react';

const CommentsStep5 = ({ formData, id, handleChange }) => {
  return (
    <>
      <h6 className="fw-bold">
        Any other comments or details on assessment including items observed which affect the rating but not shown elsewhere on survey form/sketches. *
      </h6>
      <div className="shadow-sm pb-3 mt-3">
        <div className="bg-light rounded p-3">
          Any other comments or details on assessment including items observed which affect the rating but not shown elsewhere on survey form/sketches.
        </div>
        <div className="row p-4 pb-0">
          <textarea
            className='disabled-input'
            name="group_heating_any_other_comment" // This should match your backend field name
            rows={2}
            value={formData.group_heating_any_other_comment || ''}
            onChange={handleChange}
            style={{
              overflow: "hidden",
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

export default CommentsStep5;
