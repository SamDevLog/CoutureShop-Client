import { AdminPanelSettings } from "@mui/icons-material";
import {
  SwipeableDrawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { User } from "../models/user";
import NavDrawerSignedInMenu from "./NavDrawerSignedInMenu";

interface Props {
  navLinks: { title: string; path: string; icon?: any }[];
  authLinks: { title: string; path: string; icon?: any }[];
  user: User | any;
  open: boolean;
  setOpen: (state: boolean) => void;
}

const NavDrawer = ({ navLinks, authLinks, user, open, setOpen }: Props) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => {}}
      onClose={() => setOpen(false)}
    >
      <Box component="nav" height="100%" width={200} bgcolor="primary.main">
        <Box textAlign="center" p={2}>
          SDL-Store
        </Box>
        <Divider />
        {user ? (
            <NavDrawerSignedInMenu user={user} />
        ) : (
          <List>
            {authLinks.map(({ title, path, icon }, index) => (
              <ListItem key={index}>
                <ListItemButton
                  sx={{"&.active": { color: "text.secondary" }}}
                  component={NavLink}
                  to={path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title.toUpperCase()}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}

        <Divider />
        <List>
          {navLinks.map(({ title, path, icon }, index) => (
            <ListItem key={index}>
              <ListItemButton
                  sx={{"&.active": { color: "text.secondary" }}}
                component={NavLink}
                to={path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title.toUpperCase()}></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          {user && user.roles?.includes("Admin") && (
            <ListItem>
              <ListItemButton
                  sx={{"&.active": { color: "text.secondary" }}}
                component={NavLink}
                to="/inventory"
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>
                  <AdminPanelSettings />
                </ListItemIcon>
                <ListItemText primary="INVENTORY"></ListItemText>
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default NavDrawer;
