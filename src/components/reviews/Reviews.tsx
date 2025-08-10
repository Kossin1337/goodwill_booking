import React from "react";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <section className="full-section reviews-section" id="reviews">
      <h2 className="section-header">Opinie Uczniów</h2>
      <div className="reviews-wrapper">
        <div className="opinion-box">
          <h2 className="opinion-title">Pomoc do Matury</h2>
          <span className="opinion-description">
            Dzięki wieloletniej współpracy z tym nauczycielem, udało mi się solidnie przygotować do
            matury z matematyki. Jego cierpliwość i indywidualne podejście sprawiły, że nauka stała
            się przyjemnością, a wyniki znacznie się poprawiły.
          </span>
          <span className="opinion-level">Liceum | ROZ</span>
          <div className="opinion-footer">
            <strong>Jagoda S.</strong>, współpraca wieloletnia
          </div>
        </div>
        <div className="opinion-box">
          <h2 className="opinion-title">Super Tłumaczenia</h2>
          <span className="opinion-description">
            Po kilku miesiącach regularnej nauki z tym nauczycielem, moje umiejętności językowe
            znacznie się poprawiły. Tłumaczenia stały się prostsze, a pewność siebie na egzaminach
            rośnie z każdym spotkaniem.
          </span>
          <span className="opinion-level">Technikum | PODST+ROZ</span>
          <div className="opinion-footer">
            <strong>Mateusz K.</strong>, egzamin maturalny
          </div>
        </div>
        <div className="opinion-box">
          <h2 className="opinion-title">Matematyka przestała być straszna</h2>
          <span className="opinion-description">
            Po kilku miesiącach intensywnej nauki z tym nauczycielem, zyskałem pewność siebie i
            poprawiłem swoje wyniki na studiach magisterskich. Jego cierpliwość i jasne wyjaśnienia
            sprawiły, że matematyka stała się dla mnie przyjemnością.
          </span>
          <span className="opinion-level">Studia Magisterskie</span>
          <div className="opinion-footer">
            <strong>Anna P.</strong>, sesja z matematyki
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
