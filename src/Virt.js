import React from 'react';
import BasePage from './BasePage';

export default function Virt() {
  const cells = [{
    title: 'CI/CD and VMs',
    subtitle: 'Using modern techniques to build and deploy VMs',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/ocpvirt-cicd.mp4',
    lastModifiedDate: 'May 20, 2024',
    description: 'OpenShift tooling, like Pipelines and GitOps can be used with VMs. This brings modern app development best practices to older paradigms. This video walks through how to set all this up and explains how you can use this in your environment.'
  }];
  return <BasePage cells={cells} subtitle="Virtualization" />;
}
