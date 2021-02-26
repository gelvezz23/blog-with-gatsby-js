module.exports = {
  siteMetadata: {
    title: 'Workshop',
    description: 'work shop for create page with gatsby js',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `./src/post`,
        path: `./src/post`,
      },
    },
  ],
};
