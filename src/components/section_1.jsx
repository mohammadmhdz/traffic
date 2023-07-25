import React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./section_1.style.css";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Section_1 = () => {
  const [checked, setChecked] = useState([
    {
      ip: 1,
      color: "#f00",
      state: false,
      lightness: 20,
      alignment: "green",
    },
    {
      ip: 2,
      color: "#0f0",
      state: false,
      lightness: 30,
      alignment: "blue",
    },
    {
      ip: 3,
      color: "#00f",
      state: true,
      lightness: 20,
      alignment: "red",
    },
    {
      ip: 4,
      color: "#0ff",
      state: true,
      lightness: 10,
      alignment: "red",
    },
    // {
    //   ip: 5,
    //   state: 1,
    //   speed: 2,
    //   whiteColor: 10,
    //   yellowColor: 20,
    //   redColor: 30,
    //   greenColor: 40,
    //   blueColor: 50,
    //   effect: 5,
    // }
  ]);

  const transform_data = (trans) => {
    if (trans.state) {
      trans.state = 1;
    } else {
      trans.state = 0;
    }
    return trans;
  };
  const preProcess = () => {
    const string = "{IP00110001S0C3W10Y20R30G40B50E2L0}";
    // const stringP = "{IP00110001,S0,C3,W10,Y20,R30,G40,B50,E2,L0}";
    // change IP to 0 , 1 , 3 , 4
    const sampleGetData = [
      {
        ip: 0,
        state: string.slice(12, 13),
        speed: string.slice(14, 15),
        whiteColor: string.slice(16, 18),
        yellowColor: string.slice(19, 21),
        redColor: string.slice(22, 24),
        greenColor: string.slice(25, 27),
        blueColor: string.slice(28, 30),
        effect: string.slice(31, 32),
      },
    ];
    // console.log(sampleGetData);
  };
  const sendApi = (id) => {
    const post_parameter = transform_data(checked[id - 1]);
    preProcess();

    // const post_string = `{IP0011${post_parameter.ip},S${post_parameter.state}CXWXXYXXRXXGXX}`;
    // console.log(post_string);
  };
  const handleChange_color = (id, newAlignment) => {
    // console.log(id, newAlignment);
    const updateItems = checked.map((items) => {
      if (id === items.ip) {
        // console.log(items);
        return { ...items, alignment: newAlignment, color: newAlignment };
      }
      return items;
    });
    setChecked(updateItems);
  };

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
  const handleChange_slider = (e, val) => {
    return; // setValue(val);
  };

  // console.log(checked);
  return (
    <div className="main-container">
      {checked.map((items, index) => {
        // console.log(items.state);
        return (
          <div className="main-container-details">
            {items.state ? (
              <BsLightbulbFill size={25} color={items.color} />
            ) : (
              <BsLightbulb size={25} color="gray" />
            )}
            <p1>
              لامپ شماره <span>{items.ip}</span>
            </p1>
            <Switch
              value={items.state}
              onClick={() => handleChange(items.ip, items.state)}
              checked={items.state}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box width={300}>
              <Slider
                // color="secondary"
                value={items.lightness}
                // onChange={handleChange_slider}
                onChangeCommitted={handleChange_slider}
                // onDragStop={handleChange_slider}
                disabled={!items.state}
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Box>
            <ToggleButtonGroup
              disabled={!items.state}
              color="primary"
              value={items.color}
              exclusive
              aria-label="Platform"
            >
              <ToggleButton
                onClick={() => handleChange_color(items.ip, "red")}
                value="red"
              >
                red
              </ToggleButton>
              <ToggleButton
                onClick={() => handleChange_color(items.ip, "green")}
                value="green"
              >
                green
              </ToggleButton>
              <ToggleButton
                onClick={() => handleChange_color(items.ip, "blue")}
                value="blue"
              >
                blue
              </ToggleButton>
            </ToggleButtonGroup>
            <button onClick={() => sendApi(items.ip)}>submit</button>
          </div>
        );
      })}
      {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
    </div>
  );
};
