import React from 'react';
import BasePage from './BasePage';

export default function Devspace() {
  const cells = [{
    title: 'Enforce A Cluster Wide Instance',
    subtitle: 'Preventing developers from creating another Dev Hub instance',
    youtubeId: 'cWqcs8OU3zo',
    lastModifiedDate: 'August 14, 2024',
    description: 'OpenShift Developer Hub allows for self service from users to be able to create their own Developer Hub/Backstage instance. Depending on your use case, this might not be what you want. In this video, I walk through how to prevent this.'
  }];
  return <BasePage cells={cells} subtitle="Dev Hub" />;
}
