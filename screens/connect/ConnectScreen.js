import React from 'react';
import { Alert, AsyncStorage, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ConnectScreen extends React.Component {
  constructor(props) {
    super(props);

    this.useEffect = this.useEffect.bind(this);
    this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
    
    this.state = {
      hasPermission: null, 
      setHasPermission: null, 
      scanned: false,
      setScanned: false,
      screenOpen: false,
    };
  }

  //Wait for code to be sent
  useEffect() {
    async () => {
      const status = await BarCodeScanner.requestPermissionsAsync();
      let result = status === 'granted'
      this.setState({setHasPermission: result});
    };
  }

  //Try to connect using qr code address (url)
  async setupConnection(url) {
    let ip = {'ip': url}
    await AsyncStorage.setItem('ip', JSON.stringify(ip));
    let sts = {status : "Connection attempt"}
    let settings = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(sts)
    }
    let request = await fetch(url + '/init_connect', settings)
    let response = await request.json()
    if (response.status == "Connected"){
      console.log("You have successfully connected")
      this.props.navigation.navigate('Controller')
    }
    else{
      console.log("Connection attempt failed. Try again")
    }
  }

  //Data is the address being sent over
  handleBarCodeScanned(type, data) {
    if (this.state.screenOpen == false) {
      this.setState({setScanned: true, screenOpen: true});
      Alert.alert(
        'You have connected to a server!',
        `You have connected to the follow ip: ${ type.data } \n Please confirm this address matches the one displayed on the server.`,
        [
          {text: 'Play on server', onPress: () => this.setupConnection(type.data)},
          {
            text: 'Rescan',
            onPress: () => this.setState({screenOpen: false}),
            style: 'cancel',
          }
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <BarCodeScanner
          onBarCodeScanned={this.scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    )
  };
};