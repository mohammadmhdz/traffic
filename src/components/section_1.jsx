import React from "react";
import Switch from "@mui/material/Switch";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./section_1.style.css";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Section_1 = () => {
  const [checked, setChecked] = useState([]);

  // this is for fetch and preProcessing the data
  useEffect(() => {
    const preProcess = () => {
      const string = "{IP00110001,S0,C3,W05,Y00,R00,G40,B00,E2,L0}";

      const sampleGetData = [
        {
          ip: string.slice(7, 11),
          state: +string.slice(13, 14),
          speed: string.slice(16, 17),
          whiteColor: +string.slice(19, 21),
          yellowColor: +string.slice(23, 25),
          redColor: +string.slice(27, 29),
          greenColor: +string.slice(31, 33),
          blueColor: +string.slice(35, 37),
          colorsLightnes: string.slice(18, 37),
          effect: string.slice(39, 40),
        },
      ];

      // setChecked(sampleGetData);

      // CHANGE THIS PART IF YOU HAVE TIME
      //
      switch (string.slice(7, 11)) {
        case "0001":
          console.log("0001");
          sampleGetData[0].ip = 0;
          break;

        case "0010":
          console.log("0010");
          sampleGetData[0].ip = 1;
          break;

        case "0100":
          console.log("0100");
          sampleGetData[0].ip = 2;
          break;

        case "1000":
          console.log("1000");
          sampleGetData[0].ip = 3;
          break;

        default:
          console.log("ERROR");
          break;
      }
      // console.log(sampleGetData);
      return sampleGetData;
    };
    setChecked(preProcess());
    // const fetchRequest = async () => {
    //   const res = await fetch("http://127.0.0.1:8000/transaction/Nfts/12/");
    //   // "http://127.0.0.1:8000/account/artists/6/get_nfts/"
    //   const requests = await res.json();
    //   setRequests(requests);
    // };

    // fetchRequest();
  }, []);

  // preparing the data and sen it
  const transform_data = (trans) => {
    if (trans.state) {
      trans.state = 1;
    } else {
      trans.state = 0;
    }
    return trans;
  };

  const sendApi = (id) => {
    const post_parameter = transform_data(checked[id - 1]);
    // const post_string = `{IP0011${post_parameter.ip},S${post_parameter.state}CXWXXYXXRXXGXX}`;
    // console.log(post_string);
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
  const handleChange_slider = (id, e, val) => {
    console.log(id, val);
    const updateItems = checked.map((items) => {
      if (id === items.ip) {
        console.log(items);
        return { ...items, greenColor: val };
      }
      return items;
    });

    setChecked(updateItems);
  };
  const handleChange_color = (id, newColor) => {
    // console.log(newColor + "Color");
    const sentColor = `${newColor}Color`;
    console.log(sentColor);
    return sentColor;
    // [newColor + "Color"]: newColor,
    // const updateItems = checked.map((items) => {
    //   if (id === items.ip) {
    //     // console.log(items);
    //     return {
    //       ...items,

    //     };
    //   }
    //   return items;
    // });
    // setChecked(updateItems);
  };
  console.log(checked, "fecthed date");
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
                id={items.ip}
                value={+items.greenColor}
                onChange={(e, val) => handleChange_slider(items.ip, e, val)}
                disabled={!items.state}
                size="small"
                defaultValue={+items.greenColor}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Box>
            <ToggleButtonGroup
              disabled={!items.state}
              color="primary"
              // value={handleChange_color().split("Color")}
              // onClick={(e, value) => handleChange_color(items.ip, value)}
              exclusive
              aria-label="Platform"
            >
              <ToggleButton
                onClick={(e, val) => handleChange_color(items.ip, val)}
                value="red"
              >
                red
              </ToggleButton>
              <ToggleButton
                onClick={(e, val) => handleChange_color(items.ip, val)}
                value="green"
              >
                green
              </ToggleButton>
              <ToggleButton
                onClick={(e, val) => handleChange_color(items.ip, val)}
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
