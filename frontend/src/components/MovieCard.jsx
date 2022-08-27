import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import notFoundImage from './../assets/notfound.png'

function TopMovieCard({title,overview,image,release_date,vote_average,original_language}) {
  return (
    <Card style={{ width: '30rem', alignSelf:'flex-start'}}>
      {image !== ''?
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${image}`}/>
      :
      <Card.Img variant="top" src={notFoundImage} />
      }

    <Card.ImgOverlay style={{color:'#fff',fontWeight:'Bold'}}>
        <Card.Text>{release_date}</Card.Text>
        <Card.Text>{original_language}</Card.Text>
    </Card.ImgOverlay>
      <Card.Body style={{height:'30vh'}}>
        <div className='movie-card-title'>
        <Card.Title>{title}</Card.Title>
        <Card.Text><strong>{vote_average}</strong></Card.Text>
        </div>

        <Card.Text  style={{ height: '46%' , overflow: 'hidden' }}>{overview}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default TopMovieCard;