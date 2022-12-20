import React from "react";
import { DependencyList } from "react";

/**
 * Return a ref that gets updated when `deps` change.
 */
export function useRefWithDeps<T>(
  value: T,
  deps?: DependencyList
): React.MutableRefObject<T> {
  const localRef = React.useRef(value);

  React.useEffect(() => {
    localRef.current = value;
  }, [deps]);

  return localRef;
}
