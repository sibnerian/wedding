import React from 'react';
import ImageCard from '../../components/ImageCard';
import './Top.scss';

export type Props = {
  header: string;
  subheader: string;
};

export default function Top({ header, subheader }: Props) {
  return (
    <ImageCard
      imageAlt="Ian proposing to Sara at Rockefeller Center ice rink."
      header={header}
      subheader={subheader}
    />
  );
}
