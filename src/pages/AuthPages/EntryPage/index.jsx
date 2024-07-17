import react from "react";
import { useNavigation } from "@react-navigation/native";
import {
  InformationArea,
  Container,
  HomeIcon,
  Logo,
  Title,
  SubTitle,
  Button,
  ButtonText,
} from "./styles";

export default function EntryPage() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo source={require("../../../assets/logo.png")} />
      <InformationArea>
        <HomeIcon
          style={{ resizeMode: "contain" }}
          source={require("../../../assets/homeIcon.png")}
        />
        <Title>Organização financeira</Title>
        <SubTitle>em poucos cliques</SubTitle>
        <Button onPress={() => navigation.navigate("Login")}>
          <ButtonText>Começar</ButtonText>
        </Button>
      </InformationArea>
    </Container>
  );
}
