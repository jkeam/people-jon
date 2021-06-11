import React, { useState } from 'react';
import "@patternfly/react-core/dist/styles/base.css";

import './fonts.css';
import './App.css';
import Sidebar from './nav/Sidebar';
import Header from './nav/Header';
import ContentSkip from './nav/ContentSkip';
import Home from './Home';
import Acm from './Acm';
import { Page } from '@patternfly/react-core';

export default function App() {
  const [activeItem, setActiveItem] = useState(0);
  const onNavSelect = ({ itemId }) => setActiveItem(itemId);

  const pageId = 'main-content-page-layout-default-nav';
  const pageSkipToContent = <ContentSkip pageId={pageId} />;
  const sidebar = <Sidebar onNavSelect={onNavSelect} activeItem={activeItem} />;
  const header = <Header />;
  return (
    <>
      <Page
        header={header}
        sidebar={sidebar}
        isManagedSidebar
        skipToContent={pageSkipToContent}
        mainContainerId={pageId}
      >
        { activeItem === 0 && <Home /> }
        { activeItem === 1 && <Acm /> }
      </Page>
    </>
  );
}
