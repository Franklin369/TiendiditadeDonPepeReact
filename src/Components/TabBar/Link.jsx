import styled from "styled-components";
import { Link } from "react-router-dom";
export function LinkItem({ title, isHome, link, icon }) {
  return (
    <Container>
      <Link className={isHome ? `li active` : ``} to={link}>
        <div className="iconcontainer">{icon}</div>
        <span>{title}</span>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  .iconcontainer {
    align-items: center;
    height:25px;
  }
  
`;
