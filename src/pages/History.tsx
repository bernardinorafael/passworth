import PasswordListItem from "../components/PasswordListItem"
import usePasswordContext from "../context/PasswordContext"
import { Container, Table } from "../css/pages/History"

export default function History() {
  const { passwordList: passwords } = usePasswordContext()

  return (
    <Container>
      <main className="animate__animated animate__fadeIn">
        <h1>edite ou exclua suas senhas salvas.</h1>

        <div>
          <Table>
            <tbody>
              {passwords.map((password) => {
                return (
                  <PasswordListItem
                    id={password.id}
                    key={password.id}
                    password={password.password}
                    createdAt={password.createdAt!}
                    description={password.description}
                  />
                )
              })}
            </tbody>
          </Table>
        </div>
      </main>
    </Container>
  )
}
