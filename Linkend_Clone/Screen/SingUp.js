import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextInput,Button,onPress  } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export class SingUp extends Component {
    constructor(props){
        super(props);
        this.state = {
                email:'',
                password:''
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
    }
    render() {
        return (
            <View>
                 <TextInput
                     label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState(
                         {email:text}
                        )}
    />

                  <TextInput
                     label="Password"
                        value={this.state.password}
                        onChangeText={text => this.setState(
                         {password:text}
                        )}
    />

    <Button icon="camera" mode="contained" onPress={this.UserRegister}>
    SingUp
  </Button>
  <Button mode="contained" onPress={()=>{
                this.props.navigation.navigate('Login')}}>
    Login
  </Button>
            </View>
        )
    }
}

export default SingUp
