import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";
function Header() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <Container>
      <Logo src="https://i.ibb.co/6wrShT2/pngwing-com-1.png" alt="" />

      <Frase>Cualquiera puede programar</Frase>

      {/* <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
            alt=""
          />
        </div>
        <h2 className="userName">Cualquiera puede programar</h2>
      </div> */}

      <div className="toggleMenu">
        {/* <BarChart className="toggleIcon" /> */}
      </div>
    </Container>
  );
}
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  height: 60px;
  width: 100%;
  background: #f9f7f7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.img`
  min-width: 40px;
  width: 40px;
  margin-top: 20px;
`;

const Frase = styled.div`
  color: #ee3a16; ;
`;
export default Header;
