import React from 'react';
import { shallow } from 'enzyme';
import HeaderSearchBar from '../../../components/Header/SearchBar';

test('should render SearchBar correctly', () => {
  const wrapper = shallow(<HeaderSearchBar />);
  expect(wrapper).toMatchSnapshot();
});

test('should set search state on input change', () => {
  const value = '123abc';
  const wrapper = shallow(<HeaderSearchBar />);
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('search')).toBe(value);
});