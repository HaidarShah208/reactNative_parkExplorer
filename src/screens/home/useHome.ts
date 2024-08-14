import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {selectAuthState} from '../../store/slice/authSlice';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export default function useHome() {
  const navigations = useNavigation();
  const user = useSelector(selectAuthState);
  const [profileImage, setProfileImage] = useState<string | null>(
    user?.photoURL || null,
  );

  const currentUser = auth().currentUser;
  useEffect(() => {
    if (user && user.photoURL) {
      setProfileImage(user.photoURL);
    }
  }, [user]);

  return {
    navigations,
    currentUser,
  };
}
