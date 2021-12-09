import React, {Component} from 'react';
import {Text, View, FlatList, Image,TouchableOpacity,RefreshControl,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 

export class AppHome extends Component {
 
  // const [refreshing, isLoading, setRefreshing] = useState([]);
  render() {
      
    return (
  

    
      <View>
            <View style={{height:60,backgroundColor:'#1eaae6'}}>
         {/* <View style={{width:50, backgroundcolor:'#000', margin:5,padding:5}, backgroundcolor:'#c45653',justifyContent:'center',padding:10}>
         
         </View> */}
        
      <View style={{height:35,padding:10,marginTop:5}}>
      <Image source={require('../Screen/assets/ppic.png')}/>
      <TextInput  placeholder="Search....." placeholderTextColor={'#2a2e30'} style={{height:35,width:320,marginLeft:50, backgroundColor: '#b2cbd6', color: '#000',marginTop:-35, 
    borderRadius: 10,}}></TextInput>
      </View>
      
      </View>
        <FlatList
     
        // refreshControl={
        // <RefreshControl refreshing ={isLoading} onRefresh={() =>{
        //   setLoading(true)
        //   setLoading(false)
        // }}/>
        // }
          data={["1", "2", "3","4"]}
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
                    uri: 'https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg',
                  }}
                  style={{height: 50, width: 50, borderRadius: 50,padding:10}}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 20, color: '#000'}}>Bill Gates</Text>
                  <Text style={{fontSize: 12, color: '#000'}}>
                    {new Date().toString().substring(0, 16)}
                  </Text>
                </View>
              </View>

              <Image
                source={{
                  uri: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2019/05/How-much-to-feed-a-puppy-01.jpg',
                }}
              style={{height:180}}/>

              <Text style={{margin:10,color:"#333",fontSize:12,marginTop:5}}>Caption dog get lunch </Text>

              <View style={{height:1,width:"100%",backgroundcolor:"#3333"}}/>

              <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{flex:1,margin:10}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"#000"}}>Like</Text>
              </TouchableOpacity>

              <View style={{height:"100%",width:1,backgroundcolor:"#3333"}}/>
                <TouchableOpacity style={{flex:1,margin:10}}>
                <Text style={{textAlign:"center",fontWeight:"bold",color:"#000"}}>Comment</Text>
                
                </TouchableOpacity>
              </View>
              
            
            </View>}
          keyExtractor={item => item}>
          
          </FlatList>
          {/* <TouchableOpacity style={{position:"absolute",right:30,bottom:30,backgroundcolor:"#f66",borderRadius:30,}}>
            <Image source={require('../Screen/assets/Puls.png')} style={{margin:2}}/>
          </TouchableOpacity> */}
      </View>
    );
  }
}

export default AppHome;
