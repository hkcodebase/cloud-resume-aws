import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
export default function AppNavBar (){
    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavbarBrand tag={Link} to="/about">About Me</NavbarBrand>
                <NavbarBrand tag={Link} to="/projects">Projects</NavbarBrand>
            </Navbar>
        </>
    )
}