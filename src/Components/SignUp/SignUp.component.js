import React, { useState } from 'react'
import { auth } from '../../configs/firebase.config';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password === passwordConfirmation) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(user => console.log(user))
                .catch(error => console.log(error))
        }
        else {
            alert("Password doesn't match");
        }

    }

    return (
        <div className="sign-up">
            <h1>Sign Up Page</h1>
            <form>
                <label>Email : </label>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <br />

                <label>Password : </label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <br />

                <label>Confirm Password : </label>
                <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />

                <br />

                <button onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
