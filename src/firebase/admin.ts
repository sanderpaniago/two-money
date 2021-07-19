import * as admin from 'firebase-admin'

const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID 
        })
    })   
}
export default admin.firestore()