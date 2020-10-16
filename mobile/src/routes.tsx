import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
const {  Navigator, Screen } = createStackNavigator();

export default function Routes () {
    return (
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="OrphanagesMap" component={OrphanagesMap}></Screen>
            <Screen name="OrphanageDetails" component={OrphanageDetails}></Screen>
        </Navigator>
      </NavigationContainer>
    );
}