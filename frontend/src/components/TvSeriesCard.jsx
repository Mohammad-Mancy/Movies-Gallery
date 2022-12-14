import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import tvSeries from './../assets/tv-series.jpg'

function MovieTopRatedCard() {
  return (
    <Row xs={1} md={1} className="g-4">
        <Col>
          <Card className="card-top-rated">
            <Link to={'/main/tv-series'}>
              <Card.Img variant="top" src={tvSeries} style={{width:'477px',height:'477px'}}/>
              <Card.Body>
                <Card.Title>Tv Series</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
    </Row>
  );
}

export default MovieTopRatedCard;