import React from 'react';
import BasePage from './BasePage';

export default function Acs() {
  const cells = [{
    title: 'Access Control',
    subtitle: 'Limiting what users and groups can do with Advanced Cluster Security',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/acs-access-control.mov',
    lastModifiedDate: 'April 8, 2022',
    description: 'Advanced Cluster Security is an extremely powerful Kubernetes based security platform.  Part of its capabilities is the ability to tightly control exactly what users and groups have access to.  Different personas can have access to the right pieces of information so they can do their job, but not too much as to adhere to the security principal of least privledge.  This video walks through an example of how to configure this.'
  },{
    title: 'Image Scanning',
    subtitle: 'Use the Advanced Cluster Security scanning tool via command line to scan your images.',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/stackrox_scanning.mov',
    lastModifiedDate: 'June 16, 2021',
    description: 'Creating policies and then being able to scan your images via command line is a powerful concept.  Developers can tap into it as they develop and you can use it as part of your pipelines as you deploy your images.  This demo walks through creating a policy and then invoking image scans against your policies all via the command line.'
  }];
  return <BasePage cells={cells} subtitle="Advanced Cluster Security" />;
}
