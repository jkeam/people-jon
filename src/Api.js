import React from 'react';
import BasePage from './BasePage';

export default function Api() {
  const cells = [{
    title: 'API Designer and Service Registry',
    subtitle: 'API Driven Development',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/api-designer.mp4',
    lastModifiedDate: 'February 14, 2024',
    description: 'OpenShift comes with powerful tools to design and register APIs. This video walks through some of those capabilities.'
  }, {
    title: '3scale Demo',
    subtitle: 'High level walkthrough',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/3scale_101demo.mov',
    lastModifiedDate: 'June 11, 2022',
    description: '3scale is a powerful API management tool.  This video walks through the basic usage and concepts around it.'
  }];
  return <BasePage cells={cells} subtitle="APIs" />;
}

