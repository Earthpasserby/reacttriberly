import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Letter = () => {
  return (
    <>
      <Container className="mx-auto">
        <Row className="mt-2">
          <Col sm={6}>
            <div>
              <Image src="velope.png" alt="Flyingenvelope" id="letImg" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="retR">
              <div className="download">
                <Button id="btn">Apps</Button>
                <a href="/" className="load">
                  Download now
                </a>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <h1>
                Available for your <br />
                Smartphones
              </h1>

              <div className="LetR">
                <Image
                  src="link2.png"
                  alt="applestoreimage"
                  style={{ width: 165, height: 54, paddingRight: 10 }}
                />
                <Image
                  src="link1.png"
                  alt="playtoreimage"
                  style={{ width: 165, height: 54, paddingRight: 10 }}
                />
              </div>

              <div className="led">
                <Image
                  src="SVG.png"
                  alt="mobilephone"
                  style={{ width: 50, marginTop: 20 }}
                />
              </div>
              <div className="led" style={{ marginTop: 20 }}>
                <p>
                  Install app now on your cellphones
                  <br />
                  <span>
                    <a href="/" id="moreL" className="learn">
                      Learn More <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <section className="Letter">
        <div className="container let">
          <div className="letR img">
            <img src="velope.png" alt="Flyingenvelope" id="letImg" />
          </div>
          <div className="retR">
            <div className="download">
              <button>Apps</button>
              <a href="/" className="load">
                Download now
              </a>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <br />
            <h1>Available for your Smartphones</h1>
            <br />

            <div className="LetR">
              <img
                src="link2.png"
                alt="applestoreimage"
                style={{ width: 165, height: 54, paddingRight: 16 }}
              />
              <img
                src="link1.png"
                alt="playtoreimage"
                style={{ width: 165, height: 54, paddingRight: 16 }}
              />
            </div>

            <div className="led">
              <img
                src="SVG.png"
                alt="mobilephone"
                style={{ width: 50, marginTop: 20 }}
              />
            </div>
            <div className="led" style={{ marginTop: 20 }}>
              <p>Install app now on your cellphones</p>
              <a href="/" id="moreL" className="learn">
                Learn More
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              <br />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Letter;
