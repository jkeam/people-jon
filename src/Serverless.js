import React, { useState } from 'react';
import {
  PageSection,
  Divider,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Flex,
  FlexItem,
  DataList,
  DataListItem,
  DataListItemCells,
  DataListCell,
  DataListItemRow,
  Title as PTitle
} from '@patternfly/react-core';
import Title from './common/Title';
import ServerlessImage from './assets/serverless.png';
import EdaImage from './assets/eda.png';

export default function Serverless() {
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [selectedDataListItemId, setSelectedDataListItemId] = useState(0);
  const drawerContent = (
    <>
      <DataList
        aria-label="data list"
        selectedDataListItemId={selectedDataListItemId}
        onSelectDataListItem={id => {
          setDrawerExpanded(true);
          setSelectedDataListItemId(id);
        }}
      >
        <DataListItem id="content-padding-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>Event Driven Architecture Introduction</p>
                      <small>
                        Introduction and benefits of going event driven
                      </small>
                    </FlexItem>
                    <FlexItem>
                      <a href="https://carahevents.carahsoft.com/Event/Details/224562-redhat" target="_blank" rel="noopener noreferrer">
                        <img src={EdaImage} alt="Event Driven Architecture" />
                        <figcaption>
                          Application Modernization Using Event-Driven Architecture
                        </figcaption>
                      </a>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded June 22, 2021</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem id="content-padding-item2">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>Serverless Introduction</p>
                      <small>
                        Introduction to Serverless concepts and exploration of how OpenShift enables Serverless architectures
                      </small>
                    </FlexItem>
                    <FlexItem>
                     <a href="https://www.brighttalk.com/webcast/16623/432634/optimizing-serverless-and-openshift-with-knative" target="_blank" rel="noopener noreferrer">
                        <img src={ServerlessImage} alt="OpenShift Serverless" />
                        <figcaption>
                          Optimizing Serverless and OpenShift with Knative
                        </figcaption>
                      </a>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded Oct 07, 2020</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
      </DataList>
    </>
  );
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <PTitle headingLevel="h2" size="xl">
          { selectedDataListItemId === 'content-padding-item1' && 'Event Driven Architecture Introduction' }
          { selectedDataListItemId === 'content-padding-item2' && 'Serverless Introduction' }
        </PTitle>
        <DrawerActions>
          <DrawerCloseButton onClick={() => {
            setSelectedDataListItemId('');
            setDrawerExpanded(false);
          }} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
          <FlexItem>
            <p>
              { selectedDataListItemId === 'content-padding-item1' && 'Advances in technology, such as microservices and containers, continue to transform how agencies operate. Event-driven architecture (EDA), a software architecture and model for application design, is quickly becoming a preferred method for capturing insights and communicating changes instantly for improved customer experience. This talk exploreses these topics and talks specifically how the USDA can use EDA to achieve a flexible system that can adapt to changes and make decisions in real-time.' }
              { selectedDataListItemId === 'content-padding-item2' && 'Serverless computing allows developers to optimize their application usage, by executing and billing on application resource consumption. Traditionally this execution model was offered by cloud providers in a non-portable manner. Today - the serverless paradigm is offered in OpenShift via the Knative upstream project, adding a key toolkit for developers to build portable, cloud native applications in hybrid and multi-cloud environments.  This is a fireside chat to learn about this new development paradigm and how it can be effectively leveraged in your organization or government agency.' }
            </p>
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return(
    <>
      <Title value="OpenShift" subtitle="Serverless" />
      <Divider component="div" />
      <PageSection padding={{ default: 'noPadding' }}>
        <Drawer isExpanded={drawerExpanded}>
          <DrawerContent panelContent={panelContent} className={'pf-m-no-background'}>
            <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </>
  );
}

