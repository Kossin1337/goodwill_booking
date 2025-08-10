import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-header">O mnie</h2>
      <div className="about-info-box">
        <h3 className="sub-heading">Moje kwalifikacje & Pasja</h3>
        <h3>Posiadam ponad 10 letnie doświadczenie w udzielaniu korepetycji</h3>
        <span>Od zawsze kochałem matematykę i liczby</span>
        <span>
          Posiadam rozległe zbiory wyselekcjonowanych materiałów, które pozwolą Ci zrozumieć
          matematykę.
        </span>
      </div>

      <div className="goals-box">
        <h3 className="sub-heading">Cele naszej współpracy</h3>
        <span>Pomogę Ci poznać i zrozumieć matematykę od podstaw</span>
        <span>Matematyka jest królową nauk</span>
        <span>System dziesiątkowy buduje nasz świat, ale warto też poznać inne systemy</span>
        <span>System dziesiątkowy buduje nasz świat, ale warto też poznać inne systemy</span>
      </div>

      <div className="material-range-box">
        <h3 className="sub-heading">Zakres</h3>
        <span>Szkoła podstawowa | klasy 1-8</span>
        <span>Liceum / Technikum | podst+roz </span>
        <span>Studia I i II stopnia</span>
      </div>
    </section>
  );
};

export default About;
