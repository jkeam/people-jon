import React from 'react';
import BasePage from './BasePage';

export default function Acm() {
  const cells = [{
    title: 'Networking',
    subtitle: 'Diagnose networking connectivity issues.',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/rhacm_networking_check.mov',
    lastModifiedDate: 'June 10, 2021',
    description: 'If the Hub and Managed cluster are unable to communicate, there are a few basic networking diagnostic steps you can take to see if they can communicate.  This video goes through how you can do this using netcat `nc`.'
  }, {
    title: 'GitOps Policy',
    subtitle: 'Applying scan policies via git.',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/acm_application_policy.mp4',
    lastModifiedDate: 'June 10, 2021',
    description: 'This video goes through how to create a policy that ccreates some ScanSettingBindings for use with the compliance operator.  Doing it from ACM means you can manage all this in one place.'
  }, {
    title: 'Installing ACS',
    subtitle: 'Using policies to install Advanced Cluster Security for Kubernetes',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/acm_acs.mov',
    lastModifiedDate: 'Aug 25, 2021',
    description: 'There are lots of ways to install Stackrox, now called Advanced Cluster Security for Kubernetes. A very popular approach is to use ACM policies to do so. This is a natural approach as ACM policies are a good way to ensure the correct configuration of Kubernetes clusters, including that the right operators are installed.'
  }];
  return <BasePage cells={cells} subtitle="Advanced Cluster Management" />;
}
