import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Select as PSelect,
  SelectOption,
} from '@patternfly/react-core';

export default function Select({ options, variant, label }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const onRiskSelect = (event, selection, isPlaceholder) => {
    const selected = isPlaceholder ? null : selection;
    setSelected(selected);
    setExpanded(false);
  };
  const onToggle = () => setExpanded(!expanded);

  return (
    <PSelect
      variant={variant}
      aria-label={label}
      onToggle={onToggle}
      onSelect={onRiskSelect}
      selections={selected}
      isExpanded={expanded}
    >
      {options.map((option, index) => (
        <SelectOption isDisabled={option.disabled} key={option.key || index} value={option.value} />
      ))}
    </PSelect>
  );
}

Select.propTypes = {
  options: PropTypes.shape({
    disabled: PropTypes.bool,
    key: PropTypes.number,
    value: PropTypes.string
  }),
  variant: PropTypes.string,
  label: PropTypes.string
};
Select.defaultProps = {
  options: [],
  variant: 'single',
  label: 'Select Input'
};
