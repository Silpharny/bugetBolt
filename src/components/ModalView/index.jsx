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

import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import react, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function ModalView({
  setModal,
  isAdd,
  setIsAdd,
  balance,
  setBalance,
  description,
  setDescription,
}) {
  const { user } = useContext(AuthContext);

  async function AddBalance() {
    if (description === "" || balance === null) {
      alert("Preencha todos os campos!");
      return;
    }

    const balanceRef = doc(collection(db, "balance"));

    const data = {
      uid: user.uid,
      description: description,
      balance: +balance,
      date: new Date(),
    };

    await setDoc(balanceRef, data);

    setIsAdd(false);
    setDescription("");
    setBalance("");
    setModal(false);
  }

  async function Addcost() {
    if (description === "" || balance === null) {
      alert("Preencha todos os campos!");
      return;
    }

    const balanceRef = doc(collection(db, "balance"));

    const data = {
      uid: user.uid,
      description: description,
      balance: -balance,
      date: new Date(),
    };

    await setDoc(balanceRef, data);

    setDescription("");
    setBalance("");
    setModal(false);
  }

  return isAdd ? (
    <Container>
      <ModalContent>
        <HeaderModal>
          <Close
            onPress={() => {
              setDescription("");
              setBalance("");
              setModal(false);
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
            keyboardType="numeric"
          />
          <Button onPress={AddBalance}>
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
              setDescription("");
              setBalance("");
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
            keyboardType="numeric"
          />
          <Button onPress={Addcost}>
            <ButtonText>Despesa</ButtonText>
          </Button>
        </BodyModal>
      </ModalContent>
    </Container>
  );
}
