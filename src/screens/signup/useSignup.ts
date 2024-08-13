import {useState} from 'react';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {login} from '../../store/slice/authSlice';
import {UserData} from '../../constants/allTypes/allTypes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const initialState = {
  username: '',
  email: '',
  phone:'',
  password: '',
};
GoogleSignin.configure({
  webClientId:
    '880655244940-tggqp0tccp4liuaj3r69m97hr9ljllds.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  offlineAccess: true,
  hostedDomain: '',
  forceCodeForRefreshToken: true,
  accountName: '',
  openIdRealm: '',
  profileImageSize: 120,
});
export default function useSignup() {
  const dispatch = useDispatch();
  const [loading, setisloading] = useState(false);
  const [state, setState] = useState(initialState);

  const handleChange = (name: string, value: string): void => {
    setState((prev: any) => ({...prev, [name]: value}));
  };

  const handleRegister = () => {
    const {username, email, password} = state;
    if (!username.trim() || !email.trim() || !password.trim()) {
      return Toast.show({
        type: 'error',
        text1: 'Enter UserName or Email or Passowrd',
      });
    }
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username.length < 3) {
      return Toast.show({
        type: 'error',
        text1: 'User name at least 3 characters',
      });
    }
    if (!email) {
      return Toast.show({
        type: 'error',
        text1: 'Email format is xyz@gmail.com',
      });
    }
    if (!validRegex.test(email)) {
      return Toast.show({
        type: 'error',
        text1: 'Email format is xyz@gmail.com',
      });
    }

    if (password.length < 6) {
      return Toast.show({
        type: 'error',
        text1: 'Password at least 6 characters required',
      });
    }
    let userData: UserData = {username, email, password};
    setisloading(true);
    createUser(userData);
    setState(initialState);
  };

  const createUser = (userData: UserData): void => {
    auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(userCredential => {
        const user = userCredential.user;
      
        userData.uid = user.uid;
        userData.photoURL = user.photoURL;
        userData.creationTime = user.metadata.creationTime;
        userData.status = 'active';
        firestore()
          .collection('users')
          .doc(userData.uid)
          .set(userData)
          .then(() => {
            Toast.show({
              type: 'success',
              text1: 'Sign Up successfully',
            });
            dispatch(login(userData));
            setisloading(false);
          })
          .catch(() => {
            Toast.show({
              type: 'error',
              text1: 'Error adding user data to database',
            });
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setisloading(false);
          return Toast.show({
            type: 'error',
            text1: 'User already in use',
          });
        }

        if (error.code === 'auth/invalid-email') {
          setisloading(false);
           
         return Toast.show({
            type: 'error',
            text1: 'Email or Password Error please try again',
          });
        }
        setisloading(false);
        return Toast.show({
          type: 'error',
          text1: 'Email or Password Error please try again',
        });
      });
  };
  const LoginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const userData = {
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
        uid: userCredential.user.uid,
        creationTime: userCredential.user.metadata.creationTime,
      };
      await firestore()
        .collection("users")
        .doc(userCredential.user.uid)
        .set({
          username: userData.displayName,
          email: userData.email,
          uid: userData.uid,
          password: '',
          confirmPassword: '',
          photoURL: userData.photoURL,
          creationTime: userData.creationTime,
          status: 'Active',
          lastSeen: new Date().toLocaleDateString(),
        });
      dispatch(login(userData as UserData));
      console.log('Success', 'User SignUp Successfully', 'success');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };
  return {handleRegister,LoginWithGoogle, loading, handleChange, state};
}
