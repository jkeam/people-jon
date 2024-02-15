import React from 'react';
import BasePage from './BasePage';

export default function Devspace() {
  const cells = [{
    title: 'Web Development with Dev Spaces',
    subtitle: 'Building a Django app using Dev Spaces',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/devspaces-django.mp4',
    lastModifiedDate: 'February 14, 2024',
    description: 'Dev Spaces are great for building web apps. In this video, we work on a Django app with a Postgres database.'
  }, {
    title: 'Dev Spaces with oc and odo',
    subtitle: 'Using CLIs built right into Dev Spaces',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/devspaces_oc_odo.mov',
    lastModifiedDate: 'June 6, 2023',
    description: 'Dev Spaces is a development environment right on OpenShift. It looks and acts like Visual Studio Code and even has an amazing built in terminal where it already has common CLIs installed like oc and odo.'
  }];
  return <BasePage cells={cells} subtitle="Dev Spaces" />;
}
