import React from 'react';
import { Alert, View, StyleSheet } from 'react-native';
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
    let obj = {status : "Connection attempt"}
    let settings = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(obj)
    }
    let request = await fetch("http://137.99.207.220:3000/init_connect", settings)
    let response = await request.json()
    if (response.status == "Connected"){
      console.log("You have successfully connected")
      this.props.navigation.navigate('Play')
    }
    else{
      console.log("Connection attempt failed. Try again")
    }

    /*
    try{
      let obj = {
        status : "Connection attempt"
      }
      let settings = {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(obj),
      }
      console.log(url)
      let response = fetch(url, settings).then(response => {
        setTimeout(() => null, 0);
        return response.json();
    })
    .then(async response => {
        console.log(response);
    });
      console.log(response)
      if (response.status == "Connected") {
        console.log(`Connected to ${url}`)
        this.props.navigation.navigate('Play')
      }
      else {
        console.log("No or invalid response from server")
      }
    } catch(err) {
      console.log(err);
      throw err;
    }
    */
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



















{/*
function connectText() {
  let count = 0;
  while (true) {
    try {
      let obj = {};
      obj[status] = "Controller 'ID' is trying to connect";
      let res = fetch("http://50.28.188.58:3000/init_connect", {
          method: 'POST',
            mode: 'no-cors',
            data: JSON.stringify(obj),
      });
      console.log(res)
      console.log("Connection successful.");
      break;      
    } catch (err) {
        console.log("Oh no! Failed to connect.");
        console.log(err);
      }
  }
}

export default class ConnectScreen extends React.Component {
  componentDidMount () {
    connectText();
    this.props.navigation.navigate('Play');

  };
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styleglobal.settingsHomeContainer}>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Play')}>
            <Text>Connecting to server...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Play')}>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
*/}