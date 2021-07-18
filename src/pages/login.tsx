import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../firebase/clientApp'



const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]

}

function Login() {
    return (
        <div style={{
            display: 'flex', 
            minHeight: '100vh'
            }}>
                <p>Faça seu login: </p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default Login