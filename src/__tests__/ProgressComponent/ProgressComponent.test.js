import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { ProgressComponent }  from '../../components/ProgressComponent';

const dispatchSelectChangeSpy = sinon.spy();
const dispatchProgressChangeSpy = sinon.spy();
let mockProps = {
    bgcolor: '#000',
    completed: 10,
    width: 10
};
const mockStore = configureMockStore();
const store = mockStore({});
describe('ProgressComponent', () => {
  let pageWrapper;

  describe('ProgressComponent Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = mount(       
        <ProgressComponent {...mockProps} />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render ProgressComponent', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
