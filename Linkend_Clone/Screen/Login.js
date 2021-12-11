import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
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
                        onChangeText={text => this.setState(
                         {email:text}
                        )}style={{
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
                        onChangeText={text => this.setState(
                         {password:text}
                        )}    style={{
            height: 50,
            width: 350,
            margin: 35,
            borderRadius: 12,
            borderColor: '#000',
          }} 
    />

    <Button mode="contained" onPress={this.userLogin}style={{height: 50,width:200,marginLeft:110, borderRadius: 15,marginBottom:20,marginTop:50,
            borderColor: '#000', backgroundColor: '#1eaae6',fontSize:35}}>
    Login
  </Button>
<TouchableOpacity style={{height: 100,width:100,marginLeft:190, borderRadius: 15,marginBottom:20,marginTop:100,
            borderColor: '#000',fontSize:25}}>
            <Image source={require('../Screen/assets/google2.png')}></Image></TouchableOpacity>
            </View>
        )
    }
}
