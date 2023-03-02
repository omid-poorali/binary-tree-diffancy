import { useRef, useState, useCallback, useEffect } from "react";

export interface UseControlledProps<T = unknown> {
	controlled: T | undefined;
	default: T | undefined;
}

/**
 * Custom React hook to manage value of input according to the given props (uncontrolled to controlled)
 * @param object -  value and default value of input as object (if there is a value prop it would be controlled type)
 * @returns Array that first item is value and second item is the setter method and would change value if is controlled type 
 */
export const useControlled = <T = unknown>({
	controlled,
	default: defaultValueProp,
}: UseControlledProps<T>): [T, (newValue: T) => void] => {

	const isDevMode = useRef(process.env.NODE_ENV !== "production");

	const isControlled = useRef(controlled !== undefined);

	const defaultValue = useRef(defaultValueProp);

	const [state, setState] = useState(() => {
		if (isControlled.current) {
			return controlled as T;
		}

		return defaultValue.current as T;
	});


	useEffect(() => {
		if (isDevMode.current) {
			if (isControlled.current !== (controlled !== undefined)) {
				console.error(`elements should not switch from uncontrolled to controlled (or vice versa).
				  Decide between using a controlled or uncontrolled`);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDevMode, isControlled, JSON.stringify(controlled)]);


	useEffect(() => {
		if (isDevMode) {
			if (!isControlled.current) {
				if (defaultValue.current !== defaultValueProp) {
					console.error(`changing the default state of an uncontrolled after being initialized. 
					To suppress this warning opt to use a controlled`);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDevMode, isControlled, JSON.stringify(defaultValueProp)]);


	const setValueIfUncontrolled = useCallback((newValue: T) => {
		if (!isControlled.current) {
			setState(() => newValue);
		}
	}, []);

	return [state, setValueIfUncontrolled];
};
