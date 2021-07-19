import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../firebase/clientApp'

import { Container } from '../styles/pages/login'


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
        <Container>
            <section>
                <p>Faça seu login: </p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </section>
        </Container>
    )
}

export default Login