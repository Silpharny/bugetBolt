import react, { useState } from "react";

import {
  Header,
  BodyArea,
  Container,
  Logo,
  SignInView,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Input,
  Ask,
  AskHeader,
  HeaderButton,
  HeaderButtonText,
  ButtonBack,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return isLogin ? (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="#fff" />
        </ButtonBack>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <AskHeader>Ainda não tem conta?</AskHeader>
          <HeaderButton onPress={() => setIsLogin(false)}>
            <HeaderButtonText>Criar conta</HeaderButtonText>
          </HeaderButton>
        </View>
      </Header>
      <Logo source={require("../../../assets/logo.png")} />
      <BodyArea>
        <Title>Bem-Vindo!</Title>
        <SubTitle>Preencha as informações abaixo</SubTitle>

        <SignInView>
          <Input
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="silmiranda@email.com"
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="**********"
          />
          <Button onPress={() => setIsLogin(false)}>
            <ButtonText>Entrar</ButtonText>
          </Button>
          <Ask>Esqueceu a senha?</Ask>
        </SignInView>
      </BodyArea>
    </Container>
  ) : (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="#fff" />
        </ButtonBack>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <AskHeader>Já tem conta?</AskHeader>
          <HeaderButton onPress={() => setIsLogin(true)}>
            <HeaderButtonText>Fazer Login</HeaderButtonText>
          </HeaderButton>
        </View>
      </Header>
      <Logo source={require("../../../assets/logo.png")} />
      <BodyArea>
        <Title>Comece Grátis</Title>
        <SubTitle>Faça seu cadastro e aproveite</SubTitle>

        <SignInView>
          <Input
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="silmiranda@email.com"
          />
          <Input
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="silmiranda"
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="**********"
          />
          <Button onPress={() => setIsLogin(true)}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </SignInView>
      </BodyArea>
    </Container>
  );
}
