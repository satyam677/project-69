import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideHistoryScreen from "../screens/RideHistory";
import RideScreen from "../screens/Ride";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="RideHistory" component={RideHistoryScreen} />
          <Tab.Screen name="Ride" component={RideScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}