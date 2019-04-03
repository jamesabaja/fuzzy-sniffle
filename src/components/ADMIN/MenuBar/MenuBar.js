import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

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
        <NavbarBrand href="/admin">SDG Interactions Survey Admin</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/admin/view/answers">View All Answers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/graph">Graph Query</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Access Control
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/admin/view/users'>
                  View Registered Users
                </DropdownItem>
                <DropdownItem href='/admin/view/pending'>
                  Confirm Pending Requests
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;