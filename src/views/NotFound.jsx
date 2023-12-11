import { Container, Row, Col, Image } from "react-bootstrap"

const NotFound = () => {
  return (
    <>
      <Container className="flex-fill vh-100 bg-white overflow-x-scroll mt-3">
        <Row className="mb-3">
          <Col className="text-center">
            <h1>¡Este paisaje aún no ha sido creado!</h1>
            <h3>Prueba ingresando desde el inicio nuevamente</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Image src="/logo.png" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound