import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from '../../button';
import Tooltip from '../src/Tooltip';
import styled from 'styled-components';

storiesOf('Tooltip', module).add('Positions', () => (
  <Wrapper>
    <InnerWrapper>
      <SectionWrapper>
        <Tooltip
          placement="top"
          trigger={<Button>Top</Button>}
          content="Learn more about a feature"
        />
        <Tooltip
          placement="bottom"
          trigger={<Button>Bottom</Button>}
          content="Learn more about a feature"
        />
      </SectionWrapper>
      <SectionWrapper>
        <Tooltip
          placement="left"
          trigger={<Button>Left</Button>}
          content="Learn more about a feature"
        />
        <Tooltip
          placement="right"
          trigger={<Button>Right</Button>}
          content="Learn more about a feature"
        />
      </SectionWrapper>
    </InnerWrapper>
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  height: 280px;
  width: 400px;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
