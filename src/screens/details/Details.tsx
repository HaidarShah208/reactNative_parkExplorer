import {View, Text, Image, TouchableOpacity} from 'react-native';
import {HOME, IMAGES, SrchIMAGES} from '../../constants/assets/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/detailNavigation/DetailNavigation';
import {styleHome} from '../home/HomeStyle';
import useDetails from './useDetails';
import {RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {DetialsStyle} from './DetailsStyle';

interface DetailsProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'details'>;
  route: RouteProp<RootStackParamsDetailsList, 'details'>;
  isMyDonation: boolean;
}
export default function Details({navigation, route}: DetailsProps) {
  const {parkData} = route.params;
  const {userData, handleFavoriteClick, favorite, activities} = useDetails({
    route,
  });

  return (
    <View style={DetialsStyle.MainConaier}>
      <View style={DetialsStyle.ImgView}>
        <Image
          source={{uri: parkData.images[0]?.url}}
          style={DetialsStyle.img}
        />
        <IMAGES.DetailBack
          style={DetialsStyle.back}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          onPress={handleFavoriteClick}
          style={{position: 'absolute', top: 22, left: 330}}>
          {favorite ? (
            <SrchIMAGES.Heart style={DetialsStyle.heart} />
          ) : (
            <SrchIMAGES.EmptyHeart style={DetialsStyle.heart} />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={DetialsStyle.InfoContainer}>
          <View style={DetialsStyle.InfoHeading}>
            <View>
              <Text style={DetialsStyle.InfoSub}>{parkData.designation}</Text>
              <View style={DetialsStyle.locaiton}>
                <HOME.Locator width={15} height={15} />
                <Text style={DetialsStyle.loc}>
                  {parkData?.addresses[0]?.city}
                </Text>
              </View>
            </View>
            <View style={DetialsStyle.MainInfo}>
              <View style={DetialsStyle.detailsInfo}>
                {userData && userData.photoURL ? (
                  <Image
                    source={{uri: userData.photoURL}}
                    style={styleHome.userImage}
                  />
                ) : (
                  <HOME.DefaultHome
                    height={48}
                    width={48}
                    style={{borderRadius: 30}}
                  />
                )}
              </View>
            </View>
          </View>

          <Text style={DetialsStyle.disc}>About Discription</Text>
          <View style={DetialsStyle.DisContainer}>
            <Text style={DetialsStyle.discription}>
              {parkData.description}...
              <Text style={DetialsStyle.readMore}>Read more</Text>
            </Text>
          </View>
          <View>
            <Text style={DetialsStyle.InfoSub}>Activities</Text>
            <View style={{flexDirection: 'row'}}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styleHome.scrollImage}>
                {activities.map((activity: any, index: any) => (
                  <TouchableOpacity key={index}>
                    <View style={[styleHome.locator]}>
                      <Text style={styleHome.tsxt}>{activity}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>

          <Text style={DetialsStyle.map}>Maps</Text>
          <View style={DetialsStyle.mapBox}></View>
        </View>
      </ScrollView>
    </View>
  );
}
