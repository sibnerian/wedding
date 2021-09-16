import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './ImageCard.scss';

export type Props = {
  className?: string;
  imageAlt: string;
  header?: string;
  subheader?: string;
  children?: React.ReactNode;
};

export default function ImageCard({ className, imageAlt, header, subheader, children }: Props) {
  const {
    file: { childImageSharp },
  } = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "proposal_vertical.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <Card className={clsx('image-card bg-dark text-white text-center', className)}>
      <Img
        fluid={childImageSharp.fluid}
        alt={imageAlt || header || subheader}
        imgStyle={{ objectFit: 'cover', objectPosition: '10% 73%' }}
      />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-text-no-button">
              <div className="intro-heading">{header}</div>
              <div className="intro-lead-in text-uppercase">{subheader}</div>
            </div>{' '}
            <br />
            {children}
          </div>{' '}
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
}
