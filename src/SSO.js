import React from 'react';
import BasePage from './BasePage';

export default function SSO() {
  const cells = [{
    title: 'SSO Custom Claims in JWT',
    subtitle: 'Using Keycloak to add custom claims to our JWT',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/keycloak-jwt-custom-claims.mp4',
    lastModifiedDate: 'April 7, 2023',
    description: 'OpenID Connect (OIDC) is a powerful authentication and authorization mechanism that utilizes JSON Web Tokens (JWT).  In this demo, we see how we can use Keycloak to add our own custom claims/attributes into the token.'
  }, {
    title: 'SSO Demo',
    subtitle: 'Uses external Identity Provider and External User Federated Database',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/keycloak_demo.mov',
    lastModifiedDate: 'Aug 20, 2021',
    description: 'Keycloak is an extremely powerful standards based authorization and authentication mechanism.  Security and security tools can sometimes be non-intuitive to setup and configure.  This demo walks through how to set up a local development environment where you can use and extend the capabilities of SSO through custom mappers and service provider interfaces.'
  }, {
    title: 'SSO Demo Code',
    subtitle: 'Code walkthrough for the SSO Demo',
    videoUrl: 'https://jkeam-people.s3.amazonaws.com/keycloak_code.mov',
    lastModifiedDate: 'Aug 20, 2021',
    description: 'The SSO Demo walks through how to setup your environment and how to perform the demo, but does not touch on the code.  This video walks through why and how the code is structured as well as goes through the key concepts for each Java class.'
  }];
  return <BasePage cells={cells} subtitle="SSO" />;
}
