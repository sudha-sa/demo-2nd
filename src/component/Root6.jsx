
import React, { useEffect, useState } from 'react';

const Root6 = () => {
    const initialData = { name: '', email: '', password: '' };
    const [inputData, setInputData] = useState(initialData);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (flag) {
            console.log('Registered');
        }
    }, [flag]);

    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert('All Fields are Mandatory');
        } else {
            setFlag(true);
        }
    }

    return (
        <>
            {flag ? (
                <h2 className='ui-define'>
                    Hello {inputData.name}, you have registered successfully
                </h2>
            ) : null}
            <form className='container' onSubmit={handleSubmit}>
                <div className='header'>
                    <h1>Registration Form</h1>
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        name='name'
                        value={inputData.name}
                        onChange={handleData}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Enter Your Email'
                        name='email'
                        value={inputData.email}
                        onChange={handleData}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Enter Your Password'
                        name='password'
                        value={inputData.password}
                        onChange={handleData}
                    />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    );
};

export default Root6;
