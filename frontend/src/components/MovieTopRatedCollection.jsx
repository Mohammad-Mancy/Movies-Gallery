import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import topRated from './../assets/top-rated.jpg'

function MovieTopRatedCard() {
  return (
    <Row xs={1} md={1} className="g-4">
        <Col>
          <Card className="card-top-rated">
            <Link to={'/main/top-rated-popular-movies'}>
            <Card.Img variant="top" 
            src={topRated} 
            style={{width:'477px',height:'477px'}}/>
            <Card.Body>
              <Card.Title>Top Rated Popular Movies</Card.Title>
            </Card.Body>
            </Link>
          </Card>
        </Col>
    </Row>
  );
}

export default MovieTopRatedCard;