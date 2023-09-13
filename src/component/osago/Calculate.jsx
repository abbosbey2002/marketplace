import React, { useState } from 'react';
import Resident from './calculate/Resident';
import Noresident from './calculate/Noresident';

function Calculate() {
  const [personResident, setPersonResident] = useState('');

  const [sumInsured, setSumInsured] = useState(40000000)
  const [totalAmount, setTotalAmount] = useState(0)

  const calculatedAmount = (typeOfPerson=0, vehicleType=0, drivers=0, period=0, discount=0, startDate=0, region, cases=0)=>{
    console.log(typeOfPerson, vehicleType, drivers, period, discount, startDate, region, cases);
      }

  return (
    <div className='container'>

   
    <div className='row'>
  
  
    <div className='col-7 border my-5 py-5'>
      <div className="col-lg-6 col-sm-6">
        <h2>Choose. You are - ? </h2>
        <div className="form-group">
          <div className="form-check">
            <input
              onChange={() => setPersonResident('1')}
              className="form-check-input"
              name='resident'
              value='1'
              type="radio"
              id="resident"
            />
            <label className="form-check-label" htmlFor="resident">
              Resident
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={() => setPersonResident('1.4')}
              className="form-check-input"
              name='resident'
              value='1.4'
              type="radio"
              id="noresident"
            />
            <label className="form-check-label" htmlFor="noresident">
              No resident
            </label>
          </div>
        </div>
      </div>
      {personResident === '1' ? <Resident calculatedAmount = {calculatedAmount} /> : <Noresident />}
    </div>
    <div className="col-4 m-5 border rounded p-3">

      <div className='border p-4'>
			<h4 className="mb-3 fw-bold">Calculation results:</h4>
			<div className="">
				<div className="d-flex flex-column mb-3">
					<span className="fw-light">Insurance premium:</span>
					<p><span className="fs-4 fw-normal" id="calculatedAmount">UZS&nbsp;{totalAmount}</span></p>
				</div>
				<div className="d-flex flex-column">
					<span className="fw-light">Insurance amount:</span>
					<p><span className="fs-4 fw-normal" id="sumInsured">UZS&nbsp;{sumInsured}</span></p>
					{/* <p hidden=""><span id="calculatedAmount">0</span></p> */}
				</div>
        </div>
			</div>
		</div>
    </div>
    </div>
  );
}

export default Calculate;