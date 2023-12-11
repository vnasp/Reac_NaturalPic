import { useContext } from "react"
import { PhotosContext } from "../context/PhotosContext"
import { Container, Row, Col, Card } from 'react-bootstrap'
import IconHeart from "./IconHeart"

const Gallery = () => {
  const { photos, setPhotos,resultadoBusqueda } = useContext(PhotosContext)
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
    <Container className="flex-fill bg-white overflow-x-scroll">
      <Row xs={1} md={2} lg={4} className="g-3 pb-3 mb-3">
        {resultadoBusqueda.map((photo) => (
          <Col key={photo.id} className="position-relative" onClick={() => addFavorites(photo.id)}>
            <Card>
              <Card.Img src={photo.src.tiny} alt={photo.alt} className="photo rounded" />
              <div className="photo-icon position-absolute"><IconHeart filled={photo.liked} /></div>
              <div className="position-absolute text-white text-start photo-alt rounded-bottom">{photo.alt}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default Gallery
