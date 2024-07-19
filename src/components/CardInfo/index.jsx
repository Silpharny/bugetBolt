import react, { useState, useEffect } from "react";
import { Container, Description, Price } from "./styles";
import { db } from "../../firebaseConfig";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Alert } from "react-native";

export default function CardInfo({ data, setUpdateScreen, updateScreen }) {
  const [colorPrice, setColorPrice] = useState("#56D645");

  useEffect(() => {
    if (data.data().balance < 0) {
      setColorPrice("#FF5C5C");
      return;
    }
  }, []);

  function deleteBalance() {
    Alert.alert(
      "Tem certeza ?",
      `Você está deletando ${data.data().description}`,
      [
        {
          text: "Sim",
          onPress: async () => {
            await deleteDoc(doc(db, "balance", data.id));
            setUpdateScreen(!updateScreen);
          },
        },
      ]
    );
  }

  return (
    <Container onLongPress={deleteBalance}>
      <Description>{data.data().description}</Description>
      <Price color={colorPrice}>{data.data().balance}</Price>
    </Container>
  );
}
