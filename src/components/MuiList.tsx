import { Mail } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  ListItemButton,
  Avatar,
  Divider,
  Chip,
  Button
} from "@mui/material";
import { useState } from "react";

const MuiList = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

    const handleDelete = (chipToDelete : string) => {
        setChips(chips.filter(chip => chip !== chipToDelete))
    }

  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" secondary="Secondary Text" />
            <Chip label='Chip' color="success" onClick={() => alert('clicked')} />
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 2" secondary="Secondary Text" />
            <Button aria-label="Button" variant="contained" color="secondary" onClick={()=> alert('Button Clicked!')} >Button</Button>
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 3" secondary="Secondary Text" />
          </ListItemButton>
        </ListItem>
        <Divider/>
        {chips.map(chip => (
            <Chip key={chip} label={chip}  onDelete={() => handleDelete(chip)} />
        ) )}
        
      </List>
    </Box>
  );
};

export default MuiList;
