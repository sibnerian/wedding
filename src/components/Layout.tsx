import React from 'react';
import SEO, { Props as SEOProps } from './SEO';
import Navbar from '../views/Navbar';
import '../style/main.scss';

type Props = {
  children: React.ReactNode;
  seo: SEOProps;
};

const anchors = ['Sara', 'Ian', 'Doggos'];
const frontMatter = {
  brand: 'Sara & Ian',
  menuText: 'Menu',
};

export default function Layout({ children, seo }: Props) {
  return (
    <>
      <SEO title="Sara & Ian" {...seo} />
      <Navbar anchors={anchors} frontmatter={frontMatter} />
      {children}
    </>
  );
}
