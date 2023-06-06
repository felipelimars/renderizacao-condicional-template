import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";
import TelaPrincipal from "../TelaPrincipal/TelaPrincipal";

function TelaLogin({mudarTela}) {
  const login = () => {
    // validação de login ainda será visto mais pra frente no curso
  }

  const mostrarTelaCadastro = () => {
    mudarTela("cadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
