import {
  BodyModal,
  Button,
  ButtonText,
  Close,
  Container,
  HeaderModal,
  Input,
  ModalContent,
  Title,
} from "./styles";

import { Feather } from "@expo/vector-icons";

export default function ModalView({
  setModal,
  isAdd,
  setIsAdd,
  balance,
  setBalance,
  description,
  setDescription,
}) {
  return isAdd ? (
    <Container>
      <ModalContent>
        <HeaderModal>
          <Close
            onPress={() => {
              setModal(false);
              setIsAdd(false);
            }}
          >
            <Feather name="x" size={30} color="#000" />
          </Close>
        </HeaderModal>
        <Title>Adicionar Saldo</Title>
        <BodyModal>
          <Input
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Mercado"
          />
          <Input
            value={balance}
            onChangeText={(text) => setBalance(text)}
            placeholder="R$1.200"
          />
          <Button>
            <ButtonText>Saldo</ButtonText>
          </Button>
        </BodyModal>
      </ModalContent>
    </Container>
  ) : (
    <Container>
      <ModalContent>
        <HeaderModal>
          <Close
            onPress={() => {
              setModal(false);
            }}
          >
            <Feather name="x" size={30} color="#000" />
          </Close>
        </HeaderModal>
        <Title>Adicionar Despesa</Title>
        <BodyModal>
          <Input
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Mercado"
          />
          <Input
            value={balance}
            onChangeText={(text) => setBalance(text)}
            placeholder="R$1.200"
          />
          <Button>
            <ButtonText>Despesa</ButtonText>
          </Button>
        </BodyModal>
      </ModalContent>
    </Container>
  );
}
