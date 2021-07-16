import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FaqDetails from '../src/containers/profile/faq/FaqDetails';
import PlayedTournamentPlayers from '../src/containers/profile/playedTournament/Players';
import DatePicker from '../src/containers/profile/widgets/DatePicker';

const faqDetails = renderer.create(<FaqDetails />).toJSON();
const playedTournamentPlayers = renderer.create(<PlayedTournamentPlayers />).toJSON();
const datePicker = renderer.create(<DatePicker />).toJSON();

test('snapshot', () => {
  expect(faqDetails).toMatchSnapshot();
  expect(playedTournamentPlayers).toMatchSnapshot();
  expect(datePicker).toMatchSnapshot();
});

jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-vector-icons/Ionicons', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-swipe-list-view', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-raw-bottom-sheet', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-snap-carousel', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-date-picker', () => ({
  default: jest.fn(),
}))


jest.mock('react-native-material-textfield', () => ({
  default: jest.fn(),
}))
