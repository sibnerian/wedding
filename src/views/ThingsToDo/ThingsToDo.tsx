import React from 'react';
import './ThingsToDo.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { EqualHeight, EqualHeightElement } from 'react-equal-height/clean';

const data = [
  {
    name: "Dalessandro's Steaks",
    address: <>600 Wendover St, Philadelphia, PA 19128</>,
    blurb: (
      <>
        Genuine Philly cheesesteaks close to the wedding venue. Don't leave Philly without trying
        one.
      </>
    ),
  },
  {
    name: 'Dock Street Brewery',
    address: <>701 S 50th St, Philadelphia, PA 19143</>,
    blurb: (
      <>
        This local brewpub makes the groom's favorite beer of all time: Dock Street Rye IPA. They
        also offer tours during the day.
      </>
    ),
  },
  {
    name: 'Philadelphia Museum of Art',
    address: <>2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130</>,
    blurb: (
      <>
        Philadelphia's iconic art museum. Run up the steps and do your best Rocky impression, or
        visit the nearby Barnes Foundation for double the culture.
      </>
    ),
  },
];

const ThingsToDo = () => (
  <EqualHeight>
    <div className="things-to-do-container" id="things-to-do">
      <Container>
        <Row>
          <Col>
            <h1>Things to Do</h1>
          </Col>
        </Row>
        <Row lg={3} xs={1}>
          {data.map(({ name, address, blurb }) => (
            <Col>
              <div className="option-container">
                <EqualHeightElement name="name">
                  <div className="name">{name}</div>
                </EqualHeightElement>
                <EqualHeightElement name="address">
                  <div className="address">{address}</div>
                </EqualHeightElement>
                <EqualHeightElement name="blurb">
                  <div className="blurb">{blurb}</div>
                </EqualHeightElement>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </EqualHeight>
);

export default ThingsToDo;
