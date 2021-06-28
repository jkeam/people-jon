import React from 'react';
import {
  useHistory,
  useLocation
} from 'react-router-dom';

import { Nav, NavList, NavItem, PageSidebar } from '@patternfly/react-core';

export default function Sidebar() {
  const history = useHistory();
  const route = useLocation();
  const mapping = ['/', '/acm', '/acs', '/serverless'];
  const onSelect = ({ itemId }) => history.push(mapping[itemId]);
  const PageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={route.pathname === mapping[0]}>
          OpenShift Basics
        </NavItem>
        <NavItem itemId={1} isActive={route.pathname === mapping[1]}>
          Advanced Cluster Management
        </NavItem>
        <NavItem itemId={2} isActive={route.pathname === mapping[2]}>
          Advanced Cluster Security
        </NavItem>
        <NavItem itemId={3} isActive={route.pathname === mapping[3]}>
          Serverless
        </NavItem>
      </NavList>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};
