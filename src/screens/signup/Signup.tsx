import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './SignupStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../navigation/stackNavigation/StackNavigation';
import {IMAGES} from '../../constants/assets/images';
import Button from '../../components/button/Button';
import {UserData} from '../../constants/allTypes/allTypes';
import useSignUp from './useSignup';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

interface SignupScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'SIGNUP'>;
}

export default function Signup({navigation}: SignupScreenProps) {
  const {loading, handleRegister,LoginWithGoogle, handleChange, state} = useSignUp();
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Sign up now</Text>
      <Text  style={styles.login}>Please fill the details and create account</Text>
  
      <TextInput
        style={styles.input}
        value={state.username}
        placeholder='user name'
       placeholderTextColor="black"
        onChangeText={(value: string) => handleChange('username', value)}
      />

      <TextInput
        style={styles.input}
        value={state.email}
         placeholder='user email'
           placeholderTextColor="black"
        onChangeText={(value: string) => handleChange('email', value)}
      />
      
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={state.password}
           placeholder='password'
           placeholderTextColor="black"
        onChangeText={(value: string) => handleChange('password', value)}
      />
 
      <View style={styles.buttonStyle}>
        <Button
          title={
            loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              'Sign Up'
            )
          }
          onPress={handleRegister}
        />
      </View>
      <View style={styles.already}><Text style={styles.haveAccount}>Already have an Account?</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('LOGIN');
        }}>
        <Text style={styles.navigate}>Log in</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containerGoole}>
      <GoogleSigninButton
      onPress={LoginWithGoogle}
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
      />
    </View>
    </View>
  );
}
function createUser(userData: UserData) {
  throw new Error('Function not implemented.');
}
