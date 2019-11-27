import React from "react";

export default function Teste() {
  return <h1>teste</h1>;
}

/* import ReactDOM from "react-dom";
import InputMask from "react-input-mask";

import {
  Content,
  ErrorMessage,
  TogglePasswordButton,
  LoginBox,
  Container,
  Logo,
  RegisterBox,
} from "./style";
import { validateCpf } from "../services/validation";

import Footer from "../Footer";
import Contact from "./components/Contact";

import "izitoast/dist/css/iziToast.css";
import api from "../services/api";

function LoginPage() {
  const [inputCpf, setInputCpf] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [isValidCpf, setIsValidCpf] = useState(true);

  useEffect(() => {
    const { location } = window;

    if (location.search.indexOf("msg=") >= 0) {
      const [, encodedMessage] = location.search.split("=");
      const decodedMessage = decodeURI(atob(encodedMessage));
      const message = decodedMessage.split("-");
      message.pop();

      setTimeout(() => {
        showToastDiageo("invalid-password", message.join(" "));
      }, 2000);
    }
  }, []);

  function handleInputCpfChange(text) {
    setInputCpf(text);
  }

  function handleCpfValidation(text) {
    setIsValidCpf(validateCpf(text));
  }

  function handleInputPasswordChange(text) {
    setInputPassword(text);
  }

  function handleChangeInputType(ev) {
    ev.preventDefault();

    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await api.get(`diageo-experience/api/participants/cpf/${inputCpf}`);
    } catch ({ response: error }) {
      setLoading(false);

      const msg = `<img src="/DiageoExperience/site/img/warning.png" alt="" />
        <h4>Dados Inválidos.</h4>
        <p>
            ${error.data.message}
        </p>`;

      showToastDiageo("invalid-password", msg);
      return;
    }

    try {
      const { data } = await api.post("vendavall/api/login", {
        login: inputCpf,
        password: inputPassword,
      });
      window.location = "/";
    } catch ({ response: error }) {
      const msg = `<img src="/DiageoExperience/site/img/warning.png" alt="" />
        <h4>Senha inválida.</h4>
        <p>
            Clique em <br> "Esqueci minha senha"
        </p>`;
      showToastDiageo("invalid-password", msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Logo
          src="/DiageoExperience/site/img/FullLogoDiageo.svg"
          alt="Diageo Logo"
        />
        <LoginBox onSubmit={handleLogin} autoComplete="false">
          <label htmlFor="cpf">
            CPF
            <InputMask
              mask="999.999.999-99"
              type="text"
              autoComplete="false"
              onBlur={e => handleCpfValidation(e.target.value)}
              onChange={e => handleInputCpfChange(e.target.value)}
              value={inputCpf}
            />
          </label>
          {!isValidCpf && (
            <ErrorMessage>
              Este número de CPF é inválido. Por favor, insira um número válido.
            </ErrorMessage>
          )}
          <label htmlFor="password">
            Senha
            <input
              type={inputType}
              name="password"
              autoComplete="false"
              onChange={e => handleInputPasswordChange(e.target.value)}
              value={inputPassword}
            />
            <TogglePasswordButton
              type="button"
              onClick={e => handleChangeInputType(e)}
              className={inputType === "text" ? "showing" : ""}
            >
              eye
            </TogglePasswordButton>
          </label>
          <label>
            <input
              type="submit"
              value="Login"
              disabled={loading ? "disabled" : null}
            />
          </label>
          <div>
            <input type="checkbox" value="" />
            Mantenha-me conectado
          </div>
        </LoginBox>
        <a
          href="#"
          data-toggle="modal"
          style={{ fontSize: "15px" }}
          data-target="#recoverPasswordModal"
        >
          Esqueci minha senha
        </a>
        <RegisterBox className="">
          <p>Primeira vez por aqui?</p>
          <a
            href="/pre-cadastro"
            className={loading ? "disabled register" : "register"}
          >
            Cadastrar
          </a>
        </RegisterBox>
        <div className="Contact">
          <Contact />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
const element = document.querySelector("#root-login-page");
ReactDOM.render(<LoginPage />, element);
*/
