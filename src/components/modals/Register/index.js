import React, { useState } from "react";
import PropTypes from "prop-types";

import { Form as FinalForm } from "react-final-form";
import api from "../../../services/api";

import Modal from "../DefaultModal";
import { LinksBox } from "../DefaultModal/style";
import { Button } from "../../defaultComponents/Button";
import { Form } from "./style";
import Input from "../../FinalFormInput";
import { errorMessage, successMessage } from "../../../utils/toastNotification";

export default function Register({
  opened,
  onClose,
  closeOnDocumentClick,
  name,
}) {
  const [loading, setLoading] = useState(false);

  async function handleRegister(form) {
    setLoading(true);

    const request = {
      ...form,
      name,
      location: `${form.address}, ${form.city}`,
    };

    try {
      const { data: response } = await api.post("companies", request);
      // const { message } = response;
      const message = {
        message: "Seu cadastro foi efetuado com sucesso. Faça seu login.",
      };

      successMessage(message);
      onClose();
    } catch ({ response }) {
      // const { message } = response.data;
      const message = { message: "Falha ao efetuar cadastro" };
      errorMessage(message);
    }
    setLoading(false);
  }
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      closeOnDocumentClick={loading ? null : closeOnDocumentClick}
      title="Primeiro Acesso"
      className="buttons"
    >
      <FinalForm
        /* initialValues={{ name }}
        decorators={[focusOnErrors]} */
        onSubmit={handleRegister}
        /* validate={values => validate(values, schema)} */
        render={({ handleSubmit, form }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Input
              name="name"
              type="text"
              placeholder="Digite aqui seu Nome de usuário"
              value={name}
            />
            <Input
              name="email"
              type="text"
              placeholder="Digite aqui seu Email"
            />
            <Input
              name="description"
              type="text"
              placeholder="Breve descrição sobre a empresa"
            />
            <Input
              name="password"
              type="password"
              placeholder="Digite aqui sua senha"
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
            />
            <Input name="city" type="text" placeholder="Cidade" />
            <Input name="address" type="text" placeholder="Endereço" />
            <LinksBox>
              <Button
                type="button"
                className="second"
                value="Fechar"
                onClick={onClose}
                disabled={loading ? true : null}
              />
              <Button
                type="submit"
                className="primary"
                disabled={loading ? true : null}
                value={loading ? "Enviando" : "Criar conta"}
              />
            </LinksBox>
          </Form>
        )}
      />
    </Modal>
  );
}

Register.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnDocumentClick: PropTypes.bool,
};

Register.defaultProps = {
  closeOnDocumentClick: true,
};
