import react, { useState, useContext } from "react";

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

import { ActivityIndicator, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../../contexts/authContext";

export default function Login() {
  const { Register, Login, authLoading } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function LoginUser() {
    Login(email, password);

    setEmail("");
    setPassword("");
    return;
  }
  function RegisterUser() {
    Register(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
    return;
  }

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
            secureTextEntry={true}
            placeholder="**********"
          />
          <Button onPress={LoginUser}>
            {authLoading ? (
              <View
                style={{
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size={40} color="#3530D5" />
              </View>
            ) : (
              <ButtonText>Entrar</ButtonText>
            )}
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
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="silmiranda"
          />
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
            secureTextEntry={true}
            placeholder="**********"
          />
          <Button onPress={RegisterUser}>
            {authLoading ? (
              <View
                style={{
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size={40} color="#3530D5" />
              </View>
            ) : (
              <ButtonText>Cadastrar</ButtonText>
            )}
          </Button>
        </SignInView>
      </BodyArea>
    </Container>
  );
}
