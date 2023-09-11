import React from 'react'
import { useState } from 'react';

function InsuredPerson() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [adress, setAddress] =useState();
    const [birthdate, setBirthdate] = useState();

    const [personAge, setPersonAge] = useState();

    const [passportHide, setPasportHide] = useState('block');

    const year=new Date().getFullYear();

    
    const calAge = (e) => {
        setBirthdate(e.target.value);
        setPersonAge(new Date().getFullYear() - new Date(e.target.value).getFullYear())
        const insuredseria = document.getElementById('insuredseria');
        if((new Date().getFullYear() - new Date(e.target.value).getFullYear()) > 15){
            setPasportHide('block')
        }else{
            setPasportHide('none')
        }
        console.log(passportHide)
    }


    return (
        <>
            <h2 className='my-4'>information of Insured Person</h2>
            <div className="border row my-5">
                <div className='input-form-me col-3 d-flex my-2'>
                    <label htmlFor="insuredDate">Birthdate</label>
                    <input id='insuredDate' onChange={calAge} className='' type="date"/>
                </div>
            
                <div id='madmi' style={{display: passportHide}} className='input-form-me col-2 d-flex my-2'>
                    <label  style={{display: passportHide}}  htmlFor="insuredseria">Passport seria</label>
                    <input style={{display: passportHide}}  id='insuredseria' className='' type="text"/>
                </div>
                <div style={{display: passportHide}} className='input-form-me col-4 d-flex my-2'>
                    <label style={{display: passportHide}}  htmlFor="insuredDate">Passport Number</label>
                    <input style={{display: passportHide}}  id='insuredDate' className='' type="text"/>
                </div>
                <div style={{display: passportHide}} className=' btn input-form-me col-1 d-flex my-2'>
                    <button style={{display: passportHide}}  className='btn text-center'>sear</button>
                </div>
                {/* information of insured person */}
                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="name">Name</label>
            <input id='name' className='' type="text" value={name}  />
                </div>

                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="last">Last name</label>
            <input id='last' className='' type="text" value={lastName}  />
                </div>

                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="middle">Middle name</label>
            <input id='middle' className='' type="text" value={middleName}  />
                </div>
                <div className='input-form-me col-5 d-flex'>
            <label htmlFor="phone">phone number</label>
            <input id='last_name' className='' type="text" defaultValue={"+99899"} />
                </div>

                <div className='input-form-me col-12 d-flex'>
            <label htmlFor="address">Adress</label>
            <input id='address' className='' type="text" value={adress}  />
                </div>

            </div>
        </>
    )
}

export default InsuredPerson
