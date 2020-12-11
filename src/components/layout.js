import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      style={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        * + * {
          margin-top: 1rem;
        }
        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.4;
          /* remove margin for the main div that gatsby mounts into*/
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5 rem;
            }
          }

          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        }
      `}
    />
    <header />
    <main>{children}</main>
  </>
);

function layout() {
  return <div></div>;
}

export default Layout;
