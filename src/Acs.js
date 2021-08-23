import React from 'react';
import BasePage from './BasePage';

export default function Acs() {
  const cells = [{
    title: 'Image Scanning',
    subtitle: 'Use the Advanced Cluster Security scanning tool via command line to scan your images.',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/stackrox_scanning.mov',
    lastModifiedDate: 'June 16, 2021',
    description: 'Creating policies and then being able to scan your images via command line is a powerful concept.  Developers can tap into it as they develop and you can use it as part of your pipelines as you deploy your images.  This demo walks through creating a policy and then invoking image scans against your policies all via the command line.'
  }];
  return <BasePage cells={cells} subtitle="Advanced Cluster Security" />;
}
