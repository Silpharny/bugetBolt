import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f3f3f3;
`;

export const HeaderView = styled.View`
  height: 300px;
  background-color: #4f4bdb;

  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const HeaderAreaButtons = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.Pressable`
  width: 160px;
  height: 46px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #f4f4f4;
  flex-direction: row;
  gap: 5px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
