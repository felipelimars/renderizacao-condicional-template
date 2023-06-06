import { Div, Titulo } from "./styled";

function TelaPrincipal({mudarTela}) {
  const deslogar = () => {
  mudarTela("login")  
  alert("Sessão encerrada!")
  }

  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={deslogar}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;