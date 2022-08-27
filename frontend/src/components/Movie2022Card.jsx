import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import movie2022 from './../assets/movies2022.jpg'

function Movies2022() {
  return (
    <Row xs={1} md={1} className="g-4">
        <Col>
          <Card className="card-top-rated">
            <Card.Img variant="top" src={movie2022} style={{width:'477px',height:'477px'}}/>
            <Card.Body>
              <Card.Title>Movies Released in 2022</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default Movies2022;