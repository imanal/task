import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  GetValueFunction=()=>{
    const {TextInputValue}= this.state;
    var currentDate =new Date();
        var birthdayDate =new Date(TextInputValue);
      var age_now = currentDate.getFullYear() - birthdayDate.getFullYear();
      var t = currentDate.getMonth()- birthdayDate.getMonth();
      if (t < 0 || (t == 0 && currentDate.getDate() < birthdayDate. getDate()))
      {
        age_now--;
      }
      Alert.alert( "your age now " +age_now)

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style ={styles.input}>

              <Text style={styles.paragraph}>
hi
</TextInput>


        </Text>
        <Card>
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
