import React from 'react';
import {
  useHistory,
  useLocation
} from 'react-router-dom';

import { Nav, NavGroup, NavList, NavItem, PageSidebar } from '@patternfly/react-core';

export default function Sidebar() {
  const history = useHistory();
  const route = useLocation();
  const mapping = ['/', '/acm', '/acs'];
  const onSelect = ({ itemId }) => history.push(mapping[itemId]);
  const PageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavGroup title="OpenShift">
        <NavList>
          <NavItem itemId={0} isActive={route.pathname === mapping[0]}>
            Basics
          </NavItem>
          <NavItem itemId={1} isActive={route.pathname === mapping[1]}>
            Advanced Cluster Management
          </NavItem>
          <NavItem itemId={2} isActive={route.pathname === mapping[2]}>
            Advanced Cluster Security
          </NavItem>
        </NavList>
      </NavGroup>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};
