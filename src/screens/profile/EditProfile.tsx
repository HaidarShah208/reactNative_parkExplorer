import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { userStyle } from './ProfileStyle';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    console.log({name, email, address, contactNo, gender, bio});
  };

  const handleChangePassword = () => {
    console.log('Change Password Pressed');
  };

  return (
    <ScrollView contentContainerStyle={userStyle.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#007bff',
          textAlign: 'center',
        }}>
        Personal Information
      </Text>
      <View style={userStyle.inputContainer}>
        <Text style={userStyle.label}>Name</Text>
        <TextInput
          style={userStyle.input}
          value={name}
          placeholderTextColor={'black'}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={userStyle.inputContainer}>
        <Text style={userStyle.label}>Email</Text>

        <TextInput
          style={userStyle.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor={'black'}
          keyboardType="email-address"
        />
      </View>

      <View style={userStyle.inputContainer}>
        <Text style={userStyle.label}>Address</Text>
        <TextInput
          style={userStyle.input}
          value={address}
          onChangeText={setAddress}
          placeholderTextColor={'black'}
          placeholder="Enter your address"
        />
      </View>

      <View style={userStyle.inputContainer}>
        <Text style={userStyle.label}>Gender</Text>
        <View style={userStyle.radioContainer}>
          <TouchableOpacity
            style={userStyle.radioButton}
            onPress={() => setGender('Male')}>
            <View
              style={[
                userStyle.radioCircle,
                gender === 'Male' && userStyle.selectedRadio,
              ]}
            />
            <Text style={userStyle.radioText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={userStyle.radioButton}
            onPress={() => setGender('Female')}>
            <View
              style={[
                userStyle.radioCircle,
                gender === 'Female' && userStyle.selectedRadio,
              ]}
            />
            <Text style={userStyle.radioText}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={userStyle.label}>Additional Info:</Text>
      <TouchableOpacity
        style={userStyle.changePasswordButton}
        onPress={handleChangePassword}>
        <Text style={userStyle.changePasswordButtonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={userStyle.saveButton} onPress={handleSave}>
        <Text style={userStyle.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

 

export default EditProfileScreen;
