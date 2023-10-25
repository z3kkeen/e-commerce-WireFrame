import React from 'react'

export default function Payment() {
  return (
    <div className="paymentDiv">
      <div className="divHeader">
            <h1>Payment Method</h1>
            <div className="flatLine"></div>
      </div>
      <div className="methodsDisplay">
            <div className="credInputs">
              <input type="text" className="longInput"/>
              <div className="shortInputs">
                <input type="text" />
                <input type="text" />
              </div>

              <div className="shortInputs">
                <input type="text" />
                <input type="text" />
              </div>
            </div>
      </div>
    </div>
  )
}
