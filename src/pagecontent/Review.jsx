import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Review = () => {
  return (
    <>
      <Container className="Review" fluid>
        <div className="container review">
          <Col sm={12} className="view mt-5">
            <h1>What Our Users Say </h1>
            <p>
              Start working with <span id="trench">Trench </span> that can
              provide everything you need to generate
              <br /> awareness, drive traffic, connect.
            </p>
          </Col>
          <Row className="mt-5 ">
            <Col sm={4} style={{ textAlign: "center" }}>
              <Image src="mm.png" alt="samuel" style={{ width: 50 }} />
              <p className="text-center">
                " Thus, Lorem Ipsum has only limited suitability as a visual
                filler for German texts.
              </p>
              <h6>- Jill Webb</h6>
            </Col>
            <Col sm={4} style={{ textAlign: "center" }}>
              <Image src="wm.png" alt="samuel" style={{ width: 50 }} />
              <p>
                " There is now an abundance of readable dummy texts. These are
                usually used when a text is required. "
              </p>
              <h6>- Dean Tolle</h6>
            </Col>
            <Col sm={4} style={{ textAlign: "center" }}>
              <Image src="m.png" alt="samuel" style={{ width: 50 }} />
              <p>
                " According to most sources, Lorum Ipsum can be traced back to a
                text composed by Cicero. "
              </p>
              <h6>- Webb Innit</h6>
            </Col>
          </Row>
        </div>
      </Container>
      {/* <section className="Review">
        <div className="container review">
          <div className="view">
            <h1>What Our Users Say </h1>
            <p>
              Start working with <span id="trench">Trench </span> that can
              provide everything you need to generate
              <br /> awareness, drive traffic, connect.
            </p>
          </div>
          <br />
          <div className="low">
            <div className="col-4">
              <img src="mm.png" alt="samuel" />
              <p>
                " Thus, Lorem Ipsum has only limited suitability as a visual
                filler for German texts.
              </p>
              <h6>- Jill Webb</h6>
            </div>
            <div className="col-4">
              <img src="wm.png" alt="samuel" />
              <p>
                " There is now an abundance of readable dummy texts. These are
                usually used when a text is required. "
              </p>
              <h6>- Dean Tolle</h6>
            </div>
            <div className="col-4">
              <img src="m.png" alt="samuel" />
              <p>
                " According to most sources, Lorum Ipsum can be traced back to a
                text composed by Cicero. "
              </p>
              <h6>- Webb Innit</h6>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Review;
