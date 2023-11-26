import firebase from './firebase';

const authService = {
    signInWithEmailAndPassword: async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },

    signInWithGoogle: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().useDeviceLanguage();
        return firebase.auth().signInWithPopup(provider);
    },

    signInWithFacebook: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        await firebase.auth().useDeviceLanguage();
        return firebase.auth().signInWithPopup(provider);
    },

    signInWithGitHub: async () => {
        const provider = new firebase.auth.GithubAuthProvider();
        await firebase.auth().useDeviceLanguage();
        return firebase.auth().signInWithPopup(provider);
    },

    // you can add more authentication methods according to your needs
};

export default authService;