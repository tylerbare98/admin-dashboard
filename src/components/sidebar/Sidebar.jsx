import * as React from "react";
import Badge from '@mui/material/Badge';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Sidebar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Switch, FormControlLabel } from "@material-ui/core";
import ListSubheader from "@mui/material/ListSubheader";
import profilepic from '../../images/ProfilePic.jpg'
import {
  Dashboard,
  Person,
  Store,
  CreditCard,
  LocalShipping,
  Psychology,
  AccountCircle,
  Logout,
  BarChart,
  Notifications,
  SettingsSystemDaydream,
  Settings,
  Language,
  NotificationsNoneOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  ChatBubbleOutline,
  ListOutlined,
} from "@mui/icons-material";

const drawerWidth = 240;

export default function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar className={styles.top}>
        <Typography color="primary" variant="h5">
          Administration
        </Typography>
      </Toolbar>

      <Divider />
      <List subheader={<ListSubheader>MAIN</ListSubheader>}>
        {[["Dashboard", <Dashboard />]].map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>LISTS</ListSubheader>}>
        {[
          ["Users", <Person />],
          ["Products", <Store />],
          ["Orders", <CreditCard />],
          ["Delivery", <LocalShipping />],
        ].map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>USEFUL</ListSubheader>}>
        {[
          ["Stats", <BarChart />],
          ["Notifications", <Notifications />],
        ].map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>SERVICE</ListSubheader>}>
        {[
          ["System Health", <SettingsSystemDaydream />],
          ["Logs", <Psychology />],
          ["Settings", <Settings />],
        ].map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>USER</ListSubheader>}>
        {[
          ["Profile", <AccountCircle />],
          ["Logout", <Logout />],
        ].map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div className={styles.bottom}>
          <FormControlLabel
            control={<Switch checked={true} name="darkMode" color="primary" />}
            label={"Dark"}
          />
        </div>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <SearchBar />
          {/* below is the right side stuff of navbar */}
          <div className={styles.rightSideNavBar}>
            <IconButton>
              <LanguageOutlined />
            </IconButton>
            <IconButton>
              <DarkModeOutlined />
            </IconButton>
            <IconButton>
              <FullscreenExitOutlined />
            </IconButton>
            <Badge badgeContent={4} color='error' overlap="circular">
              <IconButton>
                <NotificationsNoneOutlined />
              </IconButton>
            </Badge>
            <Badge badgeContent={2} color='error' overlap="circular">
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
            </Badge>
            <IconButton>
              <ListOutlined />
            </IconButton>
            <img src={profilepic} alt="Profile Image" className={styles.profilepic}></img>
          </div>
          {/* above is the right side stuff of navbar */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
