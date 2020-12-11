import React from 'react';
import { Link } from 'gatsby';

function about() {
  return (
    <>
      <h1>About Me</h1>
      <p>This is my personal website.</p>
      <Link to="/">&larr; back to home </Link>
    </>
  );
}

export default about;
