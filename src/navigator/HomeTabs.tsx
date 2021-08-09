import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import {Dimensions, Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialLayout={{width: Dimensions.get('window').width}}
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: {width: '100%'},
          tabBarItemStyle: {width: 80},
          tabBarIndicatorStyle: {
            width: 20,
            height: 4,
            marginRight: 30,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          tabBarActiveTintColor: '#f86442',
          tabBarInactiveTintColor: '#333',
          lazy: true,
          lazyPlaceholder: () => <Text>加载中...</Text>,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '推荐'}}
        />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
