import { useContext } from "react"
import { PhotosContext } from "../context/PhotosContext"
import { Container, Row, Col, Card } from 'react-bootstrap'
import FavoriteGrid from "../components/FavoriteGrid"
import FavoriteEmpty from "../components/FavoriteEmpty"

const Favorites = () => {
  const { photos } = useContext(PhotosContext)
  const photosFavorites = photos.filter((photo) => photo.liked === true)

  const isFavorite = photosFavorites.length > 0

  return (
    <>
      <Row className="mt-3">
        <Col>
          <h2>Fotos Favoritas</h2>
        </Col>
      </Row>
      <Container className="flex-fill vh-100 bg-white overflow-x-scroll">
        {isFavorite ? <FavoriteGrid /> : <FavoriteEmpty />}
      </Container>
    </>
  )
}
export default Favorites;
