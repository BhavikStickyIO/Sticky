import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CONFIGURATIONS, OPTIONS } from "../constant/filter";
import { useFunnelContext } from "../context/FunnelContext";

const Filter = () => {
  const { value, setValue } = useFunnelContext()
  const [configChecks, setConfigChecks] = useState(
    CONFIGURATIONS.reduce((acc, config) => ({ ...acc, [config]: true }), {})
  );
  const [optionChecks, setOptionChecks] = useState({});

  const handleConfigChange = (event) => {
    setConfigChecks({
      ...configChecks,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOptionChange = (event) => {
    setOptionChecks({
      ...optionChecks,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      checkBoxFunnel: {
        ...prev.checkBoxFunnel,
        ...optionChecks
      }
    }))
  }, [optionChecks])

  const checkboxStyles = {
    color: '#40B4E2',
    '&.Mui-checked': {
      color: '#40B4E2',
    },
  };

  return (
    <Card
      sx={{
        padding: 2,
        width: "338px",
        top: 70,
        height: "500px",
        position: "sticky",
        marginLeft: "60px",
        backgroundColor: "#EAEBED",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Configurations
      </Typography>
      <FormGroup>
        {CONFIGURATIONS.map((config) => (
          <FormControlLabel
            key={config}
            control={
              <Checkbox
                sx={checkboxStyles}
                checked={configChecks[config]}
                onChange={handleConfigChange}
                name={config}
              />
            }
            label={config}
          />
        ))}
      </FormGroup>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Options
      </Typography>
      <FormGroup>
        {OPTIONS.map((option) => (
          <FormControlLabel
            key={option.name}
            control={
              <Checkbox
                sx={checkboxStyles}
                checked={optionChecks[option.name]}
                onChange={handleOptionChange}
                name={option.name}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Card>
  );
};

export default Filter;
