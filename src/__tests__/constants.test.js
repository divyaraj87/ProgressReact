import * as ActionTypes from '../constants';

describe('ActionTypes', () => {
  it('should have the same value as the variable name', () => {
    Object.keys(ActionTypes).forEach(item => {
      expect(item).toBe(item);
    });
  });
});