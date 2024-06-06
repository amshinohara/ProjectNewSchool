import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'white',
  },
  containersafe: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
  },
  notacontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width - 30,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#001f3f',
  },
  titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    color: '#001f3f',
  },
  formContainer: {
    marginBottom: 25,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff7f50',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    color: '#001f3f',
    marginBottom: 5,
  },
  text: {
    color: '#001f3f',
    marginBottom: 5,
    alignSelf: 'center',
  },
  card: {
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#001f3f',
    fontWeight: 'bold',
  },
  itemtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#ff7f50',
  },
  descricao: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#ff7f50',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
});
