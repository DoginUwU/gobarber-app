import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border: 2px solid #232129;

  flex-direction: row;
  align-items: center;

  ${(props) => props.isErrored && 'border: 2px solid #c53030;'}
  ${(props) => props.isFocused && 'border: 2px solid #ff9000;'}
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export { Container, TextInput, Icon };
