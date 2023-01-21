import "../App.css";

import { useEffect, useState } from "react";
import Header from "../Components/Header";
import MenuContainer from "../Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "../Components/BannerName";
import MenuCard from "../Components/MenuCard";
import { MenuItems, Items } from "../Components/Data";
import ItemCard from "../Components/ItemCard";
import DebitCard from "../Components/DebitCard";
import SubMenuContainer from "../Components/SubMenuContainer";
import CartItem from "../Components/CartItem";
import { useStateValue } from "../Components/StateProvider";
import { pruebas } from "../api/categorias";
import { db } from "../api/firebase.config";
import { Mostrarprodtodos, mostrarPoridcategoria } from "../api/productos";
import { async } from "@firebase/util";
import swal from "sweetalert";
import styled from "styled-components";
import { Navbarbotton } from "../Components/Navbarbotton";
import {Listacarrito} from "../Components/Listacarrito"
export function Home() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [idcategoria, setIdcategoria] = useState("null");
  const mostrarcategorias = async () => {
    const docs = await pruebas();
    setCategorias([...docs]);
  };
  const mostrarprodtodos = async () => {
    const docs = await Mostrarprodtodos();
    setProductos([...docs]);
  };
  const mostrarprodXcategoria = async () => {
    const docs = await mostrarPoridcategoria(idcategoria);

    setProductos([...docs]);
  };
  useEffect(() => {
    idcategoria == "null" ? mostrarprodtodos() : mostrarprodXcategoria();
  }, [idcategoria]);

  useEffect(() => {
    mostrarcategorias();
    // mostrarprodtodos();

    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);

  const setData = async (itemId) => {
    // swal(itemId);
    setMainData(Items.filter((element) => element.itemId == itemId));
    setIdcategoria(itemId);
  };

  return (
    <Container>
      {/* Header section */}
      <Header />

      {/* Left menu */}
      {/* <div className="leftMenu">
        <Navbarbotton />
      </div> */}
      <main>
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
            <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
            <img
              src="https://i.ibb.co/MfZZv1h/pngwing-com-2.png"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <Categorias className="rowContainer">
              {categorias.map((item, key) => (
                <div key={item.id} onClick={() => setData(item.id)}>
                  <MenuCard
                    imgSrc={item.imagen}
                    name={item.descripcion}
                    isActive={item.id == "1" ? true : false}
                  />
                </div>
              ))}
            </Categorias>
            <div></div>

            <div className="dishItemContainer">
              {productos.map((data, key) => (
                <div key={data.id}>
                  <ItemCard
                    imagen={data.imagen}
                    descripcion={data.descripcion}
                    precio={data.precio}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
       <Listacarrito/>
      </main>
    </Container>
  );
}
const Container =styled.div`
  
`
const Categorias = styled.div`
  background: rgb(253, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 0.8015581232492998) 9%,
    rgba(252, 176, 69, 1) 100%
  );
  text-align: center;
  margin-top: 30px;

  padding: 20px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 15px 0px;
  button {
    border: none;
    outline: none;
    padding: 7px 20px;
    background: transparent;
    color: #fff;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .foodBtnActive {
    background: #fff !important;
    border-radius: 5px;
    color: #df2020 !important;
  }
`;


