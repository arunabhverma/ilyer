import 'react-native';
import React from 'react';
import CancelParticipation from '../src/containers/play/widgets/CancelParticipation';
import HoleBoxMulti from '../src/containers/play/widgets/HoleBoxMulti';
import HoleBoxSingle from '../src/containers/play/widgets/HoleBoxSingle';
import NotRefund from '../src/containers/play/widgets/NotRefund';
import RefundRequestSent from '../src/containers/play/widgets/RefundRequestSent';
import Info from '../src/containers/play/tournamentDetails/Info';
import renderer from 'react-test-renderer';

const cancelParticipation = renderer.create(<CancelParticipation />).toJSON();
const holeBoxMulti = renderer.create(<HoleBoxMulti />).toJSON();
const holeBoxSingle = renderer.create(<HoleBoxSingle />).toJSON();
const notRefund = renderer.create(<NotRefund />).toJSON();
const refundRequestSent = renderer.create(<RefundRequestSent />).toJSON();
const info = renderer.create(<Info />).toJSON();

test('snapshot', () => {
  expect(cancelParticipation).toMatchSnapshot();
  expect(holeBoxMulti).toMatchSnapshot();;
  expect(holeBoxSingle).toMatchSnapshot();
  expect(notRefund).toMatchSnapshot();
  expect(refundRequestSent).toMatchSnapshot();
  expect(info).toMatchSnapshot();
})

jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-vector-icons/Ionicons', () => ({
  default: jest.fn(),
  ToolbarAndroid: 'ToolbarAndroid'
}))

jest.mock('react-native-vector-icons/AntDesign', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-swipe-list-view', () => ({
  default: jest.fn(),
}))
