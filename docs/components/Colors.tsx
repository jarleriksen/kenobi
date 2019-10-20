import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph, theme } from 'kenobi-ui';

const Colors = () => {
  return (
    <Wrapper>
      <StyledHeading size={800}>Palette</StyledHeading>
      {Object.entries(theme.colors.palette).map((key, index) => (
        <div style={{ marginTop: '1rem' }} key={index}>
          <Heading size={600}>{key[0]}</Heading>
          <Section>
            {Object.entries(key[1]).map((item, index) => {
              return (
                <Content key={index}>
                  <ColorRectangle color={item[1]} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '1rem',
                    }}>
                    <Paragraph>{item[0]}</Paragraph>
                    <Paragraph>{item[1]}</Paragraph>
                  </div>
                </Content>
              );
            })}
          </Section>
        </div>
      ))}
      <StyledHeading size={800}>Intent</StyledHeading>
      {Object.entries(theme.colors.intent).map((key: any, index: number) => {
        return key[0] !== 'none' ? (
          <div style={{ marginTop: '1rem' }} key={index}>
            <Section>
              {Object.entries(key[1]).map((item: any, index: number) => {
                return item[1] !== 'white' ? (
                  <Content key={index}>
                    <ColorRectangle color={item[1]} />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '1rem',
                      }}>
                      <Paragraph>{key[0]}</Paragraph>
                      <Paragraph>{item[1]}</Paragraph>
                    </div>
                  </Content>
                ) : null;
              })}
            </Section>
          </div>
        ) : null;
      })}
      <StyledHeading size={800}>Icon</StyledHeading>
      {Object.entries(theme.colors.icon).map((item: any, index) => {
        return item[0] !== 'none' ? (
          <div style={{ marginTop: '1rem' }} key={index}>
            <Section>
              <Content key={index}>
                <ColorRectangle color={item[1]} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '1rem',
                  }}>
                  <Paragraph>{item[0]}</Paragraph>
                  <Paragraph>{item[1]}</Paragraph>
                </div>
              </Content>
            </Section>
          </div>
        ) : null;
      })}
      <StyledHeading size={800}>Text</StyledHeading>
      {Object.entries(theme.colors.text).map((item: any, index) => {
        return item[0] !== 'none' ? (
          <div style={{ marginTop: '1rem' }} key={index}>
            <Section>
              <Content key={index}>
                <ColorRectangle color={item[1]} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '1rem',
                  }}>
                  <Paragraph>{item[0]}</Paragraph>
                  <Paragraph>{item[1]}</Paragraph>
                </div>
              </Content>
            </Section>
          </div>
        ) : null;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-transform: capitalize;
`;

const StyledHeading = styled(Heading)`
  padding-top: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: initial;
`;

const Content = styled.div`
  display: flex;
  text-transform: initial;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.palette.neutral.light};
`;

const ColorRectangle = styled.div<any>`
  border-radius: 4px;
  background-color: ${({ color }) => color};
  width: 50px;
  height: 50px;
`;

export default Colors;
