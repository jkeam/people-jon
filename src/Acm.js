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
  }];
  return <BasePage cells={cells} subtitle="Advanced Cluster Management" />;
}
