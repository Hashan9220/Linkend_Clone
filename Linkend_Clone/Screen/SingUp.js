import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput, Button, onPress} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  UserRegister = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account created & signed in!');
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  render() {
    return (

      <View>
        <View   style={{
            height:100,
            width: 100,
            marginLeft:150,
            marginTop:50,
            borderRadius: 12,
           
          }}>
          <Image
                    source={require('../Screen/assets/linked.png')} />
           
       </View>

        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
          style={{
            height: 50,
            width: 350,
            margin: 35,
            marginBottom: 15,
            marginTop: '20%',
            borderRadius: 12,
            borderColor: '#000',
          }}
        />

        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
          style={{
            height: 50,
            width: 350,
            margin: 35,
            borderRadius: 12,
            borderColor: '#000',
          }} 
        />

        <Button
         
          mode="contained"
          onPress={this.UserRegister}
          style={{height: 50,width:200,marginLeft:110, borderRadius: 15,marginBottom:20,marginTop:50,
            borderColor: '#000', backgroundColor: '#1eaae6',fontSize:25}}>
          SingUp
        </Button>

        <Text style={{fontSize:20,color:'#000',marginLeft:190,marginTop:50,}}>OR</Text>
        <Button
          mode="contained"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
          style={{height: 50,width:200,marginLeft:110, borderRadius: 15,marginBottom:20,marginTop:50,
            borderColor: '#000', backgroundColor: '#1eaae6',fontSize:25}}>
          Login
        </Button>
      </View>
      
    );
  }
}

export default SingUp;
