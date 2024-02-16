import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Footer = () => {
  return (
    <>
      <Container className="Footer mt-4" fluid>
        <Row className="ow">
          <Col sm={3}>
            <div className="col">
              <Image src="trench.png" alt="Trenchlogo" style={{ width: 100 }} />
              <p id="tre">
                Start connecting with Triberly and join a vibrant community of
                diverse individuals who share your experiences and interests.
              </p>
              <div className="can">
                <Image src="cart.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <Image src="glo.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <Image src="be.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <Image src="fb.png" alt="cart" style={{ width: 20 }} />
              </div>{" "}
              <div className="can">
                <Image src="ig.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <Image src="tweet.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <Image src="mail.png" alt="cart" style={{ width: 20 }} />
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="footer com">
              <h1>Company</h1>
              <br />
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  About us
                </p>
              </ul>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Pricing
                </p>
              </ul>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Blog
                </p>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className="footer">
              <h1>Legal</h1>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Terms of Services
                </p>
              </ul>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Privacy Policy
                </p>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className=" mt-4 new">
              <h1>Newsletter</h1>
              <br />
              <p>Sign up and receive the latest tips via email.</p>

              <h3>
                Write your email<span>*</span>
              </h3>
              <div className="input-icons">
                <FontAwesomeIcon icon={faEnvelope} className="env" />
                <input
                  type="text"
                  className="input-field"
                  name="email"
                  placeholder="Your email : "
                />
              </div>

              <h5 className="sub">
                <a href="/">Subscribe</a>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <section className="Footer">
        <div className="container footer">
          <div className="ow">
            <div className="col tre">
              <img src="tri.png" alt="Trenchlogo" style={{ width: 100 }} />
              <p>
                Start connecting with Triberly and join a vibrant community of
                diverse individuals who share your experiences and interests.
              </p>
              <br />
              <br />
              <div className="can">
                <img src="cart.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <img src="glo.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <img src="be.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <img src="fb.png" alt="cart" style={{ width: 20 }} />
              </div>{" "}
              <div className="can">
                <img src="ig.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <img src="tweet.png" alt="cart" style={{ width: 20 }} />
              </div>
              <div className="can">
                <img src="mail.png" alt="cart" style={{ width: 20 }} />
              </div>
            </div>
            <div className="col com">
              <h1>Company</h1>
              <br />
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  About us
                </p>
              </ul>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Pricing
                </p>
              </ul>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Blog
                </p>
              </ul>
            </div>
            <div className="col">
              <h1>Legal</h1>
              <br />
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Terms of Services
                </p>
              </ul>
              <ul>
                <p>
                  <FontAwesomeIcon icon={faAngleRight} className="con" />
                  Privacy Policy
                </p>
              </ul>
            </div>
            <div className="col new">
              <h1>Newsletter</h1>
              <br />
              <p>Sign up and receive the latest tips via email.</p>
              <br />
              <h3>
                Write your email<span>*</span>
              </h3>
              <div className="input-icons">
                <FontAwesomeIcon icon={faEnvelope} className="env" />
                <input
                  type="text"
                  className="input-field"
                  name="email"
                  placeholder="Your email : "
                />
              </div>
              <br />

              <h5 className="sub">
                <a href="/">Subscribe</a>
              </h5>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Footer;
