import React from "react";
import MapPointIcon from "../../icons/MapPointIcon";
import CalendarDaysIcon from "../../icons/CalendarDaysIcon";
import BookIcon from "../../icons/BookIcon";
import ChartIcon from "../../icons/ChartIcon";
import AcademicCapIcon from "../../icons/AcademicCapIcon";
import RubicksCubeIcon from "../../icons/RubicksCubeIcon";
import "./Packets.scss";

const Packets = () => {
  return (
    <section className="packets-section" id="packets">
      <h2 className="section-header">Dodatkowe Pakiety dla stałych uczniów</h2>
      <div className="packets-wrapper">
        <div className="packet-box">
          <h3 className="packet-header">Pojedyńcze spotkanie</h3>
          <h4 className="packet-time-amount">( 1 lekcja )</h4>
          <h3 className="packet-discount">120 PLN</h3>
          <div className="packet-description-wrapper">
            <div className="packet-info">
              <CalendarDaysIcon />
              <span className="packet-description">
                Klient wybiera dzień, godzinę oraz czas trwania lekcji.
              </span>
            </div>
            <div className="packet-info">
              <BookIcon />
              <span className="packet-description">Specjalistyczne materiały edukacyjne</span>
            </div>
            <div className="packet-info">
              <ChartIcon />
              <span className="packet-description">Wsparcie w dążaniu do celu</span>
            </div>
            <div className="packet-info">
              <RubicksCubeIcon />
              <span className="packet-description">Indywidualny plan rozwoju i działania</span>
            </div>
            <span className="packet-description">-</span>
            <span className="packet-description">-</span>
          </div>
        </div>
        <div className="packet-box">
          <h3 className="packet-header">1 miesiąc</h3>
          <h4 className="packet-time-amount">( 1 raz w tygodniu )</h4>
          <h3 className="packet-discount">110 PLN</h3>
          <div className="packet-description-wrapper">
            <div className="packet-info">
              <CalendarDaysIcon />
              <span className="packet-description">
                Klient wybiera dzień, godzinę oraz czas trwania każdej z lekcji (możliwość
                konfiguracji).
              </span>
            </div>
            <div className="packet-info">
              <BookIcon />
              <span className="packet-description">Specjalistyczne materiały edukacyjne</span>
            </div>
            <div className="packet-info">
              <ChartIcon />
              <span className="packet-description">Wsparcie w dążaniu do celu</span>
            </div>
            <div className="packet-info">
              <RubicksCubeIcon />
              <span className="packet-description">Indywidualny plan rozwoju i działania</span>
            </div>
            <div className="packet-info">
              <AcademicCapIcon />
              <span className="packet-description">15% zniżki i systematyczne lekcje</span>
            </div>
            <div className="packet-info">
              <MapPointIcon />
              <span className="packet-description">Możliwy dojazd do klienta</span>
            </div>
          </div>
        </div>
        <div className="packet-box">
          <h3 className="packet-header">1 miesiąc</h3>
          <h4 className="packet-time-amount">( 2 razy w tygodniu )</h4>
          <h3 className="packet-discount">100 PLN</h3>
          <div className="packet-description-wrapper">
            <div className="packet-info">
              <CalendarDaysIcon />
              <span className="packet-description">
                Klient wybiera dzień, godzinę oraz czas trwania każdej z lekcji (możliwość
                konfiguracji).
              </span>
            </div>
            <div className="packet-info">
              <BookIcon />
              <span className="packet-description">Specjalistyczne materiały edukacyjne</span>
            </div>
            <div className="packet-info">
              <ChartIcon />
              <span className="packet-description">Wsparcie w dążaniu do celu</span>
            </div>
            <div className="packet-info">
              <RubicksCubeIcon />
              <span className="packet-description">Indywidualny plan rozwoju i działania</span>
            </div>
            <div className="packet-info">
              <AcademicCapIcon />
              <span className="packet-description">15% zniżki i systematyczne lekcje</span>
            </div>
            <div className="packet-info">
              <MapPointIcon />
              <span className="packet-description">Możliwy dojazd do klienta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packets;
