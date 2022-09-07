import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import notFoundImage from './../assets/notfound.png'
import { useNavigate } from 'react-router-dom'

function SearchMovieCard({id,title,overview,image,release_date,vote_average}) {

  const navigation = useNavigate()
  const navigate = () => {
    navigation('/movies/movie-details-page',{
      state:{
        id:id
      }
    })
  }
  return (
    <Card style={{display: 'flex',width:'100%',flexDirection:'row',marginBottom:'1rem'}}>
      {image?
      <Card.Img 
      variant="top" 
      src={`https://image.tmdb.org/t/p/w500/${image}`} 
      style={{width:'120px',height:'180px'}}/>
      :
      <Card.Img variant="top" src={notFoundImage} style={{width:'120px',height:'180px'}}/>
      }
      <Card.Body style={{height:'10vh'}}>
        <div className='movie-card-title'>
        <Card.Title>{title}</Card.Title>
        <Card.Text><strong>{vote_average}</strong></Card.Text>
        </div>
        <Card.Text  style={{ height:'5vh', overflow: 'hidden'}}>{overview}</Card.Text>
        <Button 
        variant="info"
        onClick={navigate}
        >View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default SearchMovieCard;