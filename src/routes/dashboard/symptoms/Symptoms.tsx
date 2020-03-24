import React, { useEffect } from 'react';
import { Row, Col, Media } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import lo from 'src/i18n/locale.json';
import SymtomSVG from './SymtomSVG';
import SymtomChart from './SymptomChart';

const Symptoms = () => {
  const [t] = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-3">
        <Row className="mt-5">
          <Col lg="3" className="mt-4 text-white">
            <div className="h5 title bg-orange">{t(lo.sym_CONTAGION)}</div>

            {/* <Media className="mt-4">
              <img alt={''} src="/images/airtransmission.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Air Transmission</Media.Body>
            </Media> */}

            <Media className="mt-4">
              <img alt={''} src="/images/humancontact.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">{t(lo.sym_HumanContact)}</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/containedobject.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">{t(lo.sym_ContaminatedObject)}</Media.Body>
            </Media>

            {/* <Media className="mt-4">
              <img alt={''} src="/images/unvaccinatedanimals.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Unvaccinated Animals</Media.Body>
            </Media> */}
          </Col>

          <Col lg="6" className="mt-4">
            <SymtomSVG />
          </Col>

          <Col lg="3" className="mt-4">
            <div className="h5 title bg-yellow">PREVENTIONS</div>

            <Media className="mt-4">
              <img alt={''} src="/images/wearmasks.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Wear Masks</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/washhand.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Wash your Hands</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/socialdistance.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Social Distancing</Media.Body>
            </Media>

            {/* <Media className="mt-4">
              <img alt={''} src="/images/usenose-rag.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Use Nose-Rag</Media.Body>
            </Media> */}

            {/* <Media className="mt-4">
              <img alt={''} src="/images/avoid.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Avoid Contact with Unvaccinated Animals</Media.Body>
            </Media> */}
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md="9" sm="12">
            <div className="rounded oveflow-hidden bg-bluelight p-3">
              <SymtomChart />
            </div>

            <div className="small my-3 text-center text-lightblue">* Sometimes for children</div>

            <div className="small my-3 text-center text-lightblue">
              Sources: CDC, WHO, American College of Allergy, Asthma and Immunology
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Symptoms;
