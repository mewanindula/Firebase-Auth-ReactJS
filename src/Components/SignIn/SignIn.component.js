import React, { useState } from 'react'
import { auth } from '../../configs/firebase.config';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch(error => console.log(error))
    }

    return (
        <div className="sign-in">
            <h1>Sign In Page</h1>
            <form>
                <label>Email : </label>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <br />

                <label>Password : </label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <br />

                <button onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
