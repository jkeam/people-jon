import React from 'react';
import BasePage from './BasePage';

export default function Ai() {
  const cells = [{
    title: 'Teaching Bots on OpenShift',
    subtitle: 'Leveraging LangChain and ChatGPT to train models on our own custom dataset',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/semantic_searcher_demo.mov',
    lastModifiedDate: 'June 5, 2023',
    description: 'ChatGPT is great, but it would be even better if we could train it using our own custom dataset. Leveraging LangChain, we can do exactly that. Even better that we can use the resources of OpenShift to have a truly cloud native development and operational experience. The code behind this demo can be found here: https://github.com/jkeam/semantic-searcher'
  }];
  return <BasePage cells={cells} subtitle="AI/ML" />;
}
