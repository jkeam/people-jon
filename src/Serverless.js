import React from 'react';
import BasePage from './BasePage';

export default function Serverless() {
  const cells = [{
    title: 'Event Driven Architecture Introduction',
    subtitle: 'Introduction and benefits of going event driven',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/eda.mp4',
    lastModifiedDate: 'June 22, 2021',
    description: 'Advances in technology, such as microservices and containers, continue to transform how agencies operate. Event-driven architecture (EDA), a software architecture and model for application design, is quickly becoming a preferred method for capturing insights and communicating changes instantly for improved customer experience. This talk exploreses these topics and talks specifically how the USDA can use EDA to achieve a flexible system that can adapt to changes and make decisions in real-time.'
  }, {
    title: 'Serverless Introduction',
    subtitle: 'Introduction to Serverless concepts and exploration of how OpenShift enables Serverless architectures',
    linkUrl: 'https://www.brighttalk.com/webcast/16623/432634/optimizing-serverless-and-openshift-with-knative',
    imageUrl: 'https://jkeam-people.s3.amazonaws.com/serverless.png',
    imageAltText: 'OpenShift Serverless',
    lastModifiedDate: 'Oct 07, 2020',
    description: 'Serverless computing allows developers to optimize their application usage, by executing and billing on application resource consumption. Traditionally this execution model was offered by cloud providers in a non-portable manner. Today - the serverless paradigm is offered in OpenShift via the Knative upstream project, adding a key toolkit for developers to build portable, cloud native applications in hybrid and multi-cloud environments.  This is a fireside chat to learn about this new development paradigm and how it can be effectively leveraged in your organization or government agency.'
  }];
  return <BasePage cells={cells} subtitle="Serverless" />;
}

