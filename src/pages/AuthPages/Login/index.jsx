import react, { useState } from "react";

import {
  InformationArea,
  Container,
  Logo,
  SignInView,
  Title,
  SubTitle,
  Button,
  ButtonText,
  Input,
} from "./styles";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Logo source={require("../../../assets/logo.png")} />
      <InformationArea>
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
          <SubTitle>Esqueceu a senha?</SubTitle>
        </SignInView>
      </InformationArea>
    </Container>
  );
}
