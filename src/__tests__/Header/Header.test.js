import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { Header }  from '../../components/Header';

const dispatchSelectChangeSpy = sinon.spy();
const dispatchProgressChangeSpy = sinon.spy();
let mockProps = {
    bgcolor: '#000',
    completed: 10,
    width: 10
};
const mockStore = configureMockStore();
const store = mockStore({});
describe('Header', () => {
  let pageWrapper;

  describe('Header Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = mount(       
        <Header />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render Header', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
