import React from 'react';
import BasePage from './BasePage';

export default function OcpConfig() {
  const cells = [{
    title: 'Dev Perspective - Add Page',
    subtitle: 'Configure the Add Page found under the Developer Perspective.',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/developer-perspective-add-page.mov',
    lastModifiedDate: 'Mar 29, 2022',
    description: 'By default there are many ways to deploy applications onto OpenShift.  As an OpenShift admin, you might want to limit these options.  This video explains how to do that.'
  }];
  return <BasePage cells={cells} subtitle="Configuration" />;
}

