import React from 'react';
import { shallow } from 'enzyme';
import PageHome from '../../../components/Page/Home';

test('should render PageHome correctly', () => {
  const wrapper = shallow(<PageHome />);
  expect(wrapper).toMatchSnapshot();
});
