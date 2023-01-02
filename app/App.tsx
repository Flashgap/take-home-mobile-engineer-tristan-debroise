import React from "react";
import { RecoilRoot } from "recoil";
import { Provider as PaperProvider } from "react-native-paper";

import { UsersProvider } from "@hooks/users";
import { RootNavigator } from "@navigation/RootNavigator";
import { Snackbar } from "@components/Snackbar";

export function App() {
  return (
    <PaperProvider>
      <RecoilRoot>
        <UsersProvider>
          <RootNavigator />
          <Snackbar />
        </UsersProvider>
      </RecoilRoot>
    </PaperProvider>
  );
}
