import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//import fantasy from "../data/fantasy.json";

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Col xs={6} md={4} xl={3} key={this.propsprop.asin}>
        <Card>
          <Card.Img variant="top" src={this.prop.src} height={"150px"} alt="copertina" />
          <Card.Body>
            <Card.Title className="text-truncate">{this.prop.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
