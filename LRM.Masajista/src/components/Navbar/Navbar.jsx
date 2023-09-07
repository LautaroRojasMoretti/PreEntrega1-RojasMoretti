
import { AppBar, Button, Typography } from '@mui/material';
import './Navbar.css';
import { Toolbar } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <AppBar>
            <Toolbar sx={{ backgroundColor: "#EBC892", display: "flex", justifyContent: "space-around" }}>
                <Typography sx={{fontStyle: "oblique", fontWeight: "bolder"}}>LRM Masajista</Typography>
                <Button sx={{color: "white", fontWeight: "bolder"}}>
                    Inicio
                </Button>
                <Button sx={{color: "white", fontWeight: "bolder"}}>
                    Turnos
                </Button>
                <Button sx={{color: "white", fontWeight: "bolder"}}>
                    Masajes
                </Button>
                <Button sx={{color: "white", fontWeight: "bolder"}}>
                    Acerca de
                </Button>
                <CartWidget />
            </Toolbar>
        </AppBar>
        );
}

export default Navbar;