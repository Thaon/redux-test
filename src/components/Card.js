import styled from "styled-components";

//redux state manager
import { addToCart, removeFromCart } from "../Negozio/cartSlice";
//------------------------------

function Card({ img, title, code, qty, price, sizes }) {
  return (
    <Container>
      <Photo src={img} />
      <Title>{title}</Title>
      <Code>{code}</Code>
      <Quantity>Qty:{qty}</Quantity>
      <Price>Price: {price}</Price>

      <ActionSection>
        {sizes.length > 1 && (
          <SelectSize>
            <select name="size" id="size">
              <option value="" disabled selected hidden>
                Select size
              </option>
              {sizes.map((item, index) => {
                return (
                  <option key={index} value={item.size}>
                    {item.size + " (" + item.quantity + " pcs)"}
                  </option>
                );
              })}
            </select>
          </SelectSize>
        )}
        <AddItemButton>Add</AddItemButton>
      </ActionSection>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  justify-content: flex-start;
  padding: 10px;
  padding-bottom: 15px;
  margin-left: 10px;
  margin-top: 20px;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: hidden;
  margin-bottom: 8px;
  width: 157px;
  height: 200px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Photo = styled.img`
  max-height: 200px;
  object-fit: contain;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectSize = styled.div``;

const AddItemButton = styled.button`
  display: flex;
  justify-self: flex-end;
  width: 45px;
  height: 20px;
  background-color: #5f729d;
  border: 2px solid #5f729d;
  border-radius: 2px;
  color: white;
  font-size: 11px;
  cursor: pointer;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Code = styled.span`
  font-size: 12px;
`;

const Price = styled.span`
  font-size: 12px;
`;

const Quantity = styled.p`
  font-size: 12px;
`;
