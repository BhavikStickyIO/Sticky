import React from "react";
import { Card, CardContent, CardHeader, Box, Typography } from "@mui/material";
import CardSectionHeader from "./CardSectionHeader";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Divider from "../assets/divider.png";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CustomCard = ({
  title,
  children,
  subTitle = "",
  isIcon = false,
  style = {},
}) => {
  const mergedStyle = {
    maxWidth: 600,
    boxShadow: 3,
    borderRadius: 3,
    padding: 2,
    fontSize: 16,
    ...style,
  };
  console.log("Label", title);
  return (
    <>
      <Card
        sx={{
          ...mergedStyle,
          height: title !== "Shopify" ? style.height : 130,
        }}
      >
        {isIcon && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {title !== "Shopify" ? (
              <>
                <SettingsOutlinedIcon sx={{ marginRight: 1 }} />
                <img src={Divider} alt="divider" />
                <EditOutlinedIcon sx={{ marginLeft: 1 }} />
              </>
            ) : (
              <OpenInNewIcon />
            )}
          </Box>
        )}
        <CardSectionHeader
          style={{
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: 600,
            // textAlign:
          }}
          title={title}
          subTitle={subTitle}
          marginLeft="1rem"
        />
        <CardContent>
          <Box>{children}</Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomCard;
