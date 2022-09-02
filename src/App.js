import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";

import './fonts.css';
import './App.css';
import Sidebar from './nav/Sidebar';
import Header from './nav/Header';
import ContentSkip from './nav/ContentSkip';
import Home from './Home';
import Acm from './Acm';
import Acs from './Acs';
import Serverless from './Serverless';
import SSO from './SSO';
import OcpConfig from './OcpConfig';
import Threescale from './Threescale';
import Pipeline from './Pipeline';
import Quarkus from './Quarkus';
import Bpm from './Bpm';
import { Page } from '@patternfly/react-core';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  const pageId = 'main-content-page-layout-default-nav';
  const pageSkipToContent = <ContentSkip pageId={pageId} />;
  const sidebar = <Sidebar />;
  const header = <Header />;
  return (
    <Router>
      <Page
        header={header}
        sidebar={sidebar}
        isManagedSidebar
        skipToContent={pageSkipToContent}
        mainContainerId={pageId}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/config">
            <OcpConfig />
          </Route>
          <Route path="/acm">
            <Acm />
          </Route>
          <Route path="/acs">
            <Acs />
          </Route>
          <Route path="/serverless">
            <Serverless />
          </Route>
          <Route path="/sso">
            <SSO />
          </Route>
          <Route path="/threescale">
            <Threescale />
          </Route>
          <Route path="/pipelines">
            <Pipeline />
          </Route>
          <Route path="/quarkus">
            <Quarkus />
          </Route>
          <Route path="/bpm">
            <Bpm />
          </Route>
        </Switch>
      </Page>
    </Router>
  );
}
