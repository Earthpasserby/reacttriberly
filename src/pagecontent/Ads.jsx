import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Ads = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col sm={12}>
            <div className="feat">
              <div className="container">
                <div className="Feat">
                  <h1>App Features</h1>
                  <p>
                    Start connecting with <span id="trench">Trench</span> and
                    join a vibrant community of diverse individuals <br /> who
                    share your interest and enthusiasim.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 mt-1">
          <Col sm={6}>
            <div>
              <Image
                src="page.png"
                alt="phone layout"
                id="adImg"
                className="img"
              />
            </div>
          </Col>
          <Col sm={6} id=" Ads" className="mt-4">
            <Row>
              <Col sm={6}>
                <Row className="py-2 my-2">
                  <Col sm={2}>
                    <Image src="g.png" alt="leaf" className="icon" />
                  </Col>
                  <Col sm={10}>
                    <h4>Advertisement!</h4>
                    <p>
                      Advertise yourself and products with others that share the
                      same core value as you.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Row className="py-2 my-2">
                  <Col sm={2}>
                    <Image src="per.png" alt="leaf" className="icon" />
                  </Col>
                  <Col sm={10}>
                    <h4>Events and Meetups</h4>
                    <p>
                      Create, Discover and attend cultural events, festivals,
                      and meetups happening near you.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Row className="py-2 my-2">
                  <Col sm={2}>
                    <Image src="vg.png" alt="leaf" className="icon" />
                  </Col>
                  <Col sm={10}>
                    <h4>Communities</h4>
                    <p>
                      Create or Join a preferred community and get updates on
                      news, events, and stories from your home country and
                      diaspora communities.
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col sm={6}>
                <Row className="py-2 my-2">
                  <Col sm={2}>
                    <Image src="lv.png" alt="leaf" className="icon" />
                  </Col>
                  <Col sm={10}>
                    <h4>Personalized Profile</h4>
                    <p>
                      Create and customize your unique profiles to attract
                      amzing people that share the same interest as you"Tailored
                      Profiles
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Row className="py-2 my-2">
                  <Col sm={2}>
                    <Image src="vec.png" alt="leaf" className="icon" />
                  </Col>
                  <Col sm={10}>
                    <h4>Global Connections</h4>
                    <p>
                      Connect with diaspora members around the world. Share your
                      experiences, exchange stories, and create lasting
                      friendships.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Row className="py-2 my-2">
                  <Col sm={2}>
                    <Image src="SVG.png" alt="leaf" className="icon" />
                  </Col>
                  <Col sm={10}>
                    <h4>Services and support Network</h4>
                    <p>
                      Find support, advice, and resources for your unique
                      diaspora journey. Connect with others who understand.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <section className="Ads">
        <div className="container Ads">
          <div className="leftD">
            <div className="img">
              <img src="page.png" alt="phone layout" id="adImg" />
            </div>
          </div>
          <div className="rightD">
            <div className="row">
              <img src="g.png" alt="leaf" className="icon" />
              <div className="leftR">
                <h4>Advertisement!</h4>
                <p>
                  Advertise yourself and products with others that share the
                  same core value as you.
                </p>
              </div>

              <img src="per.png" alt="leaf" className="icon" />
              <div className="rightR">
                <h4>Events and Meetups</h4>
                <p>
                  Create, Discover and attend cultural events, festivals, and
                  meetups happening near you.
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <img src="vg.png" alt="leaf" className="icon" />
              <div className="leftR">
                <h4>Communities</h4>
                <p>
                  Create or Join a preferred community and get updates on news,
                  events, and stories from your home country and diaspora
                  communities.
                </p>
              </div>
              <img src="lv.png" alt="leaf" className="icon" />
              <div className="rightR">
                <h4>Personalized Profile</h4>
                <p>
                  Create and customize your unique profiles to attract amzing
                  people that share the same interest as you"Tailored Profiles
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <img src="vec.png" alt="leaf" className="icon" />
              <div className="leftR">
                <h4>Global Connections</h4>
                <p>
                  Connect with diaspora members around the world. Share your
                  experiences, exchange stories, and create lasting friendships.
                </p>
              </div>
              <img src="SVG.png" alt="leaf" className="icon" />
              <div className="rightR">
                <h4>Services and support Network</h4>
                <p>
                  Find support, advice, and resources for your unique diaspora
                  journey. Connect with others who understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Ads;
