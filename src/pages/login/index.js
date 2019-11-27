import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest, signFailure } from "../../store/modules/auth/actions";

import { Content, Container, Logo, Box, Footer } from "./style";
import { Button } from "../../components/defaultComponents/Button";
import { InputText } from "../../components/defaultComponents/InputText";
import RegisterModal from "../../components/modals/Register";

import logo from "../../assets/images/logo-da-hora.png";
import { successMessage, errorMessage } from "~/utils/toastNotification";
import NameInput from "../../components/defaultComponents/NameInput";

export default function Login() {
  const dispatch = useDispatch();

  const [registerModalOpened, setRegisterModalOpened] = useState(false);

  const [inputLogin, setInputLogin] = useState("google@gmail.com");
  const [inputPassword, setInputPassword] = useState("123456");
  const [inputCpf, setInputCpf] = useState("");
  const loading = useSelector(state => state.auth.loading);

  function handleLogin(e) {
    e.preventDefault();
    if (inputLogin === "") {
      errorMessage({ message: "Nome de usuário em branco" });
      return;
    }

    if (inputPassword === "") {
      errorMessage({ message: "Senha em branco" });
      return;
    }
    dispatch(signInRequest(inputLogin, inputPassword));
  }

  function openRegisterModal() {
    setRegisterModalOpened(true);
  }

  function closeRegisterModal() {
    setRegisterModalOpened(false);
  }

  function handleFirstAccess(e) {
    e.preventDefault();
    if (inputCpf === "") {
      errorMessage({ message: "Nome não informado" });
      return;
    }
    openRegisterModal();
  }

  useEffect(() => {
    dispatch(signFailure());
  }, [dispatch]);

  return (
    <Content>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Container>
        <Box>
          <div className="header">
            <h3>Já cadastrado</h3>
          </div>
          <div className="body">
            <form onSubmit={handleLogin}>
              <NameInput
                name="login"
                value={inputLogin}
                onChange={e => setInputLogin(e.target.value)}
              />
              <InputText
                name="password"
                placeholder="Digite aqui sua senha"
                type="password"
                value={inputPassword}
                onChange={e => setInputPassword(e.target.value)}
              />
              <Button
                type="submit"
                value={loading ? "Carregando" : "Entrar"}
                disabled={loading ? true : null}
              />
            </form>
          </div>
        </Box>
        <Box className="marginLeft">
          <div className="header">
            <h3>Primeiro Acesso</h3>
          </div>
          <div className="body">
            <form onSubmit={handleFirstAccess}>
              <div>
                <NameInput
                  name="cpf"
                  value={inputCpf}
                  onChange={e => setInputCpf(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                value={loading ? "Carregando" : "Cadastrar"}
                disabled={loading ? true : null}
              />
            </form>
          </div>
        </Box>
      </Container>

      <Footer />
      <RegisterModal
        opened={registerModalOpened}
        onClose={closeRegisterModal}
        closeOnDocumentClick
        name={inputCpf}
      />
    </Content>
  );
}
