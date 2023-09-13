import React from 'react'
import {useState} from 'react';

function InsuredPerson({getInsured}) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [adress, setAddress] = useState();
    const [birthdate, setBirthdate] = useState();

    const [personAge, setPersonAge] = useState();
    const [seria, setSeria] = useState();
    const [numberOfPassport, setNumPas] = useState();

    const [passportHide, setPasportHide] = useState('block');

    const year = new Date().getFullYear();


    const calAge = (e) => {
        setBirthdate(e.target.value);
        setPersonAge(new Date().getFullYear() - new Date(e.target.value).getFullYear())
        const insuredseria = document.getElementById('insuredseria');
        if ((new Date().getFullYear() - new Date(e.target.value).getFullYear()) > 15) {
            setPasportHide('block')
        } else {
            setPasportHide('none')
        }
        console.log(passportHide)
    }

    const InformationOfPerson = () =>{

        getInsured(birthdate, seria, numberOfPassport)
    }


    return (
        <>
            <h2 className='my-4'>information of Insured Person</h2>
            <div className="border row my-5">
                <div className='col-3 form-group'>
                    <input className="form-control" id='insuredDate'
                        onChange={calAge}
                        type="date"/>
                </div>

                <div id='madmi'
                className="form-group col-md-1"
                    style={
                        {display: passportHide}
                    }>
                   
                    <input style={
                            {display: passportHide}
                        }
                        className="form-control"
                        onChange={e => setSeria(e.target.value)}
                        id='insuredseria'
                        type="text"/>
                </div>
                <div 

                style={
                        {display: passportHide}
                    }
                    className='col-md-3 form-group'>
                    <input style={
                            {display: passportHide}
                        }
                        id='insuredDate'
                        className='form-control'
                        onChange={e => setNumPas(e.target.value)}
                        type="text"/>
                </div>
                <div style={
                        {display: passportHide}
                    }
                    className='col-md-2'>
                    <button 
                    onClick={InformationOfPerson}
                        className="btn btn-danger  searchbtn"
                        type="button">
                        <i className="bx bx-search"></i>
                    </button>
                </div>
                {/* information of insured person */}

                {
                passportHide === "none" && <InformationOfBoy/>
            }
                <div className='border'>
                    <button className="btn btn-primary  px-4 py-3 my-4">
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default InsuredPerson

// <div className="option-item">
// <button onClick={getAccident} className="btn btn-seracr searchbtn" type="button">
// <i className="bx bx-search"></i>
// </button>
// </div>
