import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import Top from '../views/Top';
import Map from '../views/Map';
import Accommodations from '../views/Accommodations';
import ThingsToDo from '../views/ThingsToDo';
import Story from '../views/Story';

export default function IndexPage() {
  const {
    site: {
      siteMetadata: { description, keywords },
    },
  } = useStaticQuery(
    graphql`
      query SiteDataQuery {
        site {
          siteMetadata {
            keywords
            description
          }
        }
      }
    `,
  );
  return (
    <Layout seo={{ keywords, description }}>
      <Top header="Sara & Ian<br>are getting married!" subheader="09.24.2022 • Philadelphia, PA" />
      <Story />
      <Map />
      <Accommodations />
      <ThingsToDo />
    </Layout>
  );
}
