import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Text } from 'components/Text';

import { DropdownIcon } from '../../icons/DropdownIcon';

const StyledSelect = styled.select`
  border-radius: var(--amino-radius);
  outline: none !important;
  box-sizing: border-box;
  transition: var(--amino-transition);
  display: block;
  height: var(--amino-input-height);
  width: 100%;
  padding: 0 var(--amino-space-half);
  background: var(--amino-input-background);
  border: 0;
  box-shadow: var(--amino-border-shadow-sm);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus,
  &:active {
    outline: none;
    box-shadow: var(--amino-glow-blue);
  }
`;

const DropdownContainer = styled.div`
  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }
`;

const SelectWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(--amino-space-half);
    top: 11px;
    pointer-events: none;
    width: 16px;
    height: 16px;
    opacity: 0.3;
    transition: opacity 100ms ease-in-out;
    color: var(--amino-text-color);
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

export type SelectProps = {
  autoFocus?: boolean;
  items: Array<any>;
  label?: string;
  helpText?: string;
  onChange: (newValue: string) => void;
  value: string;
  placeholder?: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  labelFormatFunction?: (labelToFormat: string) => string;
  required?: boolean;
  tabIndex?: number;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      autoFocus,
      items,
      label,
      onChange,
      helpText,
      value,
      placeholder,
      itemLabelPath,
      itemValuePath,
      labelFormatFunction,
      required = false,
      tabIndex,
    },
    ref
  ) => {
    const getItemLabel = (index: number) => {
      const itemLabel = itemLabelPath
        ? items[index][itemLabelPath]
        : items[index].label;

      if (labelFormatFunction) {
        return labelFormatFunction(itemLabel as string);
      }
      return itemLabel;
    };

    return (
      <DropdownContainer className="amino-input-wrapper">
        {label && <Text type="inputlabel">{label}</Text>}

        <SelectWrapper>
          <StyledSelect
            autoFocus={autoFocus}
            onChange={e => onChange(e.target.value)}
            ref={ref}
            tabIndex={tabIndex}
            value={value}
            aria-label={label}
          >
            {!required && placeholder && (
              <option value="">{placeholder}</option>
            )}
            {items.map((item, index) => (
              <option
                key={getItemLabel(index)}
                value={itemValuePath ? item[itemValuePath] : item.value}
              >
                {getItemLabel(index)}
              </option>
            ))}
          </StyledSelect>
          <DropdownIcon />
        </SelectWrapper>

        {helpText && <Text type="subtitle">{helpText}</Text>}
      </DropdownContainer>
    );
  }
);
