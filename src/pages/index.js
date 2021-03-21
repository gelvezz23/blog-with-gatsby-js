import React from 'react';

import Layout from './../components/layout';
import usePost from './../hooks/use-post';
import PostPreview from './../components/post-review';
import Hero from './../components/hero';

export default () => {
  const posts = usePost();

  return (
    <>
      <Hero />
      
      <Layout>
      <h3>Mira esto.</h3>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
