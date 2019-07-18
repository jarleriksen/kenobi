import React, { useState } from 'react';
import styled from 'styled-components';
import { IconNames } from '@blueprintjs/icons';
import { Icon, Input, Text } from '../../src';
import Row from './Row';

const iconKeys = Object.keys(IconNames);

const IconSearch = () => {
  const [query, setQuery] = useState('');

  const search = iconKeys.filter((key) => {
    if (query.trim().length === 0) return iconKeys;

    return IconNames[key].toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return (
    <div>
      <Input
        placeholder="Search for an Icon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconsWrapper>
        {search.map((icon) => {
          return (
            <IconWrapper key={icon}>
              <Icon icon={IconNames[icon]} marginRight={4} />
              <Text as="p" size={300}>
                {IconNames[icon]}
              </Text>
            </IconWrapper>
          );
        })}
      </IconsWrapper>
    </div>
  );
};

const IconsWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 20%;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16px;
`;

export default IconSearch;
