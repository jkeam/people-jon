import React from 'react';
import BasePage from './BasePage';

export default function Bpm() {
  const cells = [{
    title: 'KIE Server URL',
    subtitle: 'Changing the base url the KIE server listens on',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/kieserver-url.mov',
    lastModifiedDate: 'Sept 2, 2022',
    description: 'Quick tutorial using the demo business application to change the base URL for the KIE server.'
  }];
  return <BasePage cells={cells} subtitle="BPM" />;
}

