import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@screens/HomeScreen/Home";
import { ProfileScreen } from "@screens/ProfileScreen/Profile";
import { NavigationParamsList } from "@models/navigation";

const Stack = createNativeStackNavigator<NavigationParamsList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
