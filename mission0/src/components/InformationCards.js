import React, { useState, useEffect } from "react";
import styles from "./InformationCards.module.css";
import infoData from "../assets/logos/cards_information/info.json"; // import the json file

export default function InformationCards() {
  const [infoCards, setInfoCards] = useState([]);

  useEffect(() => {
    setInfoCards(infoData.infoCards);
  }, []);

  return (
    <div id={styles.informationCards}>
      {infoCards.map(
        (
          card,
          index // map through the data and generate the cards
        ) => (
          <div key={index} className={styles.informationCard}>
            <img
              className={styles.informationCardImage}
              src={require(`../assets/logos/${card.photo}`)}
              alt={card.Name}
            ></img>
            <h3>{card.Name}</h3>
            <h4>{card.Description}</h4>
          </div>
        )
      )}
    </div>
  );
}
