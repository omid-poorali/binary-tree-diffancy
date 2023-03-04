import { useEffect, useState } from 'react';
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './use-debounce';

jest.useFakeTimers();
describe('useDebounce hook tests', () => {
  it('should have the initial value of state', () => {
    const { result } = renderHook(() => {
      const [state] = useState('defaultValue');
      return useDebounce(state, 500);
    });

    expect(result.current).toEqual('defaultValue');
  });

  it('should update the debounce value after the delay', async () => {
    const { result, rerender } = renderHook(() => {
      const [state, setState] = useState('defaultValue');
      const debounce = useDebounce(state, 500);
      useEffect(() => {
        setState(() => 'newValue');
      }, []);
      return debounce;
    });

    expect(result.current).toEqual('defaultValue');
    act(() => {
      jest.runAllTimers();
      rerender();
    });
    expect(result.current).toEqual('newValue');
  });
});
