import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import notFoundImage from './../assets/notfound.png'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin5Fill } from 'react-icons/ri';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TopMovieCard({id,title,overview,image,release_date,vote_average,original_language,gallery,onDelete}) {

  const navigation = useNavigate()
  const navigate = () => {
    navigation('/movies/movie-details-page',{
      state:{
        id:id
      }
    })
  }

  // on hover delete button
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      I didn't like it remove from gallery.
    </Tooltip>
  );

  return (
    <Card style={{ width: '30rem', alignSelf:'flex-start'}}>
      {image?
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${image}`}/>
      :
      <Card.Img variant="top" src={notFoundImage} />
      }

    <Card.ImgOverlay style={{color:'#fff',fontWeight:'Bold'}}>
        <Card.Text>{release_date}</Card.Text>
        {gallery?
        <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
        >
        <Button
        style={{
          background: 'transparent',
          border: 'none'
        }}>        
        <RiDeleteBin5Fill
        className='delete-button'
        onClick={onDelete}
        /></Button>
        </OverlayTrigger>

          :
          <Card.Text>{original_language}</Card.Text>
        }
    </Card.ImgOverlay>
      <Card.Body style={{height:'30vh'}}>
        <div className='movie-card-title'>
        <Card.Title>{title}</Card.Title>
        <Card.Text><strong>{vote_average}</strong></Card.Text>
        </div>

        <Card.Text  style={{ height: '58%' , overflow: 'hidden' , color: 'grey'}}>{overview}</Card.Text>
        <Button 
        variant="primary"
        onClick={navigate}
        >View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default TopMovieCard;