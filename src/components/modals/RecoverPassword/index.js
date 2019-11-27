import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Modal } from "./style";
import { Button } from "../../defaultComponents/Button";
import { InputText } from "../../defaultComponents/InputText";

import vendavallApi from "../../../services/api";
import { successMessage, errorMessage } from "../../../utils/toastNotification";

export default function RecoverPassword({
  opened,
  onClose,
  closeOnDocumentClick,
}) {
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendMail() {
    setLoading(true);
    try {
      const { data } = await vendavallApi.post(
        "participants/recover-password/send-email",
        { cpf }
      );
      successMessage({ message: data.message });
    } catch ({ response }) {
      errorMessage({ message: response.data.message });
    }
    onClose();
  }

  useEffect(() => {
    if (opened) {
      setLoading(false);
      setCpf("");
    }
  }, [opened]);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      closeOnDocumentClick={closeOnDocumentClick}
      title="Recuperação de Senha"
      className="buttons"
    >
      <p>
        Informe seu CPF no campo abaixo. Em breve, você receberá no seu e-mail
        de cadastro, um link no qual poderá fazer a troca de sua senha.
      </p>
      <InputText
        type="text"
        placeholder="Digite aqui seu CPF"
        value={cpf}
        onChange={e => setCpf(e.target.value)}
      />
      <Button
        className="dark"
        value={loading ? "Enviando..." : "Enviar e-mail"}
        type="button"
        onClick={handleSendMail}
      />
    </Modal>
  );
}

RecoverPassword.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnDocumentClick: PropTypes.bool,
};

RecoverPassword.defaultProps = {
  closeOnDocumentClick: true,
};
