import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const StyleNavbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyleNavbar>
        <Typography variant="h6" color="">
          Task Track
        </Typography>
      </StyleNavbar>
    </AppBar>
  );
};

export default Navbar;
