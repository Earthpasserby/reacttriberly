import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

const Body = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <Image
              src="lady.png"
              alt="lady smiling"
              id="bodyImg"
              fluid
              className="img"
            />
          </Col>

          <Col sm={6} className="Bodyp" id="bodyp">
            <h2 id="body">Find your community on Trench</h2>
            <p>
              At Trench, we invite you to join our growing community of
              diasporians together, we celebrate the beauty of the trenches, by
              embracing our different cultural heritage, and connect
              spiritually.
            </p>
            <a href="/" id="moreL">
              Find Out More
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Col>
        </Row>
      </Container>
      {/* <section className="Body">
        <div className="container Body">
          <div className="bodyLeft">
            <div className="img">
              <img src="lady.png" alt="lady smiling" id="bodyImg" />
            </div>
          </div>
          <div className="bodyRight">
            <h2>Find your community on Trench</h2>
            <p>
              At Trench, we invite you to join our growing community of
              diasporians together, we celebrate the beauty of the trenches, by
              embracing our different cultural heritage, and connect
              spiritually.
            </p>
            <br />
            <a href="/" id="moreL">
              Find Out More
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Body;
