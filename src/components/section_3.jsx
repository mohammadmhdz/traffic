import "./section_3.style.css";
import light2 from "../img/light-2.png";
import light3 from "../img/light-3.png";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { GithubPicker } from "react-color";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { Link } from "react-router-dom";
export const Section_3 = () => {
  const input = useLocation();
  const [item, setItem] = useState([input.state.item]);
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
    width: 135,
    height: 50,
    padding: 10,
    "& .MuiSwitch-switchBase": {
      margin: 9,
      padding: 1,
      transform: "translateX(55px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(0px)",
        "& .MuiSwitch-thumb:before": {
          content: "'off'",
          paddingLeft: 20,
          paddingTop: 3,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          borderRadius: 20,
          backgroundColor:
            theme.palette.mode === "dark" ? "#4B4E57" : "#D9D9D9",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#4B4E57",
      width: 62,
      height: 30,
      borderRadius: 20,
      "&:before": {
        content: "'ON'",
        position: "absolute",
        paddingLeft: 20,
        paddingTop: 3,
        textAlign: "center",
        alignItems: "center",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      borderRadius: 20,
      backgroundColor: theme.palette.mode === "dark" ? "#4B4E57" : "#D9D9D9",
      // borderRadius: 20 / 2,
    },
  }));

  const handleChangeState = (x) => {
    const updateItems = item.map((items) => {
      if (item[0].ip === items.ip) {
        return { ...items, state: x };
      }
      return items;
    });
    setItem(updateItems);
  };

  const SpeedSlider = (id, e, val) => {
    const updateItems = item.map((items) => {
      if (id === items.ip) {
        return { ...items, speed: val };
      }
      return items;
    });

    setItem(updateItems);
  };

  const handleChangeColor = (event, color) => {
    // we have everything of our color
    console.log(event.rgb, "event");
    console.log(color, "color");
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  };

  // object that we use in our component
  // console.log(item);

  return (
    <div className="section-3-main-container">
      <div className="section-3-left-main-container">
        <h1>light {item[0].ip}</h1>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">state</div>
          <MaterialUISwitch
            value={item[0].state}
            checked={item[0].state}
            onClick={(e) => handleChangeState(e.target.checked)}
          ></MaterialUISwitch>
        </div>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">speed</div>
          <Slider
            className="slider-style"
            id={item[0].ip}
            value={+item[0].speed}
            onChange={(e, val) => SpeedSlider(item[0].ip, e, val)}
            disabled={!item[0].state}
            size="small"
            defaultValue={+item[0].speed}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <div style={{ color: "white" }}>{item[0].speed}%</div>
        </div>
        <div className="section-3-border-container ">
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
          <div style={{ color: "white" }}>{checked[0].speed}%</div>
        </div>
        <div className="section-3-border-container">
          <div className="section-3-border-container-name">color</div>
          <GithubPicker
            // colors={["#000000"]}
            onChange={(e, color) => handleChangeColor(e, color)}
          />
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
// export default Section_3;
