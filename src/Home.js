import React from 'react';
import BasePage from './BasePage';

export default function Home() {
  const cells = [{
    title: 'OpenShift 101',
    subtitle: 'Intro to containers and what makes OpenShift different',
    youtubeId: 'uebe4r3C2Os',
    lastModifiedDate: 'Jan 21, 2021',
    description: 'If you are new to containers, this is perfect for you.  If you were ever curious about what Kubernetes is, or what makes OpenShift different, this is a great video to answer those questions.  Or even if you are a seasoned container user, this video might still be informative and fun.'
  }, {
    title: 'OpenShift 102',
    subtitle: 'OpenShift and the features that benefits administrators and operations.',
    youtubeId: 'NtZPTvPcR3o',
    lastModifiedDate: 'Feb 01, 2021',
    description: 'OpenShift is useful for a wide range of personas. This video will talk about how it can impact the lives of administrators/operators and how OpenShift gives them the tools that makes their day 1 (installation) and day 2 (on going operations) easier.'
  }, {
    title: 'OpenShift 103',
    subtitle: 'OpenShift and the features that benefits developers.',
    youtubeId: 'RzUyXu-aI1k',
    lastModifiedDate: 'Feb 08, 2021',
    description: 'OpenShift is not just for admins. One of the main facets of OpenShift that make it different than plain Kubernetes are all the developer tools and services that come packaged with it. This video will touch on some of the most impactful developer tooling and features.'
  }, {
    title: 'OpenShift Intro Blog Post',
    subtitle: 'How OpenShift is different than from just plan Kubernetes.',
    lastModifiedDate: 'Oct 14, 2020',
    linkUrl: 'https://www.carahsoft.com/community/red-hat-kubernetes-container-platform-blog-2020',
    imageUrl: 'https://www.carahsoft.com/wordpress/wp-content/uploads/2020/10/RH_Kubernetes_blog_300x300-300x300.jpg',
    imageAltText: 'Evolving Kubernetes into an Enterprise Container Platform',
    description: 'OpenShift and Kubernetes are both container orchestration platforms. How exactly do they differ? Read this blog post to see what these differences are.',
    type: 'blog'
  }];
  return <BasePage cells={cells} subtitle="Basics" />;
}
