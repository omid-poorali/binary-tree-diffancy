import type * as React from 'react';

/**
 * Merge two or more reference object in order to point at one target element.
 * It is useful when you wanna create a custom component in react.
 * @param refs - Array of reference object thant you want to merge.
 * @returns Function that gets the target ref as its first argument
 */
export function useCombineRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>,
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref !== null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
