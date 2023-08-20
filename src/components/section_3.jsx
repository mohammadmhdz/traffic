import "./section_3.style.css";
import "./section_3.style.responsive.css";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { MdArrowBackIos } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { HuePicker, GithubPicker } from "react-color";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import { Link } from "react-router-dom";
export const Section_3 = () => {
  const matches = useMediaQuery("(min-width:1300px)");
  const input = useLocation();
  const [item, setItem] = useState([input.state.item]);
  const [color, setColor] = useState([]);

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
          content: "'ON'",
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
        content: "'OFF'",
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
  const prePost = (ip) => {
    switch (ip) {
      case 0:
        return "0001";
      // ...items,
      // ip: "0001",
      case 1:
        return "0010";
      case 2:
        return "0100";
      case 3:
        return "1000";

      default:
        return "foo";
    }
  };
  const handlePost = () => {
    // prePost(item[0].ip);
    console.log(item, "prePost");
    console.log(item[0].ip);
    axios
      .post("http://193.36.84.113:8080/system/ctrl", {
        client: `{IP0011${prePost(item[0].ip)},S${item[0].state},C${
          item[0].speed
        },W${item[0].whiteColor},Y${item[0].yellowColor},R${
          item[0].redColor
        },G${item[0].greenColor},B${item[0].blueColor},E0,L${
          item[0].colorsLightnes
        }}`,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleChangeState = (x) => {
    const updateItems = item.map((items) => {
      if (item[0].ip === items.ip) {
        return { ...items, state: x ? 1 : 0 };
      }
      return items;
    });
    setItem(updateItems);
  };

  const handleSpeedSlider = (id, e, val) => {
    const updateItems = item.map((items) => {
      if (id === items.ip) {
        return { ...items, speed: val };
      }
      return items;
    });

    setItem(updateItems);
  };
  const handleIntensitySlider = (id, e, val) => {
    const updateItems = item.map((items) => {
      if (id === items.ip) {
        return { ...items, colorsLightnes: val };
      }
      return items;
    });

    setItem(updateItems);
  };

  const handleChangeColor = (event) => {
    // we have everything of our color

    setColor({ background: event.hex });
    console.log(event.rgb, "event");
    console.log(color, "color");
    const updateItems = item.map((items) => {
      if (item[0].ip === items.ip) {
        return {
          ...items,
          blueColor: Math.ceil((100 * event.rgb.b) / 255),
          redColor: Math.ceil((100 * event.rgb.r) / 255),
          greenColor: Math.ceil((100 * event.rgb.g) / 255),
          whiteColor: 0,
          yellowColor: 0,
        };
      }
      return items;
    });

    setItem(updateItems);
  };

  const handleColorSecond = (e) => {
    setColor({ background: e.target.style.background });
    const updateItems = item.map((items) => {
      switch (e.target.style.background) {
        case "rgb(255, 255, 255)":
          return {
            ...items,
            blueColor: 0,
            redColor: 0,
            greenColor: 0,
            whiteColor: 100,
            yellowColor: 0,
          };
        case "rgb(255, 252, 221)":
          return {
            ...items,
            blueColor: 0,
            redColor: 0,
            greenColor: 0,
            whiteColor: 70,
            yellowColor: 30,
          };
        case "rgb(254, 246, 174)":
          return {
            ...items,
            blueColor: 0,
            redColor: 0,
            greenColor: 0,
            whiteColor: 50,
            yellowColor: 50,
          };
        case "rgb(255, 242, 121)":
          return {
            ...items,
            blueColor: 0,
            redColor: 0,
            greenColor: 0,
            whiteColor: 30,
            yellowColor: 70,
          };
        case "rgb(255, 255, 0)":
          return {
            ...items,
            blueColor: 0,
            redColor: 0,
            greenColor: 0,
            whiteColor: 0,
            yellowColor: 100,
          };
        default:
          return "foo";
      }
    });
    setItem(updateItems);
  };

  // object that we use in our component
  console.log(item);

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
      </div>
      <div className="section-3-left-main-container">
        {/* <h1>light {item[0].ip}</h1> */}
        <div className="section-3-border-container">
          <MaterialUISwitch
            value={item[0].state}
            checked={item[0].state}
            onClick={(e) => handleChangeState(e.target.checked)}
          ></MaterialUISwitch>
          <div className="section-3-state-name-style">وضعیت چراغ</div>
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
            onChange={(e, val) => handleSpeedSlider(item[0].ip, e, val)}
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
              {item[0].colorsLightnes}%
            </div>
            <div className="section-3-border-container-name">: شدت روشنایی</div>
          </div>
          <Slider
            className="slider-style"
            id={item[0].ip}
            value={+item[0].colorsLightnes}
            onChange={(e, val) => handleIntensitySlider(item[0].ip, e, val)}
            disabled={!item[0].state}
            size="small"
            defaultValue={+item[0].colorsLightnes}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </div>
        {item[0].state ? (
          <div className="section-3-border-container section-3-speed-intensity">
            <div className="section-3-speed-intensity-name-border">
              <button
                className="section-3-color-shown-button"
                style={{
                  // {matches ? {"width: 90" ,"height: 41"} }

                  backgroundColor: color.background,
                }}
              ></button>

              <div className="section-3-border-container-name">: رنگ</div>
            </div>
            {/* div.hue-horizontal for this part css */}
            <HuePicker
              width={matches ? "100%" : "100%"}
              color={color.background}
              onChange={(e) => handleChangeColor(e)}
            />
          </div>
        ) : null}
        <div className="section-3-border-container">
          {/* <GithubPicker
            width="300px"
            colors={["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76"]}
            color={color.background}
            className="section-3-sliderPicker"
            // onChange={(e, color) => handleChangeColor(e, color)}
          /> */}
          {item[0].state ? (
            <div className="container-yellow-white-color-picker">
              <span className="span-yellow-white-color-picker">
                <div
                  key={1}
                  onClick={(e) => handleColorSecond(e)}
                  // ref={(ref) => (inputRef.current[1] = ref)}
                  className="div-yellow-white-color-picker"
                  style={{ background: "#FFF" }}
                ></div>
              </span>
              <span className="span-yellow-white-color-picker">
                <div
                  key={2}
                  onClick={(e) => handleColorSecond(e)}
                  // ref={(ref) => (inputRef.current[2] = ref)}
                  className="div-yellow-white-color-picker"
                  style={{ background: "#FFFCDD" }}
                ></div>
              </span>
              <span className="span-yellow-white-color-picker">
                <div
                  key={3}
                  onClick={(e) => handleColorSecond(e)}
                  // ref={(ref) => (inputRef.current[3] = ref)}
                  className="div-yellow-white-color-picker"
                  style={{ background: "#FEF6AE" }}
                ></div>
              </span>
              <span className="span-yellow-white-color-picker">
                <div
                  key={4}
                  onClick={(e) => handleColorSecond(e)}
                  // ref={(ref) => (inputRef.current[4] = ref)}
                  className="div-yellow-white-color-picker"
                  style={{ background: "#FFF279" }}
                ></div>
              </span>
              <span className="span-yellow-white-color-picker">
                <div
                  key={5}
                  onClick={(e) => handleColorSecond(e)}
                  // ref={(ref) => (inputRef.current[5] = ref)}
                  className="div-yellow-white-color-picker"
                  style={{ background: "#FFFF00" }}
                ></div>
              </span>
            </div>
          ) : (
            <p1 className="color-disabled-error-message">
              !چراغ شما غیرفعال است
            </p1>
          )}
          <div className="section-3-border-container-name">: رنگ</div>
        </div>
        <button onClick={handlePost} className="section-3-submit-button">
          ذخیره‌ی تغییرات
        </button>
      </div>
    </div>
  );
};
// export default Section_3;
