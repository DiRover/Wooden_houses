import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import {FC, memo, MouseEvent, useState} from 'react';
import {priceNames} from '../../src/services/service_data';

interface Props {
    text: string;
}

const buttonStyleProps = {
    zIndex: 1,
    display: 'inline-block',
    height: 'auto',
    alignSelf: 'center',
    padding: 0,
    textTransform: 'none',
    color: 'var(--font-color-common)',
    // color: 'hotpink',
    // '&:hover': {
    //     backgroundColor: 'white',
    // },
};

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
        <>
            <Button onMouseEnter={handleOpenMenu} size="small" sx={buttonStyleProps} disableRipple>
                <Typography>{text}</Typography>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClick={handleCloseMenu}
                MenuListProps={{
                    onMouseLeave: handleCloseMenu,
                    sx: {padding: 0},
                    autoFocus: true,
                }}
                sx={{padding: 0}}
            >
                {priceNames.map(item => (
                    <MenuItem
                        key={item}
                        autoFocus={true}
                        sx={{
                            borderBottom: 'var(--border-wieght) solid var(--border-color)',
                            '&:hover': {
                                color: 'var(--font-color-default)',
                                backgroundColor: 'var(--mune-item-background)',
                            },
                        }}
                    >
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
});

export default CustomMenu;

{
    /* <MenuItem
                    // autoFocus={true}
                    sx={{
                        '&:hover': {
                            color: 'red',
                            backgroundColor: 'pink',
                        },
                    }}
                >
                    Profile
                </MenuItem>
                <MenuItem
                    sx={{
                        '&:hover': {
                            color: 'red',
                            backgroundColor: 'blue',
                        },
                    }}
                >
                    My account
                </MenuItem>
                <MenuItem
                    sx={{
                        '&:hover': {
                            color: 'red',
                            backgroundColor: 'green',
                        },
                    }}
                >
                    Logout
                </MenuItem> */
}
