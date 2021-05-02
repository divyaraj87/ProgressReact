import { selectChange, progressChange, progressLoad, fieldLoad, responseMap } from '../actions';

describe('Actions', () => {
    it('call selectChange', () => {
      expect(selectChange());
    });
    it('call progressChange', () => {
        expect(progressChange(10));
      });
    it('call progressLoad', () => {
        expect(progressLoad(('progressBar1', 10, 10, '#ff0')));
    });
    it('call fieldLoad', () => {
        expect(fieldLoad('progressBar1', 10));
    });
    it('call responseMap', () => {
        expect(responseMap('123'));
    });
});