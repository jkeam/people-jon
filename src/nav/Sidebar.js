import React, { useState } from 'react';
import {
  useHistory,
  useLocation
} from 'react-router-dom';

import { Nav, NavGroup, NavList, NavItem, PageSidebar } from '@patternfly/react-core';

export default function Sidebar() {
  const history = useHistory();
  const route = useLocation();
  const mapping = ['/', '/acm'];
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
        </NavList>
      </NavGroup>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};
