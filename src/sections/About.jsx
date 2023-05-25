import { Tilt } from "react-tilt";
import { Element } from "react-scroll";

import { BlockContainer, Card, CardsContainer } from "../styles/style";
import { cardsContent } from "../utils/cardsContent";

export const About = () => {
  return (
    <section>
      <Element className="section" name="about">
        <BlockContainer>
          <h3>Introducción</h3>
          <h2>Sobre mí:</h2>

          <p>
            Soy un desarrollador web que se especializa en el uso de JavaScript,
            TypeScript, React, Angular y .Net Core. Me considero un
            desarrollador apasionado que aprende con rapidez y que gusta de
            colaborar cercanamente con miembros del equipo y clientes, con la
            finalidad de crear soluciones eficientes, escalables y amigables,
            que se enfoquen en solucionar problemas del mundo real
          </p>
          <p>¡Trabajemos de la mano para traer tus ideas a la vida!</p>

          <CardsContainer>
            {cardsContent.map((card) => (
              <Tilt key={card.title} style={{ width: "100%" }}>
                <Card key={card.title}>
                  <h3>{card.title}</h3>
                  <img src={card.icon} alt="icon" />
                  <p>{card.content}</p>
                </Card>
              </Tilt>
            ))}
          </CardsContainer>
        </BlockContainer>
      </Element>
    </section>
  );
};
