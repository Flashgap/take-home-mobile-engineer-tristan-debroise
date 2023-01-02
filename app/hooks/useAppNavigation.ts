import {
  useNavigation as useNavigationDefault,
  useRoute as useRouteDefault,
} from "@react-navigation/native";

import {
  NavigationParamsList,
  NavigationProp,
  RouteProp,
} from "@models/navigation";

export const useAppNavigation = <
  T extends keyof NavigationParamsList = never
>(): NavigationProp<T> => useNavigationDefault<NavigationProp<T>>();

export const useAppRoute = <
  T extends keyof NavigationParamsList = never
>(): RouteProp<T> => useRouteDefault<RouteProp<T>>();
