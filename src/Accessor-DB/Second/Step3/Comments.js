import React from 'react'

const Comments = () => {
  return (
    <>

<div className="shadow-sm pb-4">
      <div className="bg-light rounded  p-3">
      Comments on heating system
      </div>
      <div className="row p-4 pb-0">
 
        <textarea rows={68} cols={50}
        style={{
            overflow: "hidden",
            width: "calc(50ch + 10px)",
            height: "auto",
            border:"none",
            resize: "none",
          }} ></textarea>
      


      </div>
    </div>

     
      
    </>
  )
}

export default Comments
