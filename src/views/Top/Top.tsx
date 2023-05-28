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
    >
      <div className="intro-lead-in text-uppercase">
        <a href="https://baronephoto.pic-time.com/fldRlNAS2oAKV">Photos now available</a>
      </div>
    </ImageCard>
  );
}
