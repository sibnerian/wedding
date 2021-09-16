import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

type MetaProps = JSX.IntrinsicElements['meta'];

export type Props = {
  description: string;
  meta?: MetaProps[];
  keywords: string[];
  title?: string;
};

export default function SEO({ description, meta = [], keywords, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  description = description || site.siteMetadata.description;
  title = title || site.siteMetadata.title;

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta as any[])}
    />
  );
}
