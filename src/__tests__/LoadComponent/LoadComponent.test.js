import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { LoadComponent }  from '../../components/LoadComponent';

/*const getExternalScript = sinon.spy();
const mockStore = configureMockStore();
const store = mockStore({});
describe('LoadComponent', () => {
      it('should render SearchComponent', () => {
        const pageWrapper = shallow(
            <Provider store={store}>
            <LoadComponent getExternalScript={getExternalScript} />
            </Provider>
          );
          expect(pageWrapper).toMatchSnapshot();
    });
  });*/



const getExternalScriptSpy = sinon.spy();
let mockProps = {
  getExternalScript: getExternalScriptSpy
};
const mockStore = configureMockStore();
const store = mockStore({});
describe('LoadComponent', () => {
  let pageWrapper;

  describe('LoadComponent Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = mount(       
        <LoadComponent {...mockProps} />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render LoadComponent', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});




