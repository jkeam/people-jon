import React from 'react';
import {
  useHistory,
  useLocation
} from 'react-router-dom';

import { Nav, NavList, NavItem, PageSidebar } from '@patternfly/react-core';

export default function Sidebar() {
  const history = useHistory();
  const route = useLocation();
  const mapping = ['/', 'config', '/acm', '/acs', '/serverless', '/sso'];
  const onSelect = ({ itemId }) => history.push(mapping[itemId]);
  const PageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={route.pathname === mapping[0]}>
          OpenShift Basics
        </NavItem>
        <NavItem itemId={1} isActive={route.pathname === mapping[1]}>
          OpenShift Configuration
        </NavItem>
        <NavItem itemId={2} isActive={route.pathname === mapping[2]}>
          Advanced Cluster Management
        </NavItem>
        <NavItem itemId={3} isActive={route.pathname === mapping[3]}>
          Advanced Cluster Security
        </NavItem>
        <NavItem itemId={4} isActive={route.pathname === mapping[4]}>
          Serverless
        </NavItem>
        <NavItem itemId={5} isActive={route.pathname === mapping[5]}>
          SSO
        </NavItem>
      </NavList>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};
