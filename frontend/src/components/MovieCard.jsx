import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import notFoundImage from './../assets/notfound.png'

function BasicExample() {
  return (
    <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={notFoundImage} />
    <Card.ImgOverlay>
        <Card.Text>Release date</Card.Text>
        <Card.Text>Lang</Card.Text>
    </Card.ImgOverlay>
      <Card.Body>
        <div className='movie-card-title'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text><strong>8.7</strong></Card.Text>
        </div>

        <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui accusantium nihil 
            facilis animi ullam consequuntur architecto numquam necessitatibus natus nisi facere 
            debitis eius, eos voluptatem vel magnam omnis eaque.
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;