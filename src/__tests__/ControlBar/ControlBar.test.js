import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { ControlBar }  from '../../components/ControlBar';

const dispatchSelectChangeSpy = sinon.spy();
const dispatchProgressChangeSpy = sinon.spy();
let mockProps = {
    todos:{
        buttons: ['10', '20', '30', '40'],
        progressBar3: {
            completed: 10
        }
    },
    dispatchSelectChange: dispatchSelectChangeSpy,
    dispatchProgressChange: dispatchProgressChangeSpy
};
const mockStore = configureMockStore();
const store = mockStore({});
describe('ControlBar', () => {
  let pageWrapper;

  describe('ControlBar Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = mount(       
        <ControlBar {...mockProps} />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render App', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
