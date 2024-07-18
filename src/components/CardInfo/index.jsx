import react, { useState, useEffect } from "react";
import { Container, Description, Price } from "./styles";
import { db } from "../../firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { Alert } from "react-native";

export default function CardInfo({ data }) {
  const [colorPrice, setColorPrice] = useState("#56D645");

  useEffect(() => {
    if (data.balance < 0) {
      setColorPrice("#FF5C5C");
      return;
    }
  }, []);

  function deleteBalance() {
    Alert.alert("Tem certeza ?", `Você está deletando ${data.description}`, [
      {
        text: "Sim",
        onPress: async () => {
          await deleteDoc(doc(db, "balance", data.uid)).then(() => {});
        },
      },
    ]);
  }

  return (
    <Container onLongPress={deleteBalance}>
      <Description>{data.description}</Description>
      <Price color={colorPrice}>{data.balance}</Price>
    </Container>
  );
}
