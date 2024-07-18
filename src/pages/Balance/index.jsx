import react, { useEffect, useState, useContext } from "react";

import {
  Button,
  Container,
  HeaderAreaButtons,
  HeaderView,
  TextButton,
  BalanceData,
  BalanceCard,
  Title,
  TotalBalance,
} from "./styles";

import { FontAwesome6 } from "@expo/vector-icons";
import ModalView from "../../components/ModalView";
import { Modal } from "react-native";
import CardInfo from "../../components/CardInfo";

import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { AuthContext } from "../../contexts/authContext";

export default function Balance() {
  const [modal, setModal] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const [balance, setBalance] = useState(null);
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);

  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const q = query(
      collection(db, "balance"),
      where("uid", "==", user.uid)
      // orderBy("date", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let total = [];
      let datas = [];
      snapshot.forEach((i) => {
        total.push(i.data().balance);

        datas.push(i);
      });
      setData(datas);

      let sum = total.reduce((pv, cv) => pv + cv, 0);

      setUser({
        ...user,
        total: sum,
      });

      return user;
    });
  }, []);

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

        <BalanceData>
          <Title>Total Gasto</Title>
          <TotalBalance>R${user.total}</TotalBalance>
        </BalanceData>
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

      <BalanceCard
        data={data}
        renderItem={({ item }) => <CardInfo data={item.data()} />}
        keyExtractor={(item) => item.id}
        initialNumToRender={7}
      />
    </Container>
  );
}
