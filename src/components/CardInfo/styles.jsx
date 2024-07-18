import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 300px;
  height: 60px;
  background-color: #fff;
  margin-bottom: 22px;
  padding: 0px 20px;
  border-radius: 8px;
  border: 1px solid rgba(00, 00, 00, 0.09);
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Description = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export const Price = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.color};
`;
