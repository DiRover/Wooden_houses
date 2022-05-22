import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC, memo, MouseEvent, useState } from 'react';

interface Props {
  text: string;
}

const CustomMenu: FC<Props> = memo(({text}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onMouseEnter={handleOpenMenu}
        sx={{
          zIndex: 1,
          textTransform: 'none',
          color: "hotpink",
          "&:hover": {
            backgroundColor: "white"
          }
        }}
        disableRipple
      >
        <div>{text}</div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleCloseMenu}
        MenuListProps={{
          onMouseLeave: handleCloseMenu,
          sx: { padding: 0, color: "yellow" },
          autoFocus: true
        }}
        sx={{ padding: 0 }}
      >
        <MenuItem
          autoFocus={true}
          sx={{
            "&:hover": {
              color: "red",
              backgroundColor: "pink"
            }
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "red",
              backgroundColor: "blue"
            }
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "red",
              backgroundColor: "green"
            }
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
});

export default CustomMenu;