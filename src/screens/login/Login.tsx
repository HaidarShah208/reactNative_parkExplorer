import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './LoginStyle';
import {RootStackParamsList} from '../../navigation/stackNavigation/StackNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../../components/button/Button';
import useSignIn from './useLogin';
import GoogleButton from '../../components/googleButton/GoogleButton';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'LOGIN'>;
}
export default function Login({navigation}: LoginScreenProps) {
  const {handleSubmit, loading, setEmail, setPassword, email, passowrd} =
    useSignIn();

  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.login}>please sigin to continue our app</Text>

      <TextInput
        style={styles.input}
        value={email}
        placeholder="user email"
        placeholderTextColor="black"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={passowrd}
        placeholder="password"
        placeholderTextColor="black"
        onChangeText={passowrd => setPassword(passowrd)}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('FORGOT_PASSWORD');
        }}>
        <Text
          style={styles.forgot}
          onPress={() => {
            navigation.navigate('FORGOT_PASSWORD');
          }}>
          Forgot Passowrd ?
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonStyle}>
        <Button
          title={
            loading ? <ActivityIndicator size="large" color="white" /> : 'Login'
          }
          onPress={handleSubmit}
        />
      </View>
      <View style={styles.already}>
        <Text style={styles.haveAccount}>Already have an Account?</Text>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('SIGNUP');
          }}>
          <Text style={styles.navigate}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerGoole}>
        <GoogleButton />
      </View>
    </View>
  );
}

function setisloading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
