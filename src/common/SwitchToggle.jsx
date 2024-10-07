import React from "react";
import Switch from "@mui/material/Switch";

const SwitchToggle = ({ style = {} }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Switch
        sx={style}
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      {/* <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                    width: 42,  // Width of the switch track
                    height: 26,  // Height of the switch track
                    padding: 0,
                    '& .MuiSwitch-switchBase': {
                        padding: 1,
                        '&.Mui-checked': {
                            transform: 'translateX(16px)',  // Adjust position of knob when checked
                            color: '#fff',  // Knob color when checked
                            '& + .MuiSwitch-track': {
                                backgroundColor: '#1B3E6F',  // Dark blue track when checked
                                opacity: 1,
                                border: 'none',
                            },
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        width: 20,  // Knob size
                        height: 20,  // Knob size
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 13,  // Rounded track
                        backgroundColor: '#1B3E6F',  // Dark blue track when unchecked
                        opacity: 1,
                        transition: 'background-color 0.3s',
                    },
                }}
            /> */}

      {/* <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                    width: 60,   // Adjusted width of the track
                    height: 35,  // Adjusted height of the track
                    padding: 0,
                    '& .MuiSwitch-switchBase': {
                        padding: 2,  // Space between the knob and the track
                        '&.Mui-checked': {
                            transform: 'translateX(22px)',  // Move the knob when checked
                            color: '#fff',  // Knob color when checked
                            '& + .MuiSwitch-track': {
                                backgroundColor: '#1B3E6F',  // Dark blue track when checked
                                opacity: 1,
                                border: 'none',
                            },
                        },
                        '&.MuiSwitch-switchBase': {
                            color: '#fff',  // Knob color when unchecked
                        }
                    },
                    '& .MuiSwitch-thumb': {
                        width: 25,  // Knob size
                        height: 15,  // Knob size
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 28 / 2,  // Rounded corners for the track
                        backgroundColor: '#fff',  // White track when unchecked
                        border: '1px solid #1B3E6F',  // Border color for the track
                        opacity: 1,
                        transition: 'background-color 0.3s',  // Smooth transition
                    },
                }}
            />

 */}
    </div>
  );
};

export default SwitchToggle;
