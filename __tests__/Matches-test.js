import 'react-native';
import React from 'react';
import ProfessionalPlayer from '../src/containers/matches/matchesDetails/ProfessionPlayer';
import Matches from '../src/containers/matches/Matches';
import renderer from 'react-test-renderer';

const matches = renderer.create(<Matches />).toJSON();
const professionalPlayer = renderer.create(<ProfessionalPlayer />).toJSON();

test('snapshot', () => {
  expect(matches).toMatchSnapshot();
  expect(professionalPlayer).toMatchSnapshot();
})


jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-vector-icons/Ionicons', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-snap-carousel', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-gesture-handler', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-switch-selector', () => ({
  default: jest.fn(),
}))

jest.mock('@react-native-async-storage/async-storage', () => ({
  default: jest.fn(),
}))

