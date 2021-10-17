import { Container, Toolbar } from "@mui/material";
import React from "react";
import { HeaderAppBar, HeaderLogo } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logos/logo.svg" alt={"E-Diaristas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
