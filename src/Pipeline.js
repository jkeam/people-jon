import React from 'react';
import BasePage from './BasePage';

export default function Pipeline() {
  const cells = [{
    title: 'Pipeline Demo',
    subtitle: 'Building a pipeline from scratch',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/pipeline-from-scratch.mov',
    lastModifiedDate: 'July 8, 2022',
    description: 'OpenShift Pipelines has many concepts that can be a bit daunting at first.  This tutorial explains the basic concepts and pipeline building blocks.  From there we create a pipeline from scratch as I talk through my thought process and how I find the right tasks and hook them up.  A bit long, but extremely useful if you are thinking about creating your own cloud native pipeline.'
  }, {
    title: 'Pipeline and GitOps',
    subtitle: 'True CI/CD',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/pipelines_and_gitops.mov',
    lastModifiedDate: 'July 8, 2022',
    description: 'Pipelines are great for continous integration and when paired with infrastructure as code enforcement, can eliminate configuration drift and enable CI/CD.  This video walks through how OpenShift unlocks this as well as a demonstration of a sample workflow following current industry best practices.'
  }];
  return <BasePage cells={cells} subtitle="Pipelines" />;
}

