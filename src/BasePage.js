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

export default function BasePage({ children, title, subtitle, cells }) {
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [selectedDataListItemId, setSelectedDataListItemId] = useState(0);
  const drawerContent = (
    <>
      <DataList
        aria-label="data list"
        selectedDataListItemId={selectedDataListItemId}
        onSelectDataListItem={id => {
          setDrawerExpanded(true);
          setSelectedDataListItemId(parseInt(id, 10));
        }}
      >
        { (cells || []).map((cell, index) => (
          <DataListItem id={index + 1}>
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>{cell.title}</p>
                        <small>
                          {cell.subtitle}
                        </small>
                      </FlexItem>
                      <FlexItem>
                          { cell.videoUrl && (
                            <video width="400" controls>
                             <source src={cell.videoUrl} type="video/mp4" />
                            </video>
                          )}
                          { cell.linkUrl && (
                            <a href={cell.linkUrl} target="_blank" rel="noopener noreferrer">
                            { cell.imageUrl && <img src={cell.imageUrl} alt={cell.imageAltText || ''} /> }
                            </a>
                          )}

                      </FlexItem>
                      <Flex>
                        <FlexItem>Video uploaded {cell.lastModifiedDate}</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        ))}
      </DataList>
    </>
  );
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <PTitle headingLevel="h2" size="xl">
          { (cells[selectedDataListItemId - 1] || {}).title }
        </PTitle>
        <DrawerActions>
          <DrawerCloseButton onClick={() => {
            setSelectedDataListItemId(0);
            setDrawerExpanded(false);
          }} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
          <FlexItem>
            <p>
              { (cells[selectedDataListItemId - 1] || {}).description }
            </p>
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return(
    <>
      <Title value={title || 'OpenShift'} subtitle={subtitle} />
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

