import React from "react";
import { AppBar, Toolbar, Typography, styled} from "@mui/material";
import { Box } from '@mui/system';
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const StyleNavbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyleNavbar>
        <Typography
          variant="h6"
          color=""
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Task Tracker
        </Typography>
        <TaskAltIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyleNavbar>
      <Icons>

      </Icons>
    </AppBar>
  );
};

export default Navbar;
