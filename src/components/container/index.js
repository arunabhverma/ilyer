import styled from 'styled-components/native';
import Box from '../box';
import { s } from 'react-native-size-matters';
import theme from "@theme";

const Container = styled(Box)`
  flex: 1;
  padding-left: ${s(16)}px;
  padding-right: ${s(16)}px;
  align-items: center;
  justify-content: center;
  
`;

export default Container;
