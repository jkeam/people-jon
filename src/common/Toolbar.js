import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from '';
import {
  ToolbarItem,
  ToolbarGroup,
  ToolbarToggleGroup,
  ButtonVariant,
  TextInput,
  InputGroup,
  Button
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';

export default function Toolbar({ options }) {
  const [inputValue, setInputValue] = useState('');
  const toggleGroupItems = (
    <>
      <ToolbarItem>
        <InputGroup>
          <TextInput
            name="content-padding-data-toolbar-input1"
            id="content-padding-data-toolbar-input1"
            type="search"
            aria-label="search input example"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button variant={ButtonVariant.control} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <Select
            options={this.statusOptions.map((option, index) => ({ disabled: option.disabled, key: (option.key || index), value: option.value }))}
          />
        </ToolbarItem>
      </ToolbarGroup>
    </>
  );
  return (
    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
      {toggleGroupItems}
    </ToolbarToggleGroup>
  );
}
Toolbar.propTypes = {
  options: PropTypes.shape({
    disabled: PropTypes.bool,
    key: PropTypes.number,
    value: PropTypes.string
  })
};
Toolbar.defaultProps = {
  options: []
}
