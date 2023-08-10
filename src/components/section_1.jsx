import React from "react";
import { useState, useEffect } from "react";
import "./section_1.style.css";
import { Section_2 } from "./section_2";
import axios from "axios";
// import { Link } from "react-router-dom";
// import Switch from "@mui/material/Switch";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import { BsLightbulb } from "react-icons/bs";
// import { BsLightbulbFill } from "react-icons/bs";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Section_1 = () => {
  const [checked, setChecked] = useState([
    {
      ip: 0,
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
      ip: 1,
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

  // this is for fetch and preProcessing the data
  useEffect(() => {
    const preProcess = () => {
      const string = "{IP00110001,S0,C3,W50,Y00,R00,G40,B00,E2,L0}";

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
      // console.log(checked, "first");
      const newArr = [...checked];
      const updatedItem = newArr.find((a) => a.ip === sampleGetData[0].ip);
      console.log(updatedItem.ip, "updatedItem");
      updatedItem.state = sampleGetData[0].state;
      updatedItem.speed = sampleGetData[0].speed;
      updatedItem.whiteColor = sampleGetData[0].whiteColor;
      updatedItem.yellowColor = sampleGetData[0].yellowColor;
      updatedItem.redColor = sampleGetData[0].redColor;
      updatedItem.greenColor = sampleGetData[0].greenColor;
      updatedItem.blueColor = sampleGetData[0].blueColor;
      updatedItem.effect = sampleGetData[0].effect;
      return newArr;
    };
    setChecked(preProcess());

    // const fetchRequest = async () => {
    //   const res = await fetch("http://193.36.84.113:8080/system/data");
    //   // "http://127.0.0.1:8000/account/artists/6/get_nfts/"
    //   const requests = await res.json();
    //   console.log(requests);
    //   // setRequests(requests);
    // };
    // fetchRequest();
    // ---------------------------
    // const config = {
    //   headers: { "Access-Control-Allow-Origin": "*" },
    // };
    // const url = "http://193.36.84.113:8080/system/data";
    // // Make a request for a user with a given ID
    // axios
    //   .get("http://193.36.84.113:8080/system/data")
    //   .then((res) => {
    //     // handle success
    //     console.log("ok");
    //     console.log(res.data);
    //     console.log(res.error);
    //     console.log(res.headers);
    //   })
    //   .catch((err) => {
    //     // handle error
    //     console.log(err);
    //   });
    // ---------------------------
    // axios("http://193.36.84.113:8080/system/data", {
    //   method: "GET",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "json",
    //     // withCredentials: true,
    //     // mode: "no-cors",
    //   },
    // }).then((res) => console.log(res));
    // ---------------------------
    // fetch("http://193.36.84.113:8080/system/data").then((res) =>
    //   console.log(res.json())
    // );
    // ---------------------------
    // var options = {
    //   method: "GET",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     mode: "no-cors",
    //   },
    // };
    // fetch("http://193.36.84.113:8080/system/data", options)
    //   .then(function (res) {
    //     return res.json();
    //   })
    //   .then(function (resJson) {
    //     return resJson;
    //   });
    // ---------------------------
    axios
      .get("http://193.36.84.113:8080/system/data")
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
    axios
      .post("http://193.36.84.113:8080/system/ctrl", {
        client: "dorod bar to",
      })
      .then((response) => {
        console.log(response.data);
      });
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
  // console.log(checked, "fecthed date");
  return (
    <div>
      <Section_2 lights={checked}></Section_2>
    </div>
  );
  // <div className="main-container">
  //   {checked.map((items, index) => {
  //     // console.log(items.state);
  //     return (
  //       <div className="main-container-details">
  //         {items.state ? (
  //           <BsLightbulbFill size={25} color={items.color} />
  //         ) : (
  //           <BsLightbulb size={25} color="gray" />
  //         )}
  //         <p1>
  //           لامپ شماره <span>{items.ip}</span>
  //         </p1>
  //         <Switch
  //           value={items.state}
  //           onClick={() => handleChange(items.ip, items.state)}
  //           checked={items.state}
  //           inputProps={{ "aria-label": "controlled" }}
  //         />
  //         <Box width={300}>
  //           <Slider
  //             id={items.ip}
  //             value={+items.greenColor}
  //             onChange={(e, val) => handleChange_slider(items.ip, e, val)}
  //             disabled={!items.state}
  //             size="small"
  //             defaultValue={+items.greenColor}
  //             aria-label="Small"
  //             valueLabelDisplay="auto"
  //           />
  //         </Box>
  //         <ToggleButtonGroup
  //           disabled={!items.state}
  //           color="primary"
  //           // value={handleChange_color().split("Color")}
  //           // onClick={(e, value) => handleChange_color(items.ip, value)}
  //           exclusive
  //           aria-label="Platform"
  //         >
  //           <ToggleButton
  //             onClick={(e, val) => handleChange_color(items.ip, val)}
  //             value="red"
  //           >
  //             red
  //           </ToggleButton>
  //           <ToggleButton
  //             onClick={(e, val) => handleChange_color(items.ip, val)}
  //             value="green"
  //           >
  //             green
  //           </ToggleButton>
  //           <ToggleButton
  //             onClick={(e, val) => handleChange_color(items.ip, val)}
  //             value="blue"
  //           >
  //             blue
  //           </ToggleButton>
  //         </ToggleButtonGroup>
  //         <button onClick={() => sendApi(items.ip)}>submit</button>
  //       </div>
  //     );
  //   })}
  //   {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
  // </div>
  // );
};
