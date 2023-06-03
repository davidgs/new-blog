import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export function useToggle(
  defaultValue?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue];
}

export function useForceUpdate(): () => void {
  const [, setValue] = useState(0);

  return useCallback(() => setValue((value) => value + 1), []);
}


