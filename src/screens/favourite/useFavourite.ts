import {useDispatch, useSelector} from 'react-redux';
import {selectFavorites, setFavorites} from '../../store/slice/favoriteSlice';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function useFavourite() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const userId = auth().currentUser?.uid;

  useEffect(() => {
    if (userId) {
      const unsubscribe = firestore()
        .collection('favorites')
        .doc(userId)
        .collection('userFavorites')
        .onSnapshot(snapshot => {
          const uniqueFavoriteParks = Array.from(
            new Map(
              snapshot.docs.map(doc => [doc.data().parkId, doc.data()]),
            ).values(),
          );
          dispatch(setFavorites(uniqueFavoriteParks));
        });

      return () => unsubscribe();
    }
  }, [dispatch, userId]);

  return {favorites};
}
