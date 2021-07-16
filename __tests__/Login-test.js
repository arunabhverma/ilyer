import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BirthdayCard from '../src/containers/login/personalInfo/BirthdayCard';
import GenderCard from '../src/containers/login/personalInfo/GenderCard';
import HcpCard from '../src/containers/login/personalInfo/HcpCard';

const birthdayCard = renderer.create(<BirthdayCard />).toJSON();
const genderCard = renderer.create(<GenderCard />).toJSON();
const hcpCard = renderer.create(<HcpCard />).toJSON();

test('snapshot', () => {
  expect(birthdayCard).toMatchSnapshot();
  expect(genderCard).toMatchSnapshot();
  expect(hcpCard).toMatchSnapshot();
})


jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-vector-icons/Ionicons', () => ({
  default: jest.fn(),
}))

jest.mock('@react-native-picker/picker', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-gesture-handler', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-snap-carousel', () => ({
  default: jest.fn(),
}))
