import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
  
  export default function NavListDrawerResponsive({ onClick, navLinks }) {
    return (
      <Box
        sx={{ width: 250 }}
        onClick={onClick}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {navLinks.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
              >
                <ListItemButton
                  href={item.path}
                  component="a"
                >
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
      </Box>
    );
  }
  