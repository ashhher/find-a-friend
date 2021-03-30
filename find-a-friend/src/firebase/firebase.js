import app from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC8w-hZmNrubuHCMbExH3LPVwAJJkTfx3Q",
    authDomain: "find-a-friend-86bc8.firebaseapp.com",
    databaseURL: "https://find-a-friend-86bc8-default-rtdb.firebaseio.com",
    projectId: "find-a-friend-86bc8",
    storageBucket: "find-a-friend-86bc8.appspot.com",
    messagingSenderId: "525701200317",
    appId: "1:525701200317:web:450747e280ee445e063ad4"
};

app.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.database = app.database();
        this.storage = app.storage();
        this.auth = app.auth();
    }

    debugError(error) {
        alert(`${error.code} error has occurred - ${error.message}`);
    }

    writeDatabase(root, json) {
        this.database.ref(root).set(json)
        .catch(this.debugError);
    }

    onUserActive(callback, fallback=null) {
        this.auth.onAuthStateChanged((userInstance) => {
            if(userInstance != null) {
                callback(userInstance.uid);
            }
            else if(fallback != null) {
                fallback();
            }
        });
    }
}

export default Firebase;