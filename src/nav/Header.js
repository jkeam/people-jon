import React from 'react';
import { Brand, PageHeader } from '@patternfly/react-core';
import logo from '../logo.svg';

export default function Header() {
  const PageToolbar = <div>need to implement new toolbar</div>;
  return (
    <PageHeader
      logo={<Brand src={logo} alt="Red Hat Logo" />}
      toolbar={PageToolbar}
      showNavToggle
    />
  );
}
