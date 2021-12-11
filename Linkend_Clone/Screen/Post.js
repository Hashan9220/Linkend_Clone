import React, { Component } from 'react'
import { Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import {Button,onPress  } from 'react-native-paper';
// import storage from '@react-native-firebase/storage';



export class Post extends Component {
     constructor(props){
        super(props);
        this.state = {
             
        };
             

    }


    render() {
        return (
             
  
            <View>
      



            <View style={{height:50,width:"100%",backgroundColor:"#3333"}}>
             <Text style={{marginLeft:"37%",color:"#333",fontSize:30,marginTop:5,fontWeight:"bold"}}>Add Post</Text>
            </View>
       

              

              <View style={{height:1,width:"100%",backgroundColor:"#3333"}}/>

              <View>
              <Text style={{margin:10,color:"#333",fontSize:20,marginTop:5,fontWeight:"bold"}}>Add About Post</Text>
              <TextInput label="Email" style={{margin:10,color:"#333",fontSize:12,marginTop:5,backgroundColor:"#3333"}}/>
                     
    
              </View>
           
         

               <View style={{marginTop:20}}>
              <TouchableOpacity style={{marginLeft:"25%",backgroundColor:"#1eaae6",marginTop:50,marginBottom:335,height:40,width:200,borderRadius:15}}>
              <Text style={{marginLeft:"30%",fontWeight:"bold",color:"#000",fontSize:20}}>Add Image</Text>
              </TouchableOpacity>
             </View>

              <View style={{marginTop:182,}}>
                <TouchableOpacity style={{height:60,width:"100%",backgroundColor:"#1eaae6"}}>
                <Text style={{textAlign:"center",fontWeight:"bold",color:"#000",fontSize:45}}>Post</Text>
                
                </TouchableOpacity>
              </View>
   

                 </View>

        );
    }
}


export default Post
