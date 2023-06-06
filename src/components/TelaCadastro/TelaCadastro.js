import TelaLogin from "../TelaLogin/TelaLogin";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";
import TelaPrincipal from "../TelaPrincipal/TelaPrincipal";

function TelaCadastro({ mudarTela }) {
  const cadastrar = () => {
    mudarTela("principal")
  }

  const mostrarTelaLogin = () => mudarTela("login")

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>

        <SendButton onClick={cadastrar}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
