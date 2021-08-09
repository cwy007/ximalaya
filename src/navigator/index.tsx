import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
// import Home from '@/pages/Home';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import {Platform, StatusBar, StyleSheet} from 'react-native';

export type RootStackParamList = {
  // Home: undefined;
  BottomTabs: {
    screen?: string;
  };
  // 页面名称&页面接收的参数
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // 标题栏动画
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 内容部分的动画
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            // headerStatusBarHeight: StatusBar.currentHeight,
            headerStyle: {
              backgroundColor: 'red',
              ...Platform.select({
                android: {
                  elevation: 0, // 仰角
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerTitle: '首页'}}
          />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
