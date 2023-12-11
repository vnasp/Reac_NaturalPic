import { useContext,useEffect } from "react"
import { Container, Row, Col, Form } from 'react-bootstrap'
import { PhotosContext } from "../context/PhotosContext"

const Search = () => {
  const { photos, busqueda, setBusqueda, resultadoBusqueda,setResultadoBusqueda } = useContext(PhotosContext)

  const handleChange = (e) => {
    e.preventDefault()
    setBusqueda(e.target.value)
  }
  useEffect(() => {
    if (!busqueda) {
      setResultadoBusqueda(photos)
    } else {
      setResultadoBusqueda(photos.filter((photo) =>
        photo.alt.toLowerCase().includes(busqueda) 
      ))
    }
  }, [photos, busqueda,setResultadoBusqueda]);

const results = resultadoBusqueda.length

  return (
    <Container className="my-3">
      <Row className="d-flex justify-content-between align-items-center">
        <Col>
          Hay {results} fotografías
        </Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <Form className="rounded-3" style={{ width: '100%' }}>
            <Form.Group controlId="formBuscar">
              <Form.Control type="text" name="buscador" placeholder="Buscador..." value={busqueda} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Container>

  )
}

export default Search