import "./section_2.style.css";
import light from "../img/light.png";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
export const Section_2 = (lights = {}) => {
  const {
    ip = "test1",
    state = true,
    speed = 2,
    whiteColor = "test",
    yellowColor = "test",
    redColor = "test",
    greenColor = "test",
    blueColor = "test",
    colorsLightnes = 20,
    effect = 4,
  } = lights.lights;
  // console.log(lights.lights, "kkkk");

  return (
    <div className="main-container-section-2">
      <div>
        <div className="left-side-main-container">
          {lights.lights.map((items) => {
            return (
              <div>
                <div className="left-side-main-container-border">
                  <div className="details-grid-container">
                    <div className="details-grid-container-light">
                      Light : {items.ip}
                    </div>
                    <div className="details-grid-container-color">
                      color : {items.whiteColor}
                    </div>
                    <div className="details-grid-container-speed">
                      speed : {items.speed}
                    </div>
                    <div className="details-grid-container-state">
                      status : {items.state}
                    </div>
                    <div className="details-grid-container-colorsLight">
                      hardness :{items.colorsLightnes}
                    </div>
                  </div>
                  <button className="buttons-style-details">
                    <Link
                      to="/post"
                      state={{ item: items, data: lights }}
                      className="section-2-link-style"
                    >
                      <FiSettings size={45} />
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-side-main-container">
        <div className="big-background-circle"></div>
        <div className="little-background-circle">
          <img className="background-light" src={light} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
// export default Section_2;
