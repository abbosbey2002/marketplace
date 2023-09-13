import React from 'react'
import {useState} from 'react';

function Resident({calculatedAmount}) {

    const [resident, setResident] = useState({});
    const [typeOfPerson, setTypeOfPerson] = useState(0);
    const [vehicleType, setVehicleType] = useState(0);
    const [drivers, setDrivers] = useState(0);
    const [period, SetPeriod] = useState();
    const [discount, SetDiscount] = useState();
    const [startDate, setStartDate] = useState();
    const [region, setRegion] = useState();
    const [cases, setCases] = useState();
    const type = true

    const Calculate = (e) => {
        setStartDate(e.target.value)
        calculatedAmount(typeOfPerson, vehicleType, drivers, period, discount, startDate, region, cases)
        console.log(region)

    }

    const today = new Date().toISOString().split('T')[0];


    return (
        <>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Choose. You are - ?
                </h2>
                <div className="form-group">
                    <div className="form-check">
                        <input onChange={
                                () => setTypeOfPerson('1')
                            }
                            className="form-check-input"
                            name='type_of_person'
                            value='1'
                            type="radio"
                            id="type_of_person_1"/>
                        <label className="form-check-label" htmlFor="resident">
                            Individual
                        </label>
                    </div>
                    <div className="form-check">
                        <input onChange={
                                () => setTypeOfPerson('1.4')
                            }
                            className="form-check-input"
                            name='type_of_person'
                            value='1.4'
                            type="radio"
                            id="type_of_person_2"/>
                        <label className="form-check-label" htmlFor="noresident">
                            Entity
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select the number of drivers - ?
                </h2>
                <div className="form-group">
                    <div className="form-check">
                        <input onChange={
                                () => setDrivers('1')
                            }
                            className="form-check-input"
                            name='drivers'
                            value='1'
                            type="radio"
                            id="drivers_1"/>
                        <label className="form-check-label" htmlFor="resident">
                            Limited to 5 people
                        </label>
                    </div>
                    <div className="form-check">
                        <input onChange={
                                () => setDrivers('3')
                            }
                            className="form-check-input"
                            name='drivers'
                            value='3'
                            type="radio"
                            id="drivers_2"/>
                        <label className="form-check-label" htmlFor="noresident">
                            Not limited
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select vehicle type - ?
                </h2>
                <div className="form-group m-2">

                    <select onChange={
                            e => setVehicleType(e.target.value)
                        }
                        className='form-select'
                        name="vehicle_type"
                        id="vehicle_type">
                        <option selected="" disabled="">Choose</option>
                        <option value="0.1">
                            Passenger vehicles
                        </option>
                        <option value="0.12">
                            Trucks
                        </option>
                        <option value="0.12">
                            Buses and minibuses
                        </option>
                        <option value="0.04">
                            Motorcycles and scooters, trolleybuses, trams, tractors, self-propelled road-building and other machines
                        </option>
                    </select>

                </div>
            </div>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select  insurence period - ?
                </h2>
                <div className="form-group m-2">

                    <select onChange={
                            e => SetPeriod(e.target.value)
                        }
                        className='form-select'
                        name="period"
                        id="period">
                        <option selected="" disabled="">Choose</option>
                        <option value="1">For 1 year</option>
                        <option value="0.4">For 2 months</option>
                        <option value="0.2">main.insurance.travel_to_the_place_of_registration_up_to_fifteen_days</option>
                    </select>

                </div>
            </div>

            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select the appropriate item to receive a discount - ?</h2>

                <div className="form-group m-2">

                    <select onChange={
                            e => SetDiscount(e.target.value)
                        }
                        className='form-select'
                        name="discount"
                        id="discount">
                        <option selected="" disabled="">Choose</option>
                        <option value="1 ">
                            Without discount
                        </option>
                        <option value="1 ">
                            Participants or partisans of the war of 1941-1945 or persons equivalent to them
                        </option>
                        <option value="1 ">
                            Veterans of the labor front of the war period of 1941-1945
                        </option>
                        <option value="1 ">
                            Former young prisoners of concentration camps
                        </option>
                        <option value="1 ">
                            Being wounded, concussed or injured in the performance of military service or being at the front
                        </option>
                        <option value="1 ">
                            Military servicemen and conscripts called to training and inspection camps, victims of the accident in the Republic of Afghanistan and Chernobyl NPP
                        </option>
                        <option value="1 ">
                            Pensioner
                        </option>
                        <option value="1 ">
                            Invalid
                        </option>
                    </select>

                </div>
            </div>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select the presence of cases - ?</h2>

                <div className="form-group m-2">

                    <select required="" className="form-select" aria-label="" name="cases" id="cases"
                        onChange={
                            e => setCases(e.target.value)
                    }>
                        <option selected="" disabled="">Choose</option>
                        <option value="2">
                            One insurance event that occurred during the period of validity of the previous compulsory insurance contract
                        </option>
                        <option value="2.5">
                            Two insurance events that occurred during the period of validity of the previous compulsory insurance contract
                        </option>
                        <option value="3">
                            Three or more insurance events that occurred during the period of validity of the previous compulsory insurance contract
                        </option>
                        <option value="1">
                            For the first time, as well as if there are no insured events during the period of validity of the previous compulsory insurance contract
                        </option>
                    </select>

                </div>
            </div>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select the region of registration of the vehicle - ?</h2>

                <div className="form-group m-2">

                    <select className="form-select" aria-label="" name="region" id="region"
                        onChange={
                            e => setRegion(e.target.value)
                    }>
                        <option selected disabled="">Choose</option>
                        <option value="1.4">
                            Tashkent city and Tashkent region
                        </option>
                        <option value="1">
                            Other regions
                        </option>
                    </select>

                </div>
            </div>
            <div className="col-lg-6 col-sm-6 my-3">
                <h2>Select the appropriate item to receive a discount - ?</h2>

                <div className="form-group m-2">
                    <input onChange={Calculate}
                        id='startDate'
                        name='startDate'
                        className='form-control'
                        type='date'
                        min={today}/>
                </div>
            </div>

        </>
    )
}

export default Resident
