import React, { Component } from 'react'
import { Text, View,FlatList,Image,TouchableOpacity } from 'react-native'

export class Network extends Component {
    render() {
        return (
            <View>
                    <FlatList
     
        // refreshControl={
        // <RefreshControl refreshing ={isLoading} onRefresh={() =>{
        //   setLoading(true)
        //   setLoading(false)
        // }}/>
        // }
          data={["1", "2", "3","4","5","6","7","8","9"]}
          renderItem={({item}) => 
            <View
              style={{
                margin: 10,
                borderRadius: 10,
                padding: 10,
                elevation: 5,
                backgroundcolor: 'white',
                shadowColor: '#333',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.5,
                shadowRadius: 2,
              }}>
              <View style={{flexDirection: 'row', alignItem: 'center',padding: 10}}>
                <Image
                  source={{
                    uri: 'https://i.insider.com/60ba4870e459cb0018a2c382?width=1136&format=jpeg',
                  }}
                  style={{height: 50, width: 50, borderRadius: 50,padding:10,marginTop:10}}
                />
                <View style={{marginLeft: 10}}>
                <TouchableOpacity style={{  elevation: 5,backgroundColor:'#2bc9ed',marginLeft:'40%',marginTop:15,height: 40, width: 80,borderRadius: 10,}}><Text style={{fontSize: 20, color: '#000',left:10,top:5}}>Connet</Text></TouchableOpacity>
                  <Text style={{fontSize: 20, color: '#000',marginTop:-35}}>Sundar</Text>
                             
                  
                </View>
                 <View >
                <TouchableOpacity style={{ backgroundColor:'#d8e9ed',marginTop:15,height: 40, width: 80,borderRadius: 10, elevation: 5,shadowOpacity: 0.5,
                shadowRadius: 2,shadowOffset: {width: 0, height: 1},}}><Text style={{fontSize: 20, color: '#000',left:10,top:5}}>Remove</Text></TouchableOpacity>
                  
                   
                 
                </View>
                
              </View>

           


              
              
              
              
            
            </View>}
          keyExtractor={item => item}>
          
          </FlatList>
            </View>
        );
    }
}

export default Network
