import React, { useEffect, useState } from 'react';
import "./main.css";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import InsuredPerson from './InsuredPerson';




function Main() {

    const [name, setName] = useState('');
        const [lastName, setLastName] = useState('');
        const [middleName, setMiddleName] = useState('');
        const [adress, setAddress] = useState('');
        const [person, setPerson] = useState({})
        const [insured, setInsured] = useState({})

        const [birthDate, setBirthdate] = useState('2002-04-14');
        const [seria, setSeria] = useState("AC");
        const [passportNumber, setPassport] = useState("1110802");

        const [loading, setLoading] = useState(false)

        const [err, setError] = useState(false);
        const [errorMessage, setErrorMessage] = useState();

        console.log(birthDate, seria, passportNumber)

        const [insuredState, setInsuredState] = useState(false);

         const changeInsured = (e) => {
            console.log(e.target.checked)
            setInsuredState( e.target.checked)
        };

        const request = {
          IPOLIS_USERNAME: "kafilSite",
          IPOLIS_PASSWORD: "4QFFw5tuF5",
          IPOLIS_ENDPOINT: "http://kafilapi.i-polis.uz/api"
        };


    function ShowPerson({onValueChange}) {
 
        return (
          <div className='border p-2 mt-5'> 
            <div className='input-form-me  col-12 '>
            <input  onChange={changeInsured} id='checkInsured'  className='mx-2 my-4' type="checkbox"  />
            <label htmlFor="checkInsured">Insured o`zim</label>
                </div>
          </div>
        );
      }


  const [openPerson, setOpenPerson] = useState(false);

const getInsured = (birthDate, seria, passportNumber) => {

  console.log('data => ', birthDate, seria, passportNumber);
 
  async function getApplicantInfo(birthDate, seria, passportNumber ) {
    try {
        setLoading(true);
      const response = await axios.get(`${request.IPOLIS_ENDPOINT}/eosgouz/provider/birthdate`, {
        auth: {
          username: request.IPOLIS_USERNAME,
          password: request.IPOLIS_PASSWORD
        },
        params: {
          birthdate: birthDate,
          passportSeries: seria,
          passportNumber: passportNumber
        }
      });
      console.log(response.data.operationResult);
      setInsured(response.data.operationResult.person)
        setLoading(false);
        setError(false)
    } catch (error) {
        setError(true)
        setLoading(false);
        console.log(error)
        setErrorMessage(error.message)
    //   throw new Error(error);
    }
  }

  getApplicantInfo(birthDate, seria, passportNumber)
}

  const getAccident = () => {
   

      async function getApplicantInfo() {
        try {
            setLoading(true);
          const response = await axios.get(`${request.IPOLIS_ENDPOINT}/eosgouz/provider/birthdate`, {
            auth: {
              username: request.IPOLIS_USERNAME,
              password: request.IPOLIS_PASSWORD
            },
            params: {
              birthdate: birthDate,
              passportSeries: seria,
              passportNumber: passportNumber
            }
          });
          setOpenPerson(true);
          console.log(response.data.operationResult.person);
          setPerson(response.data.operationResult.person)
            setName(response.data.operationResult.person.firstNameLatin)
            setLastName(response.data.operationResult.person.lastNameLatin)
            setMiddleName(response.data.operationResult.person.middleNameLatin)
            setAddress(response.data.operationResult.person.address)
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
    <div className="container" style={{minHeight:"30rem"}}>
      {/* call person data */}
      <div className="row">
        <div className='form-group col-md-1'>
          <input className='form-control' type="text" placeholder='AAC' onChange={(e)=>{setSeria(e.target.value)}}  defaultValue={seria}/>
        </div>
        <div className='form-group col-md-2'>
          <input className='form-control' type="text" placeholder='Passport number' onChange={(e)=>{setPassport(e.target.value)}} defaultValue={passportNumber} />
        </div>
        <div className='form-group col-md-3'>
          <input className='form-control' onChange={(e)=>{setBirthdate(e.target.value)}}  type="date" defaultValue={birthDate} />
        </div>

        <div className="others-options d-flex align-items-center col-md-1">
          <div className="option-item">
            <button onClick={getAccident} className="searchbtn" type="button">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
      </div>
      {/* call person data */}
      {loading && <Loading />}
      {openPerson && <ShowPerson  />}
      {err && <ShowError />}

       {insuredState && <InsuredPerson getInsured = {getInsured} />}
    </div>
  );
}

export default Main;