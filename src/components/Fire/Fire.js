import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyAf6e9SxUylF-Gbeb6Fu1OqbE9_Z3NnGOM',
    authDomain: 'pyrebase-6e324.firebaseapp.com',
    databaseURL: 'https://pyrebase-6e324.firebaseio.com/',
    storageBucket: 'gs://pyrebase-6e324.appspot.com'
};
const Fire = firebase.initializeApp(config);

export default Fire;