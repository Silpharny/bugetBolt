import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const ContentArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const Logo = styled.Image`
  width: 190px;
  height: 130px;
  align-self: center;
  margin-bottom: 130px;
`;

export const InformationArea = styled.View`
  height: 440px;
  background-color: #fff;
  align-items: center;
  gap: 8px;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
`;

export const HomeIcon = styled.Image`
  width: 200px;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #808080;
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

export const Container = ({ children }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#3530D5", "#4F4BDB", "#6966E0"]}
    >
      <ContentArea>{children}</ContentArea>
    </LinearGradient>
  );
};
