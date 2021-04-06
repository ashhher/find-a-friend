import Firebase from './firebase';

class ProfileFunctions extends Firebase {
    fetchUserData(Component, uid) {
        this.readDatabase(uid, "value", (snapshot) => {
            Component.setState({user: snapshot});
        })
    }
}
const profileFunctions = new ProfileFunctions();
export default profileFunctions;