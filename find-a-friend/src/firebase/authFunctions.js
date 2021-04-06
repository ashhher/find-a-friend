import Firebase from './firebase';

class AuthFunctions extends Firebase {
    signUp(firstname, lastname, email, pwd) {
        //Create a user on firebase
        //Write the user's infomation into the database
        //Catch any errors thrown by firebase
        this.auth.createUserWithEmailAndPassword(email,pwd)
            .then((userCred) => {
                this.writeDatabase(userCred.user.uid, {
                    name: {
                        first: firstname,
                        last: lastname
                    },
                    email: email,
                    profile_pic: "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png",
                    posts: {},
                    following: {
                        [userCred.user.uid]: 0 //for tracing our own post
                    }
                });
            })
            .catch(this.debugError);
    }
    logIn(email,pwd) {
        //Log the user in to firebase
        //Catch any errors thrown
        this.auth.signInWithEmailAndPassword(email, pwd)
        .catch(this.debugError);
    }

    logOut(callback) {
        this.auth.signOut()
        .then(callback)
        .catch(this.debugError);
    }
}

const authFunctions = new AuthFunctions();
export default authFunctions;