import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
function MenuCard({ imgSrc, name, isActive }) {
  return (
    <Container>
      <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
        <div className="imgBox">
          <img src={imgSrc} alt="" />
        </div>
        <h3>{name}</h3>
      </div>
    </Container>
  );
}
const Container = styled.div`

  .rowMenuCard {
    width: 80px;
    min-width: 80px;

    border-radius: 10px;
  background-color:transparent;
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    transition: 0.5s;
    cursor: pointer;
    h3 {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      transition: 0.5s;
    }
    .imgBox img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    &:hover {
      background: #f8bb7d;
      h3 {
        color: #6c06d3;
      }
    }
    &.active {
      background: #fcfcfc;
      h3 {
        color: #252327;
      }
    }
    .imgBox {
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      overflow: hidden;
    }
  }
`;

export default MenuCard;
