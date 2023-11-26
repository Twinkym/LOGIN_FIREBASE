import { signInWithEmailAndPassword as signInWithEmailAndPasswordService } from 'firebase/auth';
import firebase from './firebase';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';


const signInWithEmailAndPassword = async (email, password) => {
        return signInWithEmailAndPasswordService(email, password);
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    };

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    };

    const signInWithGitHub = async () => {
        const provider = new GithubAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    };

    // you can add more authentication methods according to your needs

const authService = {
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGitHub
}; 

export default authService;