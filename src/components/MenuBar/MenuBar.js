import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Navbar color="success" dark expand="md">
        <NavbarBrand href="/">SDG Interactions Survey</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/query">Query and Study Goals</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Survey
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/survey'>
                  Answer Survey
                </DropdownItem>
                <DropdownItem href='/add'>
                  Add Goals to Survey
                </DropdownItem>
                <DropdownItem href='/view/answers'>
                  View Your Answers
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href='/settings'>Settings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};

export default MenuBar;