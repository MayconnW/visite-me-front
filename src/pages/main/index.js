import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import { signOut } from "../../store/modules/auth/actions";
import api from "../../services/api";

import logo from "../../assets/images/logo-da-hora.png";

import EventCard from "../../components/Card";

import { Container, Header, Body, BannersBox, Actions, NewFab } from "./style";
import image from "../../assets/images/card-event.jpg";
import NewEventModal from "../../components/modals/NewEvent";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Main() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const user = useSelector(state => state.auth.user);
  const [newEventModalOpened, setNewEventModalOpened] = useState(false);

  function openNewEventModal() {
    setNewEventModalOpened(true);
  }

  async function closeNewEventModal() {
    const { data } = await api.get(`events/${user.email}`);
    const result = data.map(e => {
      e.hour = moment().format("hh:mm");
      e.date = moment().format("DD/MM/YYYY");
      e.image = image;
      return e;
    });
    setEvents(result);
    setNewEventModalOpened(false);
  }

  useEffect(() => {
    async function loadEvents() {
      const { data } = await api.get(`events/${user.email}`);
      /* const data = [
        {
          name: "Conhecendo o Google",
          description:
            "Google promovendo para você aluno, uma visita incrível.",
          date: "12/12/2019",
          hour: "10:00",
          image,
        },
        {
          name: "Cultura Google",
          description: "Venha conhecer o Google Brasil",
          date: "15/12/2019",
          hour: "10:00",
          image,
        },
      ]; */
      const result = data.map(e => {
        e.hour = moment(e.date).format("hh:mm");
        e.date = moment(e.date).format("DD/MM/YYYY");
        e.image = image;
        return e;
      });
      setEvents(result);
    }
    loadEvents();
  }, [user.email]);

  function hadleLogout() {
    dispatch(signOut());
  }

  const classes = useStyles();

  return (
    <Container>
      <Header>
        <div className="content">
          <div className="avatarBox" />
          <img src={logo} alt="Logo" />
          <div className="rightSide">
            <button type="button" onClick={hadleLogout}>
              Sair
            </button>
            <div className="avatarBox">
              <img
                src="https://storage.vendavall.com.br/avatars/1547203572.5c3873f43bd3f8.36149532.png?w=400&h=400&fit=cover"
                alt="Avatar"
              />
              <span>
                Bem vindo,
                <i>
                  <b>{user.name.substr(0, 1)}</b>
                </i>
                <i>{user.name.substr(1)}</i>
              </span>
            </div>
          </div>
        </div>
      </Header>
      <Body>
        <BannersBox>
          {events.map(event => (
            <EventCard
              key={event.id}
              image={event.image}
              eventName={event.name}
              description={event.description}
              date={event.date}
              hour={event.hour}
            />
          ))}
        </BannersBox>
        <Actions
          className={classes.root}
          onClick={() => {
            setNewEventModalOpened(true);
          }}
        >
          <NewFab color="secondary" aria-label="add" variant="extended">
            <AddIcon /> <span>Adicionar Novo Evento</span>
          </NewFab>
        </Actions>
      </Body>
      <NewEventModal
        opened={newEventModalOpened}
        onClose={closeNewEventModal}
        closeOnDocumentClick
      />
    </Container>
  );
}
