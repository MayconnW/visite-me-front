import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "../../../services/history";
import api from "../../../services/api";
import { signInSuccess, signFailure } from "./actions";
import { successMessage, errorMessage } from "../../../utils/toastNotification";

export function* signIn({ payload }) {
  const { login, password } = payload;

  try {
    /* const { data } = yield call(pluginApi.post, "login", {
      login,
      password
    }); */
    const { token, user } = {
      token: "s123",
      user: { name: login.substr(0, login.indexOf("@")), email: login },
    };

    if (!token) {
      errorMessage({ message: "Falha ao fazer o login" });
      return;
    }

    api.defaults.headers.Authorization = token;
    yield put(signInSuccess(token, user));
    successMessage({ message: "Login realizado com sucesso" });
    setTimeout(() => {
      history.push("/");
    }, 1000);
  } catch ({ response: error }) {
    yield put(signFailure());
    errorMessage({ message: "Falha ao fazer o login 2" });
  }
}

export function setToken({ payload }) {
  const token = payload && payload.session ? payload.session.token : false;
  if (token) {
    api.defaults.headers.Authorization = token;
  }
}

export function signOut() {
  api.defaults.headers.Authorization = null;
  setTimeout(() => {
    history.push("/");
  }, 500);
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
