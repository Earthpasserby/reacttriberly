import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Stack } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6} className="mt-5  ">
            <Button id="p-btn">Trench Apps</Button>

            <h1 id="home">
              Connecting people in <br /> Diaspora
            </h1>
            <p id="graph" className="w-100">
              connect across continents with people of the same cultural roots
              and interest as you! Our platform connects you with like-minded
              individuals across the globe.
            </p>

            <Stack direction="horizontal" gap={2} className="mt-5">
              <Image
                src="link4.png"
                alt="applestoreimage"
                style={{ width: 167, height: 50 }}
              />
              <Image
                src="link3.png"
                alt="applestoreimage"
                style={{ width: 167, height: 50 }}
              />
            </Stack>
            <div className="socialIcon ">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />
              <span id="wp">150+ ratings</span>
            </div>
          </Col>
          <Col sm={6}>
            <Image
              src="first.png"
              alt="firstimg"
              id="firstImg"
              fluid
              className="img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
