import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import topRated from './../assets/top-rated.jpg'

function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4">
        <Col>
          <Card className="card-top-rated">
            <Card.Img variant="top" src={topRated} style={{width:'100%',height:'100%'}}/>
            <Card.Body>
              <Card.Title>Top Rated Popular Movies</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default GridExample;