import React from 'react';
import { shallow } from 'enzyme';
import HeaderInfoBar from '../../../components/Header/InfoBar';

test('should render HeaderInfoBar correctly', () => {
  const wrapper = shallow(<HeaderInfoBar />);
  expect(wrapper).toMatchSnapshot();
});