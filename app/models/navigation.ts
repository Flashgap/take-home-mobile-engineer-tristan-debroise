import { RouteProp as DefaultRouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ProfileScreenProps } from "@screens/ProfileScreen/Profile";

/**
 * the key is the name of the screen, the value the props of the screen
 */
export type NavigationParamsList = {
  Home: undefined;
  ProfileDetails: ProfileScreenProps;
};

export type NavigationProp<
  T extends keyof NavigationParamsList | never = never
> = NativeStackNavigationProp<NavigationParamsList, T>;

export type RouteProp<T extends keyof NavigationParamsList> = DefaultRouteProp<
  NavigationParamsList,
  T
>;
