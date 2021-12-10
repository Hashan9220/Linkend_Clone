import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextInput,Button,onPress  } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {
      constructor(props){
        super(props);
        this.state = {
                email:'',
                password:''
        };
    }

    userLogin = () => {
        auth()
  .signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
    console.log('User Loging Successful....');
    this.props.navigation.navigate('TabNavigetor');
  })
  .catch(error => {
        console.log(error);
  })
  
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

    <Button mode="contained" onPress={this.userLogin}>
    Login
  </Button>
            </View>
        )
    }
}
