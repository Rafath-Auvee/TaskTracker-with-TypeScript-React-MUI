import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  Badge,
  Stack,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";

import {  Mail, Notifications, Pets } from "@mui/icons-material";

const StyleNavbar = styled(Toolbar)({
  display: "flex",
  // flex-direction: "column",
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        
        // spacing={12}
      >
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
          <Badge badgeContent={4} color="error" sx={{ mr: "2rem" }}>
            <AssignmentIcon />
          </Badge>
        </Icons>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
