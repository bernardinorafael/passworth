import { Link } from "react-router-dom"
import { Container } from "./styles"

export default function PageWithoutPasswordItem() {
  return (
    <Container>
      <strong>procuramos por toda parte.</strong>
      <strong>mas não encontramos nenhuma senha gerada.</strong>

      <p>
        gostaria de voltar para a <Link to="/">página anterior</Link> e criar uma nova?
      </p>
    </Container>
  )
}
