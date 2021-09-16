import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import Top from '../views/Top';

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
      <Top header="Coming soon!" subheader="Check back later." />
    </Layout>
  );
}
