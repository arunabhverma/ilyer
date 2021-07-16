import Box from '../box';
import styled from 'styled-components/native';

const Card = styled(Box)`
  shadow-offset: 5px 5px;
  shadow-opacity: 1;
  shadow-radius: 3px;
  shadow-color: rgba(56, 146, 250, 0.23);
  elevation: 2;
  border-width: 0px;
  border-color: rgba(56, 146, 250, 0.1);
  border-bottom-width: 0;
  border-top-width: 0;
`;

export default Card;
