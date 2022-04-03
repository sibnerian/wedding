import React from 'react';
import './Story.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Story = () => {
  const {
    file: { childImageSharp: hornDuoImageSharp },
  } = useStaticQuery(graphql`
    query HornDuoImageQuery {
      file(relativePath: { eq: "french_horn_duo.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className="story-container" id="story">
      <Container>
        <Row>
          <Col>
            <h1>Our Story</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 1 }} xs={12}>
            <Img
              fluid={hornDuoImageSharp.fluid}
              alt="Ian and Sara french horn duo pic from high school"
            />
          </Col>
          <Col lg={{ span: 5, offset: 1 }} xs={12}>
            <h2>High School Sweethearts</h2>
            <p>
              Sara and Ian first met in middle school honors band, where they both played French
              horn. Sara <i>hated</i> Ian for being better at the instrument and vowed that she
              would beat him out for first chair one day.
            </p>
            <p>
              Two years later, in 2010, she did just that. For the rest of the time they played
              together, Sara would be first horn and Ian would be second.
            </p>
            <p>
              But all that time as stand partners must have payed off, because they began dating at
              the beginning of 2011. Their first kiss, fittingly enough, was at the PMEA all-state
              band concert in Hershey, Pennsylvania.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={{ span: 5, offset: 1 }} xs={12}>
            <h2>Bright College Days</h2>
            <p>
              Ian moved to Philadelphia in 2012 for college, and Sara followed a year later in 2013.
              Although they no longer played horn together, the two would continue to date through
              most of their college years.
            </p>
            <p>
              At some point during these years, Ian ditched the bowl cut for a more stylish fade.
              This is probably related to Sara's decision to continue dating him. Sara also got her
              first dog, Annabelle the beagle, during her senior year.
            </p>
            <p>
              When Ian graduated, he moved to San Francisco to work for Airbnb. Sara planned to
              follow a year later when she graduated; but SIKE! Ian took a job at a startup in New
              York instead. Sara was irate, but their relationship survived: instead of breaking up
              with h,she got a revenge dog, Luna.
            </p>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} xs={12}>
            <Img
              fluid={hornDuoImageSharp.fluid}
              alt="Ian and Sara french horn duo pic from high school"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Story;
