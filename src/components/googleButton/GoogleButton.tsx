import {
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {styles} from '../../screens/login/LoginStyle';
import useGoogleButton from './useGoogleButton';

export default function GoogleButton() {
 const {loginWithGoogle,loading}=useGoogleButton()
  return (
    <GoogleSigninButton
    onPress={loginWithGoogle}
    disabled={loading}
      style={styles.signInButton}
      size={GoogleSigninButton.Size.Wide}
    />
  );
}
