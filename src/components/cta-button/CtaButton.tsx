import "./CtaButton.scss";
import CalendarIcon from "../.././icons/CalendarIcon";
import CalendarDaysIcon from "../../icons/CalendarDaysIcon";

const CtaButton = () => {
  return (
    <button className="button">
      <CalendarDaysIcon />
      <span className="text">Zaplanuj Lekcje</span>
      <div className="icon">
        <CalendarIcon />
      </div>
    </button>
  );
};

export default CtaButton;
