import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, Alert, Image, Linking } from 'react-native';
import CustomButton from './component/button';


const App = () => {
  return (
    <View style={styles.container}>
      <Image source={ require('./media/image/razerLogo.png') } 
        style={ styles.cardImage }/>
      <Text style={ styles.textStyle }>FOR GAMERS. BY GAMERS!</Text>
      {/* <Button
        title="I'm a Button!"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
      <CustomButton
        title="Click for open our website!" 
        titleColor={'#32CD32'}
        onPress={() => Linking.openURL('https://www.razer.com/').catch(err => console.error('An error ocurred', err))}
      />
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    //marginTop: 80,
    width: 250,
    height: 250,
    borderWidth: 2,
    borderRadius: 125,
    borderColor: 'rgb(0, 255, 0)',
    resizeMode: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: 'rgb(0, 255, 0)',
    margin: 20
  },
});

export default App


