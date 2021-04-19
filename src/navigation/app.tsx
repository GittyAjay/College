import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Splash from '../pages/Splash';
import AuthDashboard from '../pages/Auth';

const { Navigator, Screen } = createStackNavigator();
// headerMode='none'
const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Splash' component={Splash} />
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Home' component={Home} />
        <Screen name='Auth' component={AuthDashboard} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);