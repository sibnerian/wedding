import React from 'react';
import './Story.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Story = () => {
  const {
    hornduo: { childImageSharp: hornDuoImageSharp },
    venice: { childImageSharp: veniceImageSharp },
    doggos: { childImageSharp: doggosImageSharp },
    skiing: { childImageSharp: skiingImageSharp },
  } = useStaticQuery(graphql`
    query StoryImageQuery {
      hornduo: file(relativePath: { eq: "french_horn_duo.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      venice: file(relativePath: { eq: "venice.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      doggos: file(relativePath: { eq: "doggos.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      skiing: file(relativePath: { eq: "skiing.jpeg" }) {
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
          <Col
            lg={{ span: 4, offset: 1, order: 0 }}
            xs={{ span: 12, order: 1 }}
            className="image-col"
          >
            <Img
              fluid={hornDuoImageSharp.fluid}
              alt="Ian and Sara french horn duo pic from high school"
            />
          </Col>
          <Col
            lg={{ span: 5, offset: 1, order: 0 }}
            xs={{ span: 12, order: 2 }}
            className="content-col"
          >
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
        <Row>
          <Col
            lg={{ span: 5, offset: 1, order: 0 }}
            xs={{ span: 12, order: 2 }}
            className="content-col"
          >
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
              with him, she got a revenge dog, Luna.
            </p>
          </Col>
          <Col
            lg={{ span: 4, offset: 1, order: 0 }}
            xs={{ span: 12, order: 1 }}
            className="image-col"
          >
            <Img
              fluid={veniceImageSharp.fluid}
              alt="Ian and Sara in Venice after graduating college."
            />
          </Col>
        </Row>
        <Row>
          <Col
            lg={{ span: 4, offset: 1, order: 0 }}
            xs={{ span: 12, order: 1 }}
            className="image-col"
          >
            <Img
              fluid={doggosImageSharp.fluid}
              alt="Ian and Sara, and their dogs Annabelle and Luna, all dressed in matching jumpers."
            />
          </Col>
          <Col
            lg={{ span: 5, offset: 1, order: 0 }}
            xs={{ span: 12, order: 2 }}
            className="content-col"
          >
            <h2>Moving In Together</h2>
            <p>
              The pair lived their first year together in East Orange, New Jersey. While Ian worked
              at the startup, Sara enrolled in the Grace Hopper Academy to switch careers to
              software engineering - making some lifelong friends in the process!
            </p>
            <p>
              Meanwhile, Luna was serving her purpose as a revenge dog: Ian fell in love with her.
              Now he's almost as dog-crazy as Sara...but not quite.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            lg={{ span: 4, offset: 1, order: 0 }}
            xs={{ span: 12, order: 1 }}
            className="image-col"
          >
            <Img fluid={skiingImageSharp.fluid} alt="Ian and Sara on the slopes at Mount Snow." />
          </Col>
          <Col
            lg={{ span: 5, offset: 1, order: 0 }}
            xs={{ span: 12, order: 2 }}
            className="content-col"
          >
            <h2>Life in the City</h2>
            <p>
              Soon, Ian and Sara settled into a comfortable rhythm. Sara rediscovered her passion
              for figure skating and began an intense training regimen, competing on the adult
              circuit. Ian, meanwhile, dove into craft cocktails - Sara was more than happy to try
              his various experiments. The pair also discovered skiing as a shared hobby - Sara had
              never tried it before 2018, but she was a natural due to her ice skating training.
            </p>
            <p>
              In spring of 2019, Ian started shopping for a ring. Since Sara was a skater and
              Christmas is her favorite holiday (see matching sweaters above), Ian proposed to Sara
              at the Rockefeller Center Ice Rink in on December 17, 2019.
            </p>
            <p>And the rest, as they say, is history!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Story;
