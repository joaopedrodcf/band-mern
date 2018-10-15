import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavLink,
    NavItem,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        const { isOpen } = this.state;

        this.setState({
            isOpen: !isOpen
        });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Band</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/"
                                tag={RRNavLink}
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/band"
                                tag={RRNavLink}
                            >
                                Band
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/shows"
                                tag={RRNavLink}
                            >
                                Shows
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/releases"
                                tag={RRNavLink}
                            >
                                Releases
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/gallery"
                                tag={RRNavLink}
                            >
                                Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/contact"
                                tag={RRNavLink}
                            >
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
