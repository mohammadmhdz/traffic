import "./section_3.style.css";
import light2 from "../img/light-2.png";
import light3 from "../img/light-3.png";
export const Section_3 = () => {
  return (
    <div className="section-3-main-container">
      <div className="section-3-left-main-container">
        <h1>light 01</h1>

        <div>
          <div>state</div>
        </div>
      </div>

      <div className="section-3-right-main-container">
        <img className="section-3-light-2" src={light2} alt="light2" />
        <img className="section-3-light-3" src={light3} alt="light2" />
        <div className="section-3-inner-circle"></div>
      </div>
    </div>
  );
};
