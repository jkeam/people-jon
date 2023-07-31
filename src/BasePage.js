import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

export default function BasePage({ title, subtitle, cells }) {
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
          <DataListItem id={index + 1} key={index}>
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
                          { cell.youtubeId && (
                            <iframe
                              width="400"
                              height="250"
                              src={`https://www.youtube.com/embed/${cell.youtubeId}`}
                              title={cell.title}
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            >
                            </iframe>
                          )}
                          { cell.linkUrl && (
                            <a href={cell.linkUrl} target="_blank" rel="noopener noreferrer">
                              { cell.imageUrl && <img src={cell.imageUrl} alt={cell.imageAltText || ''} /> }
                              <figcaption>
                                {cell.imageAltText || ''}
                              </figcaption>
                            </a>
                          )}
                      </FlexItem>
                      <Flex>
                        { cell.type === 'blog' && <FlexItem>Written {cell.lastModifiedDate}</FlexItem> }
                        { !cell.type && <FlexItem>Video uploaded {cell.lastModifiedDate}</FlexItem> }
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
      <Title value={title} subtitle={subtitle} />
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

BasePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cells: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAltText: PropTypes.string,
    youtubeId: PropTypes.string,
    type: PropTypes.string,
    lastModifiedDate: PropTypes.string
  }))
};
BasePage.defaultProps = {
  title: 'OpenShift',
  subtitle: '',
  cells: []
};
