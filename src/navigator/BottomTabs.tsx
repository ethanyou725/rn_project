import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '~/pages/Home';
import Listen from '~/pages/Listen';
import Found from '../pages/Found';
import Account from '../pages/Account';
import {RootStackParamList, RootStackNavigation} from './index';
import {RouteProp, TabNavigationState} from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'BottomTabs'>;
}

function getHeaderTitle(route: Route): string {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params || 'Home';
  const map: any = {
    Home: '首页',
    Listen: '我听',
    Found: '发现',
    Account: '我的',
  };

  return map[routeName] as string;
}

class BottomTabs extends Component<IProps> {
  componentDidUpdate() {
    const {navigation, route} = this.props;
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}>
        <Tab.Screen
          name="Home"
          options={{tabBarLabel: '首页2'}}
          component={Home}
        />
        <Tab.Screen
          name="Listen"
          options={{tabBarLabel: '我听'}}
          component={Listen}
        />
        <Tab.Screen
          name="Found"
          options={{tabBarLabel: '发现'}}
          component={Found}
        />
        <Tab.Screen
          name="Account"
          options={{tabBarLabel: '我的'}}
          component={Account}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
