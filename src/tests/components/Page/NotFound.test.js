import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../../components/Page/NotFound';

test('should render PageNotFound correctly', () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
});
