import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconNames } from '@blueprintjs/icons';
import { Icon } from '../';
import { Input } from '../../input';
import { Text } from '../../typography';
import styled from 'styled-components';

storiesOf('icon', module).add('Icon', () => (
  <div>
    <IconsWrapper>
      {Object.keys(IconNames).map((iconKey) => {
        return (
          <IconWrapper key={iconKey}>
            <Icon icon={IconNames[iconKey]} marginRight={4} />
            <Text as="p" size={300}>
              {IconNames[iconKey]}
            </Text>
          </IconWrapper>
        );
      })}
    </IconsWrapper>
  </div>
));

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
