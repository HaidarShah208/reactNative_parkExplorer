import { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { login } from '../../store/slice/authSlice';
import Toast from 'react-native-toast-message';
import { UserData } from '../../constants/allTypes/allTypes';

GoogleSignin.configure({
  webClientId: '95859779128-vb8cetg7nudk7nhmfrcch2pcdtcc8efv.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

export default function useGoogleButton() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      const userData: UserData = {
        uid: userCredential.user.uid,
        username: userCredential.user.displayName || '',
        email: userCredential.user.email || '',
        photoURL: userCredential.user.photoURL || '',
        creationTime: userCredential.user.metadata.creationTime || '',
        password: '',  
      };

      await firestore()
        .collection('users')
        .doc(userData.uid)
        .set({
          username: userData.username,
          email: userData.email,
          uid: userData.uid,
          photoURL: userData.photoURL,
          creationTime: userData.creationTime,
          status: 'active',
          lastSeen: new Date().toLocaleDateString(),
        });

      dispatch(login(userData));
      Toast.show({ type: 'success', text1: 'Sign Up successfully' });
    } catch (error) {
      Toast.show({ type: 'error', text1: 'Error during Google sign-in' });
      console.error('Error during Google sign-in:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loginWithGoogle, loading };
}
