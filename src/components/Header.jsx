import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material/styles";

import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import NewHeader from "./NewHeader";

const Header = () => {
  const theme = useTheme();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Department of Electrical
          </ListSubheader>
        }
      >
        <ListItemButton onClick={toggleDrawer(anchor, false)}>
          <Link className="nav-link" to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={handleClick1}>
          <ListItemText primary="About" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/about">
                <ListItemText primary="Department" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/admministration">
                <ListItemText primary="Administration" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/contact">
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/gallery">
                <ListItemText primary="Gallery" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="People" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/faculty">
                <ListItemText primary="Faculty" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/Staff">
                <ListItemText primary="Staff" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/PhD">
                <ListItemText primary="PhD Student" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/Mtech">
                <ListItemText primary="Mtech Student" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/Btech">
                <ListItemText primary="Btech Student" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/Alumni">
                <ListItemText primary="Alumni" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick3}>
          <ListItemText primary="Research" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/research">
                <ListItemText primary="Research Areas" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/labs">
                <ListItemText primary="Laboratories" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/">
                <ListItemText primary="Recent Publications" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/">
                <ListItemText primary="Projects" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick4}>
          <ListItemText primary="Academics" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/about">
                <ListItemText primary="Programs" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/admministration">
                <ListItemText primary="Courses" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/contact">
                <ListItemText primary="Scholarships" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/gallery">
                <ListItemText primary="Awards and Recognitions" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick5}>
          <ListItemText primary="Open Positions" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/about">
                <ListItemText primary="Faculty Position" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link
                className="nav-link"
                to="https://academic.iiti.ac.in/phdadvt.php"
              >
                <ListItemText primary="PhD Positions" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/contact">
                <ListItemText primary="Project Positions" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  ////////////////////////////////////////return////////////////////////////////
  return (
    <>
      <NewHeader />
      <AppBar position="static" color="four">
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            px: 1,
            py: 1,
          }}
        >
          <Box>
            <img src="/Images/white-logo.png" alt="loggg" width="50" />
          </Box>
          <Box sx={{ px: 1 }}>
            <Typography fontSize="0.7rem" color="white">
              Department Of Electical Engineering
              <br />
            </Typography>
            <Typography fontSize="0.5rem" color="white">
              Indian Institute Of Technology Indore
            </Typography>
          </Box>
          <IconButton
            onClick={toggleDrawer("left", true)}
            sx={{ ml: "auto", color: "white" }}
          >
            <MenuIcon color="secondary" />
          </IconButton>
        </Box>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
            backgroundColor: "#9d0455",
            width: "100%",
          },
        }}
      >
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </Box>
    </>
  );
};
export default Header;
