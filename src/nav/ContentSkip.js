import React from 'react';
import PropTypes from 'prop-types';
import { SkipToContent } from '@patternfly/react-core';

export default function ContentSkip({ pageId }) {
  return <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;
}
ContentSkip.propTypes = {
  pageId: PropTypes.string
};
ContentSkip.defaultProps = {
  pageId: ''
};
