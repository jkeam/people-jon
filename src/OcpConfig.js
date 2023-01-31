import React from 'react';
import BasePage from './BasePage';

export default function OcpConfig() {
  const cells = [{
    title: 'Dev Perspective - Add Page',
    subtitle: 'Configure the Add Page found under the Developer Perspective.',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/developer-perspective-add-page.mov',
    lastModifiedDate: 'Mar 29, 2022',
    description: 'By default there are many ways to deploy applications onto OpenShift.  As an OpenShift admin, you might want to limit these options.  This video explains how to do that.'
  }, {
    title: 'Project Request Template',
    subtitle: 'Configure an EgressNetworkPolicy to automatically be created for every new project',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/openshift-project-template-egress.mp4',
    lastModifiedDate: 'Jan 30, 2023',
    description: 'Having to remember to manually create things like Limit, Quotas, or NetworkPolicies for every new project can be a cumbersome task.  With OpenShift, we can use the Project Request Template to have OpenShift easily and automatically do that for us.'
  }];
  return <BasePage cells={cells} subtitle="Configuration" />;
}

