import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
      justifyContent: 'center',
      padding: 10,
    },
    selectedDateContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: COLORS.SECONDARY,
      borderRadius: 5,
      alignItems: 'center',
    },
    selectedDateText: {
      color: COLORS.TEXTPRIMARY,
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 18,
    },
    input: {
      height: 40,
      borderColor: COLORS.TEXTPRIMARY,
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      width: '100%',
    },
    addButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      width: '100%',
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: COLORS.WHITE,
      fontSize: 16,
      fontWeight: 'bold',
    },
    eventsContainer: {
      marginTop: 20,
      padding: 10,
    },
    eventText: {
      color: COLORS.TEXTPRIMARY,
      fontSize: 14,
    },
    allEventsTitle: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    eventItem: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#F7F7F9',
      borderRadius: 5,
    },
    eventDate: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
    },
    eventDescription: {
      fontSize: 14,
      color: COLORS.TEXTPRIMARY,
    },
  });