import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';





const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;

const Header = () => (
  <header
    css={css`
      background: black;
      boder-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      margin-top: 0px;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 3);
      aling-items: center;
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Silux Blog
    </NavLink>

    <nav
      css={css`
        margin-top: 0px;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
    {/** site name  */}
    {/** navigation  */}
  </header>
);

export default Header;
