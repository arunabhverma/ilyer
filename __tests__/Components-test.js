import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../src/components/box';
import Card from '../src/components/card';
import CustomButton from '../src/components/customButton';
import Image from '../src/components/image';
import Text from '../src/components/text';

const box = renderer.create(<Box />).toJSON();
const card = renderer.create(<Card />).toJSON();
const customButton = renderer.create(<CustomButton />).toJSON();
const image = renderer.create(<Image />).toJSON();
const text = renderer.create(<Text />).toJSON();

test('snapshot', () => {
  expect(box).toMatchSnapshot();
  expect(card).toMatchSnapshot();
  expect(customButton).toMatchSnapshot();
  expect(image).toMatchSnapshot();
  expect(text).toMatchSnapshot();
})


jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-vector-icons/Ionicons', () => ({
  default: jest.fn(),
}))
