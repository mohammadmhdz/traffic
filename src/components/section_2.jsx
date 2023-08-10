import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import light from "../img/light-2-2.png";
import light3 from "../img/light-3.png";
import "./section_2.style.css";
import "./section_2.style.responsive.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Section_2 = (lights = {}) => {
  const matches = useMediaQuery("(min-width:1500px)");

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
          <h1 className="left-side-main-header-1">لیست چراغ ها</h1>
          {/* <hr /> */}
          {lights.lights.map((items) => {
            return (
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr className="hr-line-lights-style" />
                </div>
                <div className="title-state-flex-container">
                  {items.ip}
                  <h1>چراغ شماره</h1>
                </div>
                <div className="left-side-main-container-border">
                  <div className="details-flex-container">
                    <button className="buttons-style-details">
                      <Link
                        to="/post"
                        state={{ item: items, data: lights }}
                        className="section-2-link-style"
                      >
                        <FiSettings
                          className="fiSetting-button"
                          size={matches ? 37 : 48}
                        />
                      </Link>
                    </button>
                    <div className="details-grid-container-state">
                      وضعیت : {items.state ? "روشن" : "خاموش"}
                    </div>
                    {/* <div className="details-grid-container-light">
                      چراغ : {items.ip}
                    </div> */}
                    <div className="details-grid-container-speed">
                      سرعت روشنایی : {items.speed}
                    </div>
                    <div className="details-grid-container-colorsLight">
                      شدت روشنایی : {items.colorsLightnes}
                    </div>
                    <div className="details-flex-color-container">
                      <button
                        style={{
                          width: 30,
                          height: 20,
                          borderRadius: 8,
                          backgroundColor: "red",
                        }}
                      ></button>

                      <div>: رنگ </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-side-main-container">
        {/* <div className="big-background-circle"></div> */}
        {/* <div className="little-background-circle"></div> */}
        {/* <img className="little-background-light-3" src={light3} alt="Logo" /> */}
        <img className="background-light" src={light} alt="Logo" />
      </div>
    </div>
  );
};
// export default Section_2;
