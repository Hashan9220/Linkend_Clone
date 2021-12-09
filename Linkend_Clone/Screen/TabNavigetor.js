import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TabNavigetor extends Component {
    render() {
        return (
          <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
          }}>
          <Tab.Screen
            name="Home"
             
            component={AppHome}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItem: 'center', justifycontent: 'center'}}>
                  <Image
                    source={require('./assets/Home.png')}
                    style={{tintColor: focused ? '#5e6660' : '#0a0a0a'}}
                  />
                  <Text style={{color: 'black', fontSize: 10, bottom: 0}}>
                    HOME
                  </Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Network"
            component={Network}
            options={{
                headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItem: 'center', justifycontent: 'center',left:10}}>
                  <Image
                    source={require('./assets/network.png')}
                    style={{tintColor: focused ? '#5e6660' : '#0a0a0a'}}
                  />
                  <Text style={{color: 'black', fontSize: 10, bottom: 0,left:-10}}>
                    My Network
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen 
            name="Post"
            component={Post}
            options={{
                headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItem: 'center', justifycontent: 'center'}}>
                  <Image
                    source={require('./assets/post.png')}
                    style={{tintColor: focused ? '#5e6660' : '#0a0a0a'}}
                  />
                  <Text style={{color: 'black', fontSize: 10, bottom: 0,left:2}}>
                    Post
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
                headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItem: 'center', justifycontent: 'center',left:10}}>
                  <Image
                    source={require('./assets/notification.png')}
                    style={{tintColor: focused ? '#5e6660' : '#0a0a0a'}}
                  />
                  <Text style={{color: 'black', fontSize: 10, bottom: 0,left:-10}}>
                    Notification
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Jobs"
            component={Jobs}
            options={{
                headerShown: false,
              tabBarIcon: ({focused}) => (
                <View style={{alignItem: 'center', justifycontent: 'center'}}>
                  <Image
                    source={require('./assets/job.png')}
                    style={{tintColor: focused ? '#5e6660' : '#0a0a0a'}}
                  />
                  <Text style={{color: 'black', fontSize: 10, bottom: 0,left:5}}>
                    Job
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
        )
    }
}
