import React from "react";
import { Snackbar as DefaultSnackBar } from "react-native-paper";

import { useSnackbarState } from "@atoms/snackbar";

/*
  import { useSnackbar } from '@shared/atoms/snackbar';

  usage: 
    const Snackbar = useSnackbar();
    Snackbar.open({ message: 'Your message' });
*/

const DEFAULT_DURATION = 2000;

export function Snackbar() {
  const { state, setter } = useSnackbarState();

  const onDismissSnackBar = () =>
    setter((prev) => ({ ...prev, visible: false }));

  return (
    <DefaultSnackBar
      visible={state.visible || false}
      onDismiss={onDismissSnackBar}
      duration={DEFAULT_DURATION}
    >
      {state.message}
    </DefaultSnackBar>
  );
}
