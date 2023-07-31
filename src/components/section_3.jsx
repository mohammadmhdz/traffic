import "./section_3.style.css";
import light2 from "../img/light-2.png";
import light3 from "../img/light-3.png";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Github, GithubPicker } from "react-color";

import { useState } from "react";
export const Section_3 = () => {
  const [checked, setChecked] = useState([
    {
      ip: 0,
      state: true,
      speed: 2,
      whiteColor: 10,
      yellowColor: 20,
      redColor: 30,
      greenColor: 40,
      blueColor: 50,
      colorsLightnes: 60,
      effect: 8,
    },
    {
      ip: 1,
      state: false,
      speed: 2,
      whiteColor: 10,
      yellowColor: 20,
      redColor: 30,
      greenColor: 40,
      blueColor: 50,
      colorsLightnes: 60,
      effect: 8,
    },
    {
      ip: 2,
      state: false,
      speed: 2,
      whiteColor: 10,
      yellowColor: 20,
      redColor: 30,
      greenColor: 40,
      blueColor: 50,
      colorsLightnes: 60,
      effect: 8,
    },
    {
      ip: 3,
      state: false,
      speed: 2,
      whiteColor: 10,
      yellowColor: 20,
      redColor: 30,
      greenColor: 40,
      blueColor: 50,
      colorsLightnes: 60,
      effect: 8,
    },
  ]);

  // switch button style
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const handleChange = (id, newState) => {
    // console.log(newState);
    const updateItems = checked.map((items) => {
      if (id === items.ip) {
        // console.log(items);
        return { ...items, state: !newState };
      }
      return items;
    });
    setChecked(updateItems);
  };

  const SpeedSlider = (id, e, val) => {
    // console.log(id, val);
    const updateItems = checked.map((items) => {
      if (id === items.ip) {
        // console.log(items);
        return { ...items, speed: val };
      }
      return items;
    });

    setChecked(updateItems);
  };
  return (
    <div className="section-3-main-container">
      <div className="section-3-left-main-container">
        <h1>light 01</h1>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">state</div>
          <MaterialUISwitch></MaterialUISwitch>
          {/* <Switch
            sx={switchStyle}
            value={checked[0].state}
            onClick={() => handleChange(checked[0].ip, checked[0].state)}
            checked={checked[0].state}
            inputProps={{ "aria-label": "controlled" }}
          /> */}
        </div>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">speed</div>

          <Slider
            className="slider-style"
            id={checked[0].ip}
            value={+checked[0].speed}
            onChange={(e, val) => SpeedSlider(checked[0].ip, e, val)}
            disabled={!checked[0].state}
            size="small"
            defaultValue={+checked.greenColor}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">hardness</div>
          <Slider
            className="slider-style"
            id={checked[0].ip}
            value={+checked[0].speed}
            onChange={(e, val) => SpeedSlider(checked[0].ip, e, val)}
            disabled={!checked[0].state}
            size="small"
            defaultValue={+checked.greenColor}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">color</div>
          <GithubPicker />
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
