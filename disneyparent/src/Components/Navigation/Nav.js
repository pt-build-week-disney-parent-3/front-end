import React, { useState } from 'react';
import {
    Collapse, 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem

} from 'reactstrap';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
     
        return (
            <div>
                <Navbar>
                    <NavBrand href = '/dashboard'>
                        {props.name === 'parent' ? 'Disney Parent' : 'Disney Volunteer' }
                    </NavBrand>
                    <NavbarToggler onClick = {toggle}/>
                    <Collapse isOpen = {isOpen} navbar>
                        <Nav className = 'ml-auto' navbar>
                            <NavItem>
                                <NavLink href = '/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = '/Parent-Register/'>Parent Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = '/Volunteer-Register/'>Volunteer Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = '/Parents-Login/'>Sign In</NavLink>
                            </NavItem>
                            <<NavItem>
                                <NavLink onClick ={() => localStorage.clear()} href = '/LogOut'>Log Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
}

export default Navigation;