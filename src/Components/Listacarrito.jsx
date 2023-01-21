import styled from "styled-components";
import CartItem from "./CartItem";
import DebitCard from "./DebitCard";
import { useStateValue } from "./StateProvider";
export function Listacarrito() {
  const [{ cart, total }, dispatch] = useStateValue();
  return (
    <Container className="rightMenu">
      <div className="debitCardContainer">
        <div className="debitCard">
          <DebitCard />
        </div>
      </div>

      {!cart ? (
        <div className="addSomeItem">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
            alt=""
            className="emptyCart"
          />
        </div>
      ) : (
        <div className="cartCheckOutContianer">
          <div className="cartContainer">
            <SubMenuContainer />

            <div className="cartItems">
              {cart &&
                cart.map((data) => (
                  <CartItem
                    key={data.id}
                    itemId={data.id}
                    name={data.name}
                    imgSrc={data.imgSrc}
                    qty={"4"}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <p>
              <span>$ </span> {total}
            </p>
          </div>
          <button className="checkOut">Check Out</button>
        </div>
      )}
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  z-index: 1;
  transform: translateX(0%);
  top: unset;
  padding: 20px 15px;
  .debitCardContainer {
    padding: 10px;
    width: 100%;
    height: auto;
    .debitCard {
      position: relative;
      width: 100%;
      height: 170px;
      min-width: 300px;
      min-height: 170px;
      border-radius: 15px;
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f8901c;
        transform: rotate(5deg);
        border-radius: 15px;
        filter: blur(2px);
        z-index: -2;
        &::after {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            35deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.1)
          );
          border-radius: 15px;
          backdrop-filter: blur(10px);
          z-index: -1;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
  .addSomeItem {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
