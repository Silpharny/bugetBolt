import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(00, 00, 00, 0.5);
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  height: 350px;
  background-color: #f2f2f2;

  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
`;

export const HeaderModal = styled.View`
  margin: 26px;
`;

export const Close = styled.Pressable``;

export const Title = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
`;

export const BodyModal = styled.View`
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 250px;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
`;

export const Button = styled.Pressable`
  width: 250px;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  border: 0.2px solid rgba(00, 00, 00, 0.1);
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 32px;

  color: #423ed8;
`;
