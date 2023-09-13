import React, { useState } from 'react';
import Calculate from '../Calculate';

function Noresident({ calculatedAmount }) {
  const [resident, setResident] = useState({});
  const [typeOfPerson, setTypeOfPerson] = useState('0');
  const [vehicleType, setVehicleType] = useState('0');
  const [drivers, setDrivers] = useState('0');
  const [period, setPeriod] = useState('0');
  const [discount, setDiscount] = useState('0');
  const [startDate, setStartDate] = useState('');

  const handleCalculate = () => {
    setResident({
      typeOfPerson,
      vehicleType,
      drivers,
      period,
      discount,
      startDate
    });
    calculatedAmount(typeOfPerson, vehicleType, drivers, period, discount, startDate);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <div className="col-lg-6 col-sm-6 my-3">
        <h2>Choose. You are - ?</h2>
        <div className="form-group">
          <div className="form-check">
            <input
              onChange={() => setTypeOfPerson('1')}
              className="form-check-input"
              name="type_of_person"
              value="1"
              type="radio"
              id="type_of_person_1"
              checked={typeOfPerson === '1'}
            />
            <label className="form-check-label" htmlFor="resident">
              Individual
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={() => setTypeOfPerson('1.4')}
              className="form-check-input"
              name="type_of_person"
              value="1.4"
              type="radio"
              id="type_of_person_2"
              checked={typeOfPerson === '1.4'}
            />
            <label className="form-check-label" htmlFor="noresident">
              Entity
            </label>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 my-3">
        <h2>Select the number of drivers - ?</h2>
        <div className="form-group">
          <div className="form-check">
            <input
              onChange={() => setDrivers('1')}
              className="form-check-input"
              name="drivers"
              value="1"
              type="radio"
              id="drivers_1"
              checked={drivers === '1'}
            />
            <label className="form-check-label" htmlFor="resident">
              Limited to 5 people
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={() => setDrivers('3')}
              className="form-check-input"
              name="drivers"
              value="3"
              type="radio"
              id="drivers_2"
              checked={drivers === '3'}
            />
            <label className="form-check-label" htmlFor="noresident">
              Not limited
            </label>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 my-3">
        <h2>Select vehicle type - ?</h2>
        <div className="form-group m-2">
          <select
            onChange={(e) => setVehicleType(e.target.value)}
            className="form-select"
            name="vehicle_type"
            id="vehicle_type"
            value={vehicleType}
          >
            <option disabled value="0">
              Choose
            </option>
            <option value="0.1">Passenger vehicles</option>
            <option value="0.12">Trucks</option>
            <option value="0.12">Buses and minibuses</option>
            <option value="0.04">
              Motorcycles and scooters, trolleybuses, trams, tractors, self-propelled road-building and other machines
            </option>
          </select>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 my-3">
        <h2>Select insurance period - ?</h2>
        <div className="form-group m-2">
          <select
            onChange={(e) => setPeriod(e.target.value)}
            className="form-select"
            name="period"
            id="period"
            value={period}
          >
            <option disabled value="0">
              Choose
            </option>
            <option value="1">For 1 year</option>
            <option value="0.4">For 2 months</option>
            <option value="0.2">main.insurance.travel_to_the_place_of_registration_up_to_fifteen_days</option>
          </select>
        </div>
      </div>

      <div className="col-lg-6 col-sm-6 my-3">
        <h2>Select the appropriate item to receive a discount - ?</h2>
        <div className="form-group m-2">
          <select
            onChange={(e) => setDiscount(e.target.value)}
            className="form-select"
            name="discount"
            id="discount"
            value={discount}
          >
            <option disabled value="0">
              Choose
            </option>
            <option value="1">Without discount</option>
            <option value="1">Participants or partisans of the war of 1941-1945 or persons equivalent to them</option>
            <option value="1">Veterans of the labor front of the war period of 1941-1945</option>
            <option value="1">Former young prisoners of concentration camps</option>
            <option value="1">Being wounded, concussed or injured in the performance of military service or being at the front</option>
            <option value="1">Military servicemen and conscripts called to training and inspection camps, victims of the accident in the Republic of Afghanistan and Chernobyl NPP</option>
            <option value="1">Pensioner</option>
            <option value="1">Invalid</option>
          </select>
        </div>
      </div>

      <div className="col-lg-6 col-sm-6 my-3">
        <h2>Select the start date - ?</h2>
        <div className="form-group m-2">
          <input
            onChange={(e) => setStartDate(e.target.value)}
            id="startDate"
            name="startDate"
            className="form-control"
            type="date"
            min={today}
            value={startDate}
          />
        </div>
      </div>

      <button onClick={handleCalculate}>Calculate</button>
    </>
  );
}

export default Noresident;