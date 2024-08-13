import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector} from 'react-redux';
import { addFavorite, removeFavorite, selectFavorites } from '../../store/slice/favoriteSlice';
import firestore from '@react-native-firebase/firestore';
 
export default function useDetails({route}: any) {
  const { parkData } = route.params as { parkData: any };
 
  const [userData, setUserData] = useState<{
    username?: string;
    photoURL?: string;
    uid: string;
  } | null>(null);
  

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const userId = auth().currentUser?.uid;

  const [favorite, setFavorite] = useState(false);
  const activities = parkData?.activities?.map(
    (activity: {name: any}) => activity.name,
  );

  useEffect(() => {
    const isFavorite = favorites.some(fav => fav.parkId === parkData.parkId);
    setFavorite(isFavorite);
  }, [favorites, parkData.parkId]);

  const handleFavoriteClick = async () => {
    const parkId = parkData.id;

    if (favorite) {
      dispatch(removeFavorite(parkId));
      await firestore()
        .collection('favorites')
        .doc(userId)
        .collection('userFavorites')
        .doc(parkId)
        .delete();
      Toast.show({
        text1: 'Removed from favorites',
        type: 'success',
      });
    } else {
      dispatch(addFavorite({...parkData, parkId, userId}));
      await firestore()
        .collection('favorites')
        .doc(userId)
        .collection('userFavorites')
        .doc(parkId)
        .set({...parkData, parkId});
      Toast.show({
        text1: 'Added to favorites',
        type: 'success',
      });
    }

    setFavorite(!favorite);
  };

 

 
   

 

 

  return {
    handleFavoriteClick,
    userData,
    favorite,
    activities
  };
}
