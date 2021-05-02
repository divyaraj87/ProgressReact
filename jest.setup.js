import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.sinon = sinon;
