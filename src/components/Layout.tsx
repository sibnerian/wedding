import React from 'react';
import SEO, { Props as SEOProps } from './SEO';
import Navbar from '../views/Navbar';
import '../style/main.scss';

type Props = {
  children: React.ReactNode;
  seo: SEOProps;
};

const NAVBAR_HEIGHT_OFFSET = -56;

const anchors = [
  { to: 'story', text: 'Story', offset: NAVBAR_HEIGHT_OFFSET },
  { to: 'map', text: 'Details', offset: NAVBAR_HEIGHT_OFFSET },
  { to: 'accommodations', text: 'Accommodations', offset: NAVBAR_HEIGHT_OFFSET },
  { text: 'Registry', href: 'https://registry.theknot.com/-may-2021-ny/39764149' },
];
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
