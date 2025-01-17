import React from 'react'

const ContactInfo = () => {
  return (
    <>
     
   
 <div className="modal fade" id="infoModal" tabIndex={-1} aria-labelledby="infoModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="infoModalLabel">User Information</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>





    </>
  )
}

export default ContactInfo
