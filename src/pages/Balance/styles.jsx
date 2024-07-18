import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
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
  margin-top: 30px;
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

export const BalanceData = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: 700;
`;

export const TotalBalance = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: 400;
  margin-top: 12px;
`;

export const BalanceCard = styled.FlatList`
  flex: 1;
  position: relative;
  top: -40px;
`;
