import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const ContentArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonBack = styled.Pressable``;

export const AskHeader = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const HeaderButton = styled.Pressable`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 8px;
`;

export const HeaderButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Logo = styled.Image`
  width: 190px;
  height: 130px;
  align-self: center;
`;

export const BodyArea = styled.View`
  height: 440px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
`;

export const SignInView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #808080;
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

export const Ask = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #808080;
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
