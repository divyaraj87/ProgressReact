import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { ProgressBar }  from '../../components/ProgressBar';

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
describe('ProgressBar', () => {
  let pageWrapper;

  describe('ProgressBar Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = mount(       
        <ProgressBar {...mockProps} />       
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
