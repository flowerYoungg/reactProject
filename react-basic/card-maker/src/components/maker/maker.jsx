import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
      id: "2",
      name: "Dave",
      company: "Yahoo",
      theme: "dark",
      title: "Software Engineer",
      email: "noflower@gmail.com",
      message: "I want to study",
      fileName: "GaeDDongMungChung",
      fileURL: null,
    },
    {
      id: "3",
      name: "Anonymous",
      company: "LINE",
      theme: "colorful",
      title: "Software Engineer",
      email: "anonymous@gmail.com",
      message: "I dont want to study",
      fileName: "liv",
      fileURL: null,
    },
  ]);

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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
