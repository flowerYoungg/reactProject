import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Liv",
      company: "SIOS",
      theme: "light",
      title: "Software Engineer",
      email: "flower@gmail.com",
      message: "I dont want to study",
      fileName: "liv",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Dave",
      company: "Yahoo",
      theme: "dark",
      title: "Software Engineer",
      email: "noflower@gmail.com",
      message: "I want to study",
      fileName: "Dave",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Anonymous",
      company: "LINE",
      theme: "colorful",
      title: "Software Engineer",
      email: "anonymous@gmail.com",
      message: "I dont want to study",
      fileName: "Anonymous",
      fileURL: null,
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
