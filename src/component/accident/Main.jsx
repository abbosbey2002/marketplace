import React, { useEffect, useState } from 'react';
import "./main.css";
import axios from 'axios';
import { NavLink } from 'react-router-dom';




function Main() {

    const [name, setName] = useState('');
        const [lastName, setLastName] = useState('');
        const [middleName, setMiddleName] = useState('');
        const [adress, setAddress] = useState('');
        const [person, setPerson] = useState({})

        const [birthDate, setBirthdate] = useState('2002-04-14');
        const [seria, setSeria] = useState("AC");
        const [passportNumber, setPassport] = useState("1110802");

        const [loading, setLoading] = useState(false)

        const [err, setError] = useState(false);
        const [errorMessage, setErrorMessage] = useState();

        console.log(birthDate, seria, passportNumber)


    function ShowPerson() {
 
        return (
          <div className='border p-2 mt-5'> 
            <div className='row'>

                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="name">Name</label>
            <input id='name' className='' type="text" value={name} disabled />
                </div>

                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="middle_name">Middle Name</label>
            <input id='middle_name' className='' type="text" value={middleName} disabled />
                </div>

                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="last_name">Last Name</label>
            <input id='last_name' className='' type="text" value={lastName} disabled />
                </div>

                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="phone">phone number</label>
            <input id='last_name' className='' type="text" defaultValue={"+99899"} />
                </div>

                <div className='input-form-me col-12 d-flex'>
            <label htmlFor="address">Adress</label>
            <input id='address' className='' type="text" value={adress} disabled />
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
    <div className="container">
      {/* call person data */}
      <div className="form">
        <div>
          <input type="text" placeholder='AAC' onChange={(e)=>{setSeria(e.target.value)}}  defaultValue={seria}/>
        </div>
        <div>
          <input type="text" placeholder='Passport number' onChange={(e)=>{setPassport(e.target.value)}} defaultValue={passportNumber} />
        </div>
        <div>
          <input onChange={(e)=>{setBirthdate(e.target.value)}}  type="date" defaultValue={birthDate} />
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