import React from 'react';
import PropTypes from 'prop-types';

import { Nav, NavGroup, NavList, NavItem, PageSidebar } from '@patternfly/react-core';

export default function Sidebar({ onNavSelect, activeItem }) {
  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavGroup title="OpenShift">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0}>
            Basics
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Advanced Cluster Management
          </NavItem>
        </NavList>
      </NavGroup>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};

Sidebar.propTypes = {
  onNavSelect: PropTypes.func.isRequired,
  activeItem: PropTypes.number
};
Sidebar.defaultProps = {
  activeItem: 0
}
