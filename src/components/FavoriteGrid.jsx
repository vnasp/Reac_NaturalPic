import { useContext } from "react"
import { PhotosContext } from "../context/PhotosContext"
import { Row, Col, Card } from 'react-bootstrap'
import IconHeart from "../components/IconHeart"

const FavoriteGrid = () => {
  const { photos,setPhotos } = useContext(PhotosContext)
  const photosFavorites = photos.filter((photo) => photo.liked === true)
  
  const addFavorites = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo, liked: !photo.liked,
        }
      }
      return photo
    })
    setPhotos(newPhotos)
  }

  return (
    <div>
        <Row xs={1} md={4} className="g-3 py-3 my-3">
          {photosFavorites.map((photo) => (
            <Col key={photo.id} className="position-relative" onClick={() => addFavorites(photo.id)}>
              <Card>
                <Card.Img src={photo.src.tiny} alt={photo.alt} className="photo rounded" />
                <div className="photo-icon position-absolute"><IconHeart filled={photo.liked} /></div>
                <div className="position-absolute text-white text-start photo-alt rounded-bottom">{photo.alt}</div>
              </Card>
            </Col>
          ))}
        </Row>
    </div>
  )
}
export default FavoriteGrid
