import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImagenBackground = styled(BackgroundImage)`
  background-position: top 30% center;
  backgroung-size: cover;
  height: 50vh;
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ffdb00dd 2rem, #ffdb0000);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 3) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0px;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "SILUX-fondo-blanco.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImagenBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>El blog mas SILUXERO de todos &hearts;</h1>
        <p>
          Bienvenido a nuestro blog en el cual tenemos cosas muy interesantes
          que mostrar al mundo <br />
          <Link to="/about/">Ver mas sobre nosotros</Link>
        </p>
      </TextBox>
    </ImagenBackground>
  );
};

export default Hero;
