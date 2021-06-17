import React, { useState } from 'react';
import Title from './common/Title';
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
                      <p>OpenShift 101</p>
                      <small>
                        Intro to containers and what makes OpenShift different.
                      </small>
                    </FlexItem>
                    <FlexItem>
                      <iframe width="400" height="250" src="https://www.youtube.com/embed/uebe4r3C2Os" title="OpenShift 101" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                      </iframe>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded Jan 21, 2021</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
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
                      <p>OpenShift 102</p>
                      <small>
                        OpenShift and the features that benefits administrators and operations.
                      </small>
                    </FlexItem>
                    <FlexItem>
                      <iframe width="400" height="250" src="https://www.youtube.com/embed/NtZPTvPcR3o" title="OpenShift 102" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                      </iframe>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded Feb 1, 2021</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem id="content-padding-item3">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>OpenShift 103</p>
                      <small>
                        OpenShift and the features that benefits developers.
                      </small>
                    </FlexItem>
                    <FlexItem>
                      <iframe width="400" height="250" src="https://www.youtube.com/embed/RzUyXu-aI1k" title="OpenShift 103" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                      </iframe>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Video uploaded Feb 8, 2021</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem id="content-padding-item4">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>OpenShift Intro Blog Post</p>
                      <small>
                        How OpenShift is different than from just plain Kubernetes.
                      </small>
                    </FlexItem>
                    <FlexItem>
                      <a href="https://www.carahsoft.com/community/red-hat-kubernetes-container-platform-blog-2020" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.carahsoft.com/wordpress/wp-content/uploads/2020/10/RH_Kubernetes_blog_300x300-300x300.jpg" alt="Evolving Kubernetes into an Enterprise Container Platform" />
                        <figcaption>
                          Evolving Kubernetes into an Enterprise Container Platform
                        </figcaption>
                      </a>
                    </FlexItem>
                    <Flex>
                      <FlexItem>Written Oct 14, 2020</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
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
          { selectedDataListItemId === 'content-padding-item1' && 'OpenShift 101' }
          { selectedDataListItemId === 'content-padding-item2' && 'OpenShift 102' }
          { selectedDataListItemId === 'content-padding-item3' && 'OpenShift 103' }
          { selectedDataListItemId === 'content-padding-item4' && 'OpenShift Intro Blog Post' }
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
              { selectedDataListItemId === 'content-padding-item1' && 'If you are new to containers, this is perfect for you.  If you were ever curious about what Kubernetes is, or what makes OpenShift different, this is a great video to answer those questions.  Or even if you are a seasoned container user, this video might still be informative and fun.' }
              { selectedDataListItemId === 'content-padding-item2' && 'OpenShift is useful for a wide range of personas. This video will talk about how it can impact the lives of administrators/operators and how OpenShift gives them the tools that makes their day 1 (installation) and day 2 (on going operations) easier.' }
              { selectedDataListItemId === 'content-padding-item3' && 'OpenShift is not just for admins. One of the main facets of OpenShift that make it different than plain Kubernetes are all the developer tools and services that come packaged with it. This video will touch on some of the most impactful developer tooling and features.' }
              { selectedDataListItemId === 'content-padding-item4' && <a href="https://www.carahsoft.com/community/red-hat-kubernetes-container-platform-blog-2020" target="_blank" rel="noopener noreferrer">OpenShift and Kubernetes are both container orchestration platforms. How exactly do they differ? Read this blog post to see what these differences are.</a> }
            </p>
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return(
    <>
      <Title value="OpenShift" subtitle="Basics" />
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
