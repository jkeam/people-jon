import React from 'react';
import BasePage from './BasePage';

export default function Quarkus() {
  const cells = [{
    title: 'Quarkus Demo',
    subtitle: 'Building an API that pulls back data from a Postgresql database',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/quarkus-demo.mov',
    lastModifiedDate: 'Aug 23, 2022',
    description: 'Quarkus is an exciting Java framework that allows developers to use their Java knowledge as well as the vast Java ecosystem to build modern day, cloud-native applications.  From net new, to modernization, to serverless efforts, Quarkus is a powerful tool to add to any developer\'s toolbelt.'
  }];
  return <BasePage cells={cells} subtitle="Quarkus" />;
}

