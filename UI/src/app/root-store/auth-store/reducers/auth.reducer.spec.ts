import { reducer, initialState } from './auth.reducer';

describe('Auth Reducer', (): void => {
  describe('an unknown action', (): void => {
    it('should return the previous state', (): void => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
