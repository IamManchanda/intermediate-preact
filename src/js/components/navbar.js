import React from 'preact-compat';
import { Link } from 'preact-router';
import styled, { keyframes } from 'preact-emotion';
import colors from './styled/color';

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpanWithStyled = styled('span')`
  display: inline-block;
  animation: 1s ${Spin} linear infinite;
`;

const HeaderWithStyled = styled('header')`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const LinkWithStyled = styled(Link)`
  color: HotPink;
`;

export default () => (
  <HeaderWithStyled>
    <LinkWithStyled href="/">
      Adopt Pets!
    </LinkWithStyled>
    <LinkWithStyled href="/search" className="search-link">
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <SpanWithStyled aria-label="search" role="img">
        🔍
      </SpanWithStyled>
      {/* eslint-enable */}
    </LinkWithStyled>
  </HeaderWithStyled>
);
