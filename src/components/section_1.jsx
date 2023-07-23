import Switch from "@mui/material/Switch";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export const Section_1 = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(50);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleChange_slider = (e, val) => {
    setValue(val);
  };

  console.log(value);
  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Box width={300} backgroundcolor={"red"}>
        <Slider
          value={value}
          // onChange={handleChange_slider}
          onChangeCommitted={handleChange_slider}
          onDragStop={handleChange_slider}
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
      {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
    </div>
  );
};
