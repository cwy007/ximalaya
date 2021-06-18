import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '@/pages/Home';
import Home from './index';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';

// 定义标签导航器中有哪些页面
export type BottomTabParamList = {
  // Home: undefined;
  Test: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

class BottomTabs extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
          <Tab.Screen
            name="Test"
            component={Home}
            options={{tabBarLabel: '首页'}}
          />
          <Tab.Screen
            name="Listen"
            component={Listen}
            options={{tabBarLabel: '我听'}}
          />
          <Tab.Screen
            name="Found"
            component={Found}
            options={{tabBarLabel: '发现'}}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{tabBarLabel: '我的'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default BottomTabs;
