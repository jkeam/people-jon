import React from 'react';
import BasePage from './BasePage';

export default function Threescale() {
  const cells = [{
    title: '3scale Demo',
    subtitle: 'High level walkthrough',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/3scale_101demo.mov',
    lastModifiedDate: 'June 11, 2022',
    description: '3scale is a powerful API management tool.  This video walks through the basic usage and concepts around it.'
  }];
  return <BasePage cells={cells} subtitle="3scale" />;
}

