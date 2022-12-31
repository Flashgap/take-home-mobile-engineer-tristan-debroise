import React from "react";

import { UsersProvider } from "@hooks/users";
import { RootNavigator } from "@navigation/RootNavigator";

export function App() {
  return (
    <UsersProvider>
      <RootNavigator />
    </UsersProvider>
  );
}
