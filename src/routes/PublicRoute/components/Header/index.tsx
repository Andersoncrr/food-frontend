import { Avatar, Button } from "antd";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledRow } from "../../styles/headerStyles";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Avatar size={45} src={<img src={logo} />} />
      <StyledRow justify="end">
        <Button
          style={{ color: "white" }}
          type="text"
          onClick={() => navigate("/auth")}
        >
          Iniciar Sesión
        </Button>
        <Button
          style={{ color: "white" }}
          type="text"
          onClick={() => navigate("/create-account")}
        >
          Crear Cuenta
        </Button>
      </StyledRow>
    </StyledHeader>
  );
};
