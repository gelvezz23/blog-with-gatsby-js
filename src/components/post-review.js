import React from 'react';
import Image from 'gatsby-image'
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import ReadLink from './read-link';

const PostPreview = ({ post }) => {
 
  return (
    <>
    
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0;
        padding-bottom: 1rem;
        display:flex;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      
      <Link to={post.slug} css={css`
      margin: 1rem 1rem 0 0; 
      width: 500px;
      `}>
      <Image fluid={post.image?.sharp?.fluid} css={css`
        *{
          margin-top:0;
          }
        `}
      alt={post.title}
      />
      </Link>
      <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Leer mas &rarr;</ReadLink>
      </div>
    </article>
    </>
  );
};

export default PostPreview;
