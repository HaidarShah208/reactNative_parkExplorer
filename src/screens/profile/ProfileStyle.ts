import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const userStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: 20,
    alignItems: 'center',
    padding: 30,
  },
  main: {
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    color: 'black',
    paddingVertical: 20,
    fontSize: 24,
    fontFamily: FONTS.BOLD,
  },
  mail: {
    fontSize: 21,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: FONTS.SemiBold,
  },
  userEmail: {
    color: '#959595',
    textAlign: 'center',
  },

  btnsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.BOLD,
    height: 64,
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileEdit: {
    position: 'relative',
    left: 89,
    bottom: 22,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAAE4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
  },
  container: {
    flexGrow: 1,
    paddingTop: 80,
    paddingHorizontal:30,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#333',
    backgroundColor: '#fff',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  changePasswordButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  changePasswordButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
