import React from 'react';
import { shallow } from 'enzyme';
import PageLoading from '../../../components/Page/Loading';

test('should render PageLoading correctly', () => {
  const wrapper = shallow(<PageLoading />);
  expect(wrapper).toMatchSnapshot();
});
