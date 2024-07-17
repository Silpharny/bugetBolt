import react, { useState } from "react";

import {
  Button,
  Container,
  HeaderAreaButtons,
  HeaderView,
  TextButton,
} from "./styles";

import { FontAwesome6 } from "@expo/vector-icons";
import ModalView from "../../components/ModalView";
import { Modal } from "react-native";

export default function Balance() {
  const [modal, setModal] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const [balance, setBalance] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <HeaderView>
        <HeaderAreaButtons>
          <Button
            onPress={() => {
              setModal(true);
              setIsAdd(true);
            }}
          >
            <FontAwesome6 name="circle-plus" color="#00aa00" size={20} />
            <TextButton>Adicionar saldo</TextButton>
          </Button>
          <Button onPress={() => setModal(true)}>
            <FontAwesome6 name="circle-minus" color="#aa0000" size={20} />
            <TextButton>Adicionar despesa</TextButton>
          </Button>
        </HeaderAreaButtons>
      </HeaderView>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <ModalView
          setModal={setModal}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          balance={balance}
          setBalance={setBalance}
          description={description}
          setDescription={setDescription}
        />
      </Modal>
    </Container>
  );
}
