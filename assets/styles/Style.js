import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  leadTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  leadText: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  container: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#800000',
    marginTop: 15,
    marginBottom: 15,
  },
  description: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 28,
    color: '#000',
    marginTop: 15,
    marginBottom: 15,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 60,
    marginBottom: 15,
  },
  textCat: {
    fontSize: 18,
    color: 'blue',
  },
});

export {styles};
