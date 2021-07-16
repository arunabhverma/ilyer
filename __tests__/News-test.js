import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import News from '../src/containers/news/News';

const news = renderer.create(<News />).toJSON();

test('snapshot', () => {
  expect(news).toMatchSnapshot();
})

jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-vector-icons/Ionicons', () => ({
  default: jest.fn(),
}))