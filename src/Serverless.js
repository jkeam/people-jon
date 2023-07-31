import React from 'react';
import BasePage from './BasePage';

export default function Serverless() {
  const cells = [{
    title: 'Serverless computing | DevNation Day: MAD',
    subtitle: 'Serverless discussion presented at the DevNation Day: Modern App Dev 2023.',
    youtubeId: 'GSLxrsU4fdQ',
    lastModifiedDate: 'Jun 29, 2023',
    description: 'Serverless computing is a relatively new paradigm that has gained popularity in recent years as an alternative to traditional server-based computing. In serverless computing, the infrastructure and management of servers are abstracted away from the user, allowing developers to focus on building and deploying applications. This session explores the benefits and drawbacks of serverless computing and provides an overview of how to build serverless applications. We discuss the advantages, including reduced costs, increased scalability, and faster development times. We also highlight some of the drawbacks we\'ve seen when deploying serverless at large customers.',
  }, {
    title: 'Distributed monoliths + Quarkus: How to properly modernize legacy workloads | DevNation Day: MAD',
    subtitle: 'Discussion on distributed monoliths and Quarkus presented at the DevNation Day: Modern App Dev 2023.',
    youtubeId: 'UxrCmpvlcwU',
    lastModifiedDate: 'Jun 29, 2023',
    description: 'In this talk, we will delve into the challenges of Modernizing Legacy Workloads built upon distributed monolith architectures and how Quarkus can be employed to address those issues. As many traditional enterprise applications suffer from complexity and maintainability issues, adopting modern, cloud-based technologies becomes increasingly essential for organizations to remain competitive in today\'s digital landscape. We will discuss the limitations of distributed monoliths and how the shift toward cloud and Microservice Architecture has highlighted these drawbacks. Emphasis will be placed on Quarkus, an innovative technology that enables a lightweight, container-first approach to developing cloud-native Java applications. We will explore the benefits of utilizing Quarkus to modernize legacy workloads, such as streamlining the development process, enhancing performance, and lowering operational costs. Finally, the talk will provide valuable insights and considerations for organizations planning their journey of modernizing legacy workloads with Quarkus, ensuring a smooth and successful transition towards a more agile and scalable application infrastructure.',
  }, {
    title: 'OpenShift Serverless',
    subtitle: 'A developer focused presentation on Knative, serverless concepts, OpenShift Serverless, and how it works under the covers',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/ocp-serverless-intro.mov',
    lastModifiedDate: 'April 7, 2022',
    description: 'This presentation is especially geared towards developers on how to more easily use Kubernetes.  It specifically talks about Knative, OpenShift Serverless, and includes a demo on how to spin up applications in a way that is more natural for developers than dealing with a mountain of Kubernetes YAMLs.  The serverless paradigm as a whole is discussed while also touching on some good use cases.  There will also be a deep dive of Knative and how it works under the hood.'
  },{
    title: 'Event Driven Architecture Introduction',
    subtitle: 'Introduction and benefits of going event driven',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/eda.mp4',
    lastModifiedDate: 'June 22, 2021',
    description: 'Advances in technology, such as microservices and containers, continue to transform how agencies operate. Event-driven architecture (EDA), a software architecture and model for application design, is quickly becoming a preferred method for capturing insights and communicating changes instantly for improved customer experience. This talk exploreses these topics and talks specifically how the USDA can use EDA to achieve a flexible system that can adapt to changes and make decisions in real-time.'
  }, {
    title: 'Serverless Fireside Chat',
    subtitle: 'Conversation about Serverless and exploration of how OpenShift enables Serverless architectures',
    linkUrl: 'https://www.brighttalk.com/webcast/16623/432634/optimizing-serverless-and-openshift-with-knative',
    imageUrl: 'https://jkeam-people.s3.amazonaws.com/serverless.png',
    imageAltText: 'OpenShift Serverless',
    lastModifiedDate: 'Oct 07, 2020',
    description: 'Serverless computing allows developers to optimize their application usage, by executing and billing on application resource consumption. Traditionally this execution model was offered by cloud providers in a non-portable manner. Today - the serverless paradigm is offered in OpenShift via the Knative upstream project, adding a key toolkit for developers to build portable, cloud native applications in hybrid and multi-cloud environments.  This is a fireside chat to learn about this new development paradigm and how it can be effectively leveraged in your organization or government agency.'
  }];
  return <BasePage cells={cells} subtitle="Serverless" />;
}
