import React, { useState } from 'react';
import {
  useHistory
} from 'react-router-dom';

import { Nav, NavGroup, NavList, NavItem, PageSidebar } from '@patternfly/react-core';

export default function Sidebar() {
  const history = useHistory();
  const [route, setRoute] = useState('/');
  const mapping = ['/', '/acm'];
  const onSelect = ({ itemId }) => {
    const newRoute = mapping[itemId];
    setRoute(newRoute);
    history.push(newRoute);
  };
  const PageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavGroup title="OpenShift">
        <NavList>
          <NavItem itemId={0} isActive={route === mapping[0]}>
            Basics
          </NavItem>
          <NavItem itemId={1} isActive={route === mapping[1]}>
            Advanced Cluster Management
          </NavItem>
        </NavList>
      </NavGroup>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};
