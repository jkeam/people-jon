import React, { useState } from 'react';
import Title from './common/Title';
import scanning from './assets/stackrox_scanning.mov';
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

export default function Acs() {
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
                      <p>Image Scanning</p>
                      <small>
                        Use the Advanced Cluster Security scanning tool via command line to scan your images.
                      </small>
                    </FlexItem>
                    <FlexItem>
                        <video width="400" controls>
                          <source src={scanning} type="video/mp4" />
                        </video>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded June 16, 2021</FlexItem>
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
          { selectedDataListItemId === 'content-padding-item1' && 'Image Scanning' }
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
              { selectedDataListItemId === 'content-padding-item1' && 'Creating policies and then being able to scan your images via command line is a powerful concept.  Developers can tap into it as they develop and you can use it as part of your pipelines as you deploy your images.  This demo walks through creating a policy and then invoking image scans against your policies all via the command line.' }
            </p>
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return(
    <>
      <Title value="OpenShift" subtitle="Advanced Cluster Security" />
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
