import { atom, useRecoilState, useSetRecoilState } from "recoil";

interface SnackbarState {
  callback?: () => void;
  visible?: boolean;
  message?: string;
  actionLabel?: string;
}

const snackbarState = atom<SnackbarState>({
  key: "@SNACKBAR", // this could be extracted in a keys file
  default: {
    callback: undefined,
    visible: false,
    message: "",
    actionLabel: "",
  },
});

export function useSnackbarState() {
  const [snackbarLocalState, setSnackbar] = useRecoilState(snackbarState);

  return { state: snackbarLocalState, setter: setSnackbar };
}

export function useSnackbar() {
  const setSnackbar = useSetRecoilState(snackbarState);

  function open(state: SnackbarState) {
    setSnackbar({ ...state, visible: true });
  }

  return { open };
}
