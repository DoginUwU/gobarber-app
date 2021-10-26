import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background: #ff9000;
  height: 60px;
  border-radius: 10px;
  margin-top: 8px;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;

export { Container, ButtonText };
