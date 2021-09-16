// import React from 'react';
// import { graphql } from 'gatsby';

// import Navbar from 'views/Navbar';
// import Top from 'views/Top';
// import Footer from 'views/Footer';
// import * as Sections from 'views/Sections';
// import SEO from 'components/SEO';
// import LanguageSelector from 'components/LanguageSelector';

// import 'utils/fixFontAwesome';
// import breakDownAllNodes from 'utils/breakDownAllNodes';
// import fileNameToSectionName from 'utils/fileNameToSectionName';

// import '../style/main.scss';

// /**
//  * get file name list from content/sections folder
//  */
// export const query = graphql`
//   query SiteDataQuery {
//     site {
//       siteMetadata {
//         keywords
//         description
//       }
//     }
//   }
// `;

// const IndexPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
//   const {
//     site: {
//       siteMetadata: { keywords, description },
//     },
//     allMarkdownRemark: { nodes },
//   } = data;

//   const { topNode, navBarNode, anchors, footerNode, sectionsNodes } = breakDownAllNodes(nodes);

//   let langSelectorPart;
//   if (langTextMap != null && Object.keys(langTextMap).length > 1) {
//     langSelectorPart = (
//       <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
//     );
//   }

//   return (
//     <>
//       <SEO lang={langKey} title="Caitlin & Justin" keywords={keywords} description={description} />
//       <Navbar
//         anchors={anchors}
//         frontmatter={navBarNode.frontmatter}
//         extraItems={langSelectorPart}
//       />
//       <Top frontmatter={topNode.frontmatter} />
//       {
//         // dynamically import sections
//         sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
//           const sectionComponentName = fileNameToSectionName(fileName);
//           const SectionComponent = Sections[sectionComponentName];

//           return SectionComponent ? (
//             <SectionComponent
//               key={sectionComponentName}
//               className={ind % 2 === 1 ? 'bg-light' : null}
//               frontmatter={frontmatter}
//             />
//           ) : null;
//         })
//       }
//       <Footer frontmatter={footerNode.frontmatter} />
//     </>
//   );
// };

// export default IndexPage;
