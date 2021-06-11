import React, { useState } from 'react';
import Title from './common/Title';
import acmMovie from './assets/rhacm_networking_check.mov';
import acmPolicyMovie from './assets/acm_application_policy.mp4';
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

export default function Home() {
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
                      <p>Networking</p>
                      <small>
                        Diagnose networking connectivity issues
                      </small>
                    </FlexItem>
                    <FlexItem>
                        <video width="400" controls>
                          <source src={acmMovie} type="video/mp4" />
                        </video>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded June 10, 2021</FlexItem>
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
                      <p>GitOps Policy</p>
                      <small>
                        Applying Scan Policies via Git
                      </small>
                    </FlexItem>
                    <FlexItem>
                        <video width="400" controls>
                          <source src={acmPolicyMovie} type="video/mp4" />
                        </video>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded June 10, 2021</FlexItem>
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
          { selectedDataListItemId === 'content-padding-item1' && 'Networking' }
          { selectedDataListItemId === 'content-padding-item2' && 'GitOps Policy' }
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
              { selectedDataListItemId === 'content-padding-item1' && 'If the Hub and Managed cluster are unable to communicate, there are a few basic networking diagnostic steps you can take to see if they can communicate.  This video goes through how you can do this using netcat `nc`.' }
              { selectedDataListItemId === 'content-padding-item2' && 'This video goes through how to create a policy that ccreates some ScanSettingBindings for use with the compliance operator.  Doing it from ACM means you can manage all this in one place.' }
            </p>
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return(
    <>
      <Title value="OpenShift" subtitle="Advanced Cluster Management" />
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
