import React, { useState }  from 'react';

import './styles.scss';

const Footer : React.FC = () => {
    const [ email, setEmail ] = useState('');
    const [ isButtonPressed, setButtonPressed ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    // join button is pressed
    if ( isButtonPressed ) {
        // send email to backend
        fetch("http://localhost:9000/waitlist", {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify( { email : email } )
        }).then(async (response) => {
            const data = await response.json()
            if (!response.ok || data.error || !data.status) {
                setError(true)
            } else {
                setSuccess(true)
            }
        })
          .catch((err) => {
              setError(true)
          })
    }

    // email is saved to backend
    if ( success ) {
        // return a confirmation component
        return ( 
                <div className="footer-container">
                    <h2>You are on the waitlist!</h2>
                    <button className="resubmit" onClick={ () => {
                        setButtonPressed(false) 
                        setEmail('')
                        setSuccess(false)
                    }}> Ok! </button>
                </div> 
            )
    }

    return (
        <div className="footer-container">
            <h2>WE'RE LAUNCHING SOON!</h2>
            <div>
                <input placeholder="Enter your email" onChange={ (e) => setEmail(e.target.value)}></input>
                <button onClick={ () => setButtonPressed(true) }>JOIN THE WAITLIST</button>
            </div>
            { error ? "Try again!" : ""}
        </div>
    )
}

export default Footer;