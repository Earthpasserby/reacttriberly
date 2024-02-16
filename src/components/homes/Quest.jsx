// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// import Accordion from "react-bootstrap/Accordion";

// import Stack from "react-bootstrap/Stack";

const Quest = () => {
  // const [toggle, setToggle] = useState(1);
  // function toggleTab(id) {
  //   setToggle(id);
  // }
  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <h1>Frequently Asked Questions</h1>
            <p id="qust">
              Start working with <span id="trench">Trench</span> that can
              provide everything you need to generate awareness, drive traffic
              and connect.
            </p>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can i join the trench community
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Joining Trench is simple! just download the app, follow the
                    registration steps, and you'll be part of our diaspora
                    community.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Is Trench free to use?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Joining Trench is simple! just download the app, follow the
                    registration steps, and you'll be part of our diaspora
                    community.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is Trench available globally?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Joining Trench is simple! just download the app, follow the
                    registration steps, and you'll be part of our diaspora
                    community.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How can i provide feedback or suggestions for the platform?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Joining Trench is simple! just download the app, follow the
                    registration steps, and you'll be part of our diaspora
                    community.
                  </div>
                </div>
              </div>
            </div>

            {/* <Accordion defaultActiveKey="0" className="card">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How can i join Trenchcommunity
                </Accordion.Header>
                <Accordion.Body>
                  Joining Trench is simple! just download the app, follow the
                  registration steps, and you'll be part of our diaspora
                  community.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How can i join The community
                </Accordion.Header>
                <Accordion.Body>
                  Trench is simple! just download the app, follow the
                  registration steps, and you'll be part of our diaspora
                  community.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}
          </Col>

          <Col sm={6} className="mt-2">
            <Image
              src="gr.png"
              alt="Group smiling"
              id="questImg"
              fluid
              className="img"
            />
          </Col>
        </Row>
      </Container>

      {/* <section className="Quest">
        <div className="container quest">
          <div className="leftQ">
            <h1>Frequently Asked Questions</h1>
            <p>
              Start working with <span id="trench">Trench</span> that can
              provide everything you need to generate awareness, drive traffic
              and connect.
            </p>
            <br />
            <div className="Scontainer">
              <div className="bloc-tabs">
                <div onClick={() => toggleTab(1)}>
                  How can i join Trenchcommunity
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <br />
              <div className="bloc-tabs">
                <div onClick={() => toggleTab(2)}>Is Trench free to use?</div>
              </div>
              <br />
              <div className="bloc-tabs">
                <div onClick={() => toggleTab(3)}>
                  Is Trench available globally?
                </div>
              </div>
              <br />
              <div className="bloc-tabs">
                <div onClick={() => toggleTab(4)}>
                  How can i provide feedback or suggestions for the platform?
                </div>
                <div
                  className={toggle === 4 ? "active-content" : "content-tabs"}
                >
                  <p>
                    Joining Trench is simple! just download the app, follow the
                    registration steps, and you'll be part of our diaspora
                    community.
                  </p>
                </div>
              </div>
              <div className={toggle === 2 ? "active-content" : "content-tabs"}>
                <p>
                  Joining Trench is simple! just download the app, follow the
                  registration steps, and you'll be part of our diaspora
                  community.
                </p>
              </div>
              <div className={toggle === 3 ? "active-content" : "content-tabs"}>
                <p>
                  Joining Trench is simple! just download the app, follow the
                  registration steps, and you'll be part of our diaspora
                  community.
                </p>
              </div>
            </div>
          </div>
          <div className="rightQ">
            <div className="img">
              <img src="gr.png" alt="Group smiling" id="questImg" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Quest;
