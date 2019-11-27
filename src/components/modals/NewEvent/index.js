import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Form as FinalForm } from "react-final-form";
import api from "../../../services/api";

import Modal from "../DefaultModal";
import { LinksBox } from "../DefaultModal/style";
import { Button } from "../../defaultComponents/Button";
import { InputText } from "../../defaultComponents/InputText";
import { TextArea } from "../../defaultComponents/TextArea";
import { Form } from "./style";
import Input from "../../FinalFormInput";
import { errorMessage, successMessage } from "../../../utils/toastNotification";

export default function NewEvent({ opened, onClose, closeOnDocumentClick }) {
  const [loading, setLoading] = useState(false);
  const [textArea, setTextArea] = useState("");
  const user = useSelector(state => state.auth.user);

  async function handleNewEvent(form) {
    setLoading(true);
    try {
      const request = {
        ...form,
        description: textArea,
        email: user.email,
      };

      const { data } = await api.post("events", request);
      // const { message } = response;
      const message = {
        message: "Evento cadastrado com sucesso",
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
      title="Novo Evento"
      className="buttons"
    >
      <FinalForm
        /* initialValues={{ name }}
        decorators={[focusOnErrors]} */
        onSubmit={handleNewEvent}
        /* validate={values => validate(values, schema)} */
        render={({ handleSubmit, form }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Input
              name="name"
              type="text"
              placeholder="Digite aqui o nome do Evento"
            />
            <TextArea
              name="description"
              type="text"
              placeholder="Digite aqui uma breve descrição sobre o Evento"
              onChange={e => setTextArea(e.target.value)}
            />
            <Input
              name="date"
              type="text"
              placeholder="Data e hora do evento"
            />
            <Input name="vacancy" type="text" placeholder="Número de vagas" />
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
                value={loading ? "Enviando" : "Criar evento"}
              />
            </LinksBox>
          </Form>
        )}
      />
    </Modal>
  );
}

NewEvent.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnDocumentClick: PropTypes.bool,
};

NewEvent.defaultProps = {
  closeOnDocumentClick: true,
};
