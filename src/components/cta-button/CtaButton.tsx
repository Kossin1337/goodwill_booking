import "./CtaButton.scss";
import CalendarIcon from "../.././icons/CalendarIcon";
import CalendarDaysIcon from "../../icons/CalendarDaysIcon";

const CtaButton = () => {
  return (
      <a className="cta-button-link" target="_blank" href="https://calendar.app.google/ebnv7JrTjYXj8KHMA">
      <button className="button">
        <CalendarDaysIcon />
        <span className="text">Zaplanuj Lekcje</span>
        <div className="icon">
          <CalendarIcon />
        </div>
      </button>
    </a>
  );
};

export default CtaButton;
