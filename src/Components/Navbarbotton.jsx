import { useRef } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "./Navbarbotton.css";
import { LinkItem } from "./TabBar/Link";
import { NavLink, Navigate } from 
"react-router-dom";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
export function Navbarbotton() {
  const [estado, setEstado] = useState(false);

  const Navegar = () => {
    <Navigate to={"/prueba"} />;
  };
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu a");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <Container>
      <ul id="menu">
        <LinkItem title="Pto venta" isHome link={"/"} icon={<MdOutlineAnalytics/>}/>
        <LinkItem title="Productos" link={"/prueba"} icon={<MdOutlineAnalytics/>} />
      </ul>
    </Container>
  );
}
const linksArray = [
  {
    label: "Home",
    icon: <MdOutlineAnalytics />,
    to: "/",
  },
  {
    label: "Estadisticas",
    icon: <MdOutlineAnalytics />,
    to: "/ingresos",
  },
  {
    label: "Productos",
    icon: <MdOutlineAnalytics />,
    to: "/productos",
  },
  {
    label: "Diagramas",
    icon: <MdOutlineAnalytics />,
    to: "/diagramas",
  },
  {
    label: "Reportes",
    icon: <MdOutlineAnalytics />,
    to: "/reportes",
  },
];
const Container = styled.div`
  margin-bottom: 1rem;
`;
