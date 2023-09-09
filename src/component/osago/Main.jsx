import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Main() {

  const regions = {
		"01" : "tashkent_city",
		"10" : "tashkent_region",
		"20" : "syrdarya_region",
		"25" : "jizzakh_region",
		"30" : "samarkand_region",
		"40" : "fergana_region",
		"50" : "namangan_region",
		"60" : "andijan_region",
		"70" : "kashkadarya_region",
		"75" : "surkhandarya_region",
		"80" : "bukhara_region",
		"85" : "navoi_region",
		"90" : "khorezm_region",
		"95" : "republic_of_karakalpakstan"
	};

  const type = {
    "1" : "car",
    "6" : "Truck",
    "9" : "MiniBus",
    "15" : "MotorBike",
  }




      const [vehModel, setVehModel] = useState('');
      const [vehType, setVehType] = useState('');
      const [registrationRegion, setRegistrationRegion] = useState('');
      const [issueOfYear, setIssueOfYear] = useState('none');
      const [vehOwner, setVehOwner] = useState('');
      const [numberOFEngine, setNumberOFEngine] = useState('');

      const [vehice, setVehicel] = useState({})

      const [govNumber, setGovNumber] = useState('01D797EB');
      const [techpassportseria, setTechpassportseria] = useState("AAF");
      const [techPassportNumber, setTechPassportNumber] = useState("3132507");

      const [loading, setLoading] = useState(false)

      const [err, setError] = useState(false);
      const [errorMessage, setErrorMessage] = useState();

      console.log(govNumber, techpassportseria, techPassportNumber)


  function ShowPerson() {

      return (
        <div className='border p-2 mt-5'> 
          <div className='row'>

              <div className='input-form-me col-5 d-flex'>
          <label htmlFor="name">Vehicle Model</label>
          <input id='name' className='' type="text" value={vehModel} disabled />
              </div>

              <div className='input-form-me col-5 d-flex'>
          <label htmlFor="middle_name">Vehicle Type</label>
          <input id='middle_name' className='' type="text" value={vehType} disabled />
              </div>

              <div className='input-form-me col-5 d-flex'>
          <label htmlFor="last_name">Registration region</label>
          <input id='last_name' className='' type="text" value={registrationRegion} disabled />
              </div>

              <div className='input-form-me col-5 d-flex'>
          <label htmlFor="phone">Years of issue</label>
          <input id='last_name' className='' type="text" value={issueOfYear} />
              </div>

              <div className='input-form-me col-6 d-flex'>
          <label htmlFor="address">Car owner</label>
          <input id='address' className='' type="text" value={vehOwner} disabled />
              </div>


              <div className='input-form-me col-6 d-flex'>
          <label htmlFor="address">Engine of number</label>
          <input id='address' className='' type="text" value={numberOFEngine} disabled />
              </div>

              
       

          </div>

          <button className='btn btn-primary px-5 py-3   m-2'> <NavLink className="text-white" to="/accident/application"> Next </NavLink>  </button>
        </div>

      );
    }


const [openPerson, setOpenPerson] = useState(false);

const dateChange = (e) => {
  console.log(e.target.value);
}

const getAccident = () => {
  const request = {
    IPOLIS_USERNAME: "kafilSite",
    IPOLIS_PASSWORD: "4QFFw5tuF5",
    IPOLIS_ENDPOINT: "http://kafilapi.i-polis.uz/api"
  };

    async function getApplicantInfo() {
      try {
          setLoading(true);
        const response = await axios.get(`${request.IPOLIS_ENDPOINT}/eosgouz/provider/vehicle`, {
          auth: {
            username: request.IPOLIS_USERNAME,
            password: request.IPOLIS_PASSWORD
          },
          params: {
            govNumber: govNumber,
            techPassportSeria: techpassportseria,
            techPassportNumber: techPassportNumber
          }
        });
        setOpenPerson(true);
        setVehicel(response.data.operationResult.vehicle)
        setVehModel(response.data.operationResult.vehicle.modelName)
        setIssueOfYear(response.data.operationResult.vehicle.issueYear)
        setVehOwner(response.data.operationResult.vehicle.owner)
        setNumberOFEngine(response.data.operationResult.vehicle.engineNumber)
        setRegistrationRegion(regions[response.data.operationResult.vehicle.govNumber.toString().substr(0,2)])
        setVehType(type[response.data.operationResult.vehicle.vehicleTypeId])

        console.log(response.data.operationResult.vehicle);
          setLoading(false);
          setError(false)
      } catch (error) {
        setOpenPerson(false);
          setError(true)
          setLoading(false);
          console.log(error)
          setErrorMessage(error.message)
      //   throw new Error(error);
      }
    }

    getApplicantInfo();

  
};


const Loading = () => {
  return (
      <div className="loading">Loading…</div>
  )
}

const ShowError = () => {
  return (
      <div className='border my-5 py-5 text-center'>
      <h2> {errorMessage} </h2>
      </div>
  )
}


return (
  <div className="container">
    {/* call person data */}
    <div className="form">
      <div>
        <input type="text" placeholder='AAC' onChange={(e)=>{setTechpassportseria(e.target.value)}}  defaultValue={techpassportseria}/>
      </div>
      <div>
        <input type="text" placeholder='Passport number' onChange={(e)=>{setTechPassportNumber(e.target.value)}} defaultValue={techPassportNumber} />
      </div>
      <div>
        <input onChange={(e)=>{setGovNumber(e.target.value)}}  type="text" defaultValue={govNumber} />
      </div>

      <div className="others-options d-flex align-items-center">
        <div className="option-item">
          <button onClick={getAccident} className="btn btn-seracr searchbtn" type="button">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </div>
    </div>
    {/* call person data */}
    {loading && <Loading />}
    {openPerson && <ShowPerson />}
    {err && <ShowError />}
  </div>
);
}

export default Main;
