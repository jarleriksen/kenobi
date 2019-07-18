import React, { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/src/styles';
import { Heading, Paragraph } from '../../typography';

const Colors = () => {
  return (
    <Wrapper>
      <StyledHeading size={800}>Palette</StyledHeading>
      {Object.entries(colors.palette).map((key, index) => (
        <div style={{ marginTop: '1rem' }} key={index}>
          <Heading size={600}>{key[0]}</Heading>
          <Section>
            {Object.entries(key[1]).map((item, index) => {
              return item[0] !== 'color' ? (
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
              ) : null;
            })}
          </Section>
        </div>
      ))}
      <StyledHeading size={800}>Intent</StyledHeading>
      {Object.entries(colors.intent).map((key, index) => {
        return key[0] !== 'none' ? (
          <div style={{ marginTop: '1rem' }} key={index}>
            <Section>
              {Object.entries(key[1]).map((item, index) => {
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
      {Object.entries(colors.icon).map((item, index) => {
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
      {Object.entries(colors.text).map((item, index) => {
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
  height: 100vh;
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
  border-bottom: 1px solid ${colors.palette.neutral.light};
`;

const ColorRectangle = styled.div<any>`
  border-radius: 4px;
  background-color: ${({ color }) => color};
  width: 50px;
  height: 50px;
`;

export default Colors;
