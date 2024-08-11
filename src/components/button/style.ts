import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts/fonts";

export const styles = StyleSheet.create({
    button: {
      backgroundColor: '#0D6EFD',
      borderRadius: 14,
      alignItems: 'center',
      textAlign:'center',
      height: 50,
      width: 310,
      marginTop: 30,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      paddingTop:7,

     
      textAlign: 'center',
      fontFamily: FONTS.SemiBold,
    },
  });