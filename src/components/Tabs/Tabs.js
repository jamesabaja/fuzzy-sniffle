import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

const Tabs = ({active}) => {
  return(
    <Nav tabs>
      <NavItem>
        <NavLink href="/survey" active={active === 'survey' ? true : false}>Survey Proper</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/review" active={active === 'review' ? true : false}>Review and Finalize Answers</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Tabs;