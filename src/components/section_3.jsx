import "./section_3.style.css";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { MdArrowBackIos } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { CirclePicker, HuePicker, SliderPicker } from "react-color";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
export const Section_3 = () => {
  const input = useLocation();
  const [item, setItem] = useState([input.state.item]);
  const [color, setColor] = useState([]);
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
    setColor({ background: event.hex });
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
      {/* <img className="section-3-light-2" src={light3} alt="light2" /> */}
      <div className="section-3-right-main-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="section-3-back-button">
            <MdArrowBackIos />
            تنظیمات کلیه چراغ ‌ها
          </button>
        </Link>
        {/*<img className="section-3-light-3" src={vector} alt="light2" /> */}
        {/* <div className="section-3-left-circle"></div> */}
        {/* <div className="section-2-right-circle"></div> */}
      </div>
      <div className="section-3-left-main-container">
        {/* <h1>light {item[0].ip}</h1> */}
        <div className="section-3-border-container">
          <MaterialUISwitch
            value={item[0].state}
            checked={item[0].state}
            onClick={(e) => handleChangeState(e.target.checked)}
          ></MaterialUISwitch>
          <div style={{ color: "white", fontSize: "28px" }}>وضعیت چراغ</div>
        </div>
        <div className="section-3-border-container section-3-speed-intensity ">
          <div className="section-3-speed-intensity-name-border">
            <div className="section-3-speed-intensity-percentage">
              {item[0].speed}%
            </div>
            <div className="section-3-border-container-name">
              : سرعت روشنایی
            </div>
          </div>
          <Slider
            className="slider-style"
            id={item[0].ip}
            value={+item[0].speed}
            onChange={(e, val) => SpeedSlider(item[0].ip, e, val)}
            disabled={!item[0].state}
            size="medium"
            defaultValue={+item[0].speed}
            aria-label="small"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="section-3-border-container   section-3-speed-intensity">
          <div className="section-3-speed-intensity-name-border">
            <div className="section-3-speed-intensity-percentage">
              {checked[0].speed}%
            </div>
            <div className="section-3-border-container-name">: شدت روشنایی</div>
          </div>
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
        <div className="section-3-border-container section-3-speed-intensity">
          <div className="section-3-speed-intensity-name-border">
            <button
              style={{
                width: 90,
                height: 41,
                border: "none",
                borderRadius: 25,
                backgroundColor: color.background,
              }}
            ></button>
            <div className="section-3-border-container-name">: رنگ</div>
          </div>
          {/* div.hue-horizontal for this part css */}
          <HuePicker
            width={"500px"}
            color={color.background}
            onChange={(e, color) => handleChangeColor(e, color)}
          />
        </div>
        <div className="section-3-border-container">
          <SliderPicker
            color={color.background}
            className="section-3-sliderPicker"
            onChange={(e, color) => handleChangeColor(e, color)}
          />
          <div className="section-3-border-container-name">: رنگ</div>
        </div>
        <button className="section-3-submit-button">ذخیره‌ی تغییرات</button>
      </div>
    </div>
  );
};
// export default Section_3;
