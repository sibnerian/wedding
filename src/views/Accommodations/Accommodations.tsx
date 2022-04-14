import React from 'react';
import './Accommodations.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { EqualHeight, EqualHeightElement } from 'react-equal-height/clean';

const Accommodations = () => (
  <EqualHeight>
    <div className="accommodations-container" id="accommodations">
      <Container>
        <Row>
          <Col>
            <h1>Guest Accommodations</h1>
          </Col>
        </Row>
        <Row lg={2} xs={1}>
          <Col>
            <div className="option-container">
              <EqualHeightElement name="name">
                <div className="name">Hilton Philadelphia City Avenue</div>
              </EqualHeightElement>
              <EqualHeightElement name="address">
                <div className="address">
                  <p>4200 City Ave, Philadelphia, PA 19131</p>
                </div>
              </EqualHeightElement>
              <EqualHeightElement name="blurb">
                <div className="blurb">
                  Rooms are available at a reduced rate of $149 / night (plus tax).
                </div>
              </EqualHeightElement>
              <div>
                <a href="www.my-event.hilton.com/phlphhf-dsw-263b5af4-538b-4bd8-a65f-b5ea8a0dcfbf/">
                  <div className="cta">Book now</div>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="option-container">
              <EqualHeightElement name="name">
                <div className="name">Airbnb</div>
              </EqualHeightElement>
              <EqualHeightElement name="address">
                <div className="address">Various locations</div>
              </EqualHeightElement>
              <EqualHeightElement name="blurb">
                <div className="blurb">
                  There are a variety of options available at Airbnb to fit any taste and budget.
                </div>
              </EqualHeightElement>
              <div>
                <a href="https://www.airbnb.com/s/Chestnut-Hill--Philadelphia--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Chestnut%20Hill%2C%20Philadelphia%2C%20Pennsylvania%2C%20United%20States&place_id=ChIJySfomnG5xokRhhIKOhXKRlE&checkin=2022-09-23&checkout=2022-09-25&source=structured_search_input_header&search_type=autocomplete_click">
                  <div className="cta">View stays</div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </EqualHeight>
);

export default Accommodations;
