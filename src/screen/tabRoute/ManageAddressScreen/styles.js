import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginHorizontal: '5%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '15%',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '500',

    marginLeft: '20%',
  },
  addressBlockHeader: {
    borderColor: 'rbg(236,236,236)',
    borderWidth: 0.5,
    marginTop: '5%',
    paddingVertical: '5%',
  
  },
  nameDetail: {
    flexDirection: 'row',
    paddingTop: 10,
    bottom: '5%',
    marginLeft: 20,
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: '300',
  },
  iconPosition: {
    paddingRight: 15,
    left: 120,
    color: 'grey',
    fontSize: 20,
    
  
  },
  addressBlock: {
    flexDirection: 'row',
    bottom: '1%',
    marginHorizontal: '5%',
    paddingBottom: 2,
  },
  textColor: {
    color: 'rgb(147,147,147)',
  },
  button: {
    backgroundColor: 'rgb(115,191,73)',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    position: 'absolute',
    bottom: '5%',
    left: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
