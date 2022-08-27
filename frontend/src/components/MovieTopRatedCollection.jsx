import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import topRated from './../assets/top-rated.jpg'

function MovieTopRatedCard() {
  return (
    <Row xs={1} md={1} className="g-4">
        <Col>
          <Card className="card-top-rated">
            <Card.Img variant="top" src={topRated} style={{width:'477px',height:'477px'}}/>
            <Card.Body>
              <Card.Title>Top Rated Popular Movies</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default MovieTopRatedCard;