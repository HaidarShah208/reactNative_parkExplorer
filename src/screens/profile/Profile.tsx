import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RootTabParamsList} from '../../navigation/tabNavigation/TabNavigation';
import {IMAGES} from '../../constants/assets/images';
import {userStyle} from './ProfileStyle';
import Button from '../../components/button/Button';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import useProfile from './useProfile';

interface userScreenProps {
  navigation: BottomTabNavigationProp<RootTabParamsList, 'user'>;
}

export default function Profile({navigation}: userScreenProps) {
  
  const {
    currentUser,
    name,
    email,
    setName,
    handleSubmit,
    loading,
    handlePicture,
    imageUploading,
    handleLogout,
  } = useProfile();


  return (
    <View style={userStyle.mainContainer}>
      <View style={userStyle.main}>
        <Text style={userStyle.heading}>Profile</Text>
        <View>
          {currentUser.photoURL == null ? (
            <View style={{borderRadius: 90, overflow: 'hidden'}}>
              <IMAGES.Defaults height={120} width={120} />
            </View>
          ) : (
            <Image
              source={{uri: currentUser.photoURL}}
              style={userStyle.profile}
            />
          )}
          <TouchableOpacity onPress={handlePicture}>
            <View style={userStyle.profileEdit}>
              <IMAGES.Pencil height={20} width={20} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={userStyle.mail}>{name}</Text>
        <Text style={userStyle.userEmail}>{currentUser.email}</Text>
      </View>


      <TouchableOpacity
        style={userStyle.button}>
        <Text style={userStyle.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={userStyle.button}
        onPress={() => console.log('Settings')}>
        <Text style={userStyle.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={userStyle.button}
        onPress={() => console.log('Reset Password')}>
        <Text style={userStyle.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={userStyle.button}
        onPress={() => console.log('Other Options')}>
        <Text style={userStyle.buttonText}>Other Options</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[userStyle.button, userStyle.logoutButton]}
        >
        <Text style={userStyle.buttonText} onPress={handleLogout}>Sign Out</Text>
      </TouchableOpacity>

      {/* <View style={userStyle.btnsContainer}>
        <Button
          title={
            imageUploading || loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              'Update profile'
            )
          }
          buttonStyle={userStyle.btnsContainer}
          onPress={handleSubmit}
        />
      </View> */}
    </View>
  );
}
