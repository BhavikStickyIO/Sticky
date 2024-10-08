import React from "react";
import { CustomCard } from "../../../common";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Flow1 from "../../../assets/flow-image1.png";
import Flow2 from "../../../assets/flow-image2.png";
import Flow3 from "../../../assets/flow-image3.png";
import Flow4 from "../../../assets/flow-image4.png";
import Flow5 from "../../../assets/flow-image5.png";
import Flow6 from "../../../assets/flow-image6.png";
import Flow7 from "../../../assets/flow-image7.png";

const flowList = [
  {
    title: "Shopify",
    isIcon: true,
  },
  {
    title: "Checkout",
    icon: Flow1,
    isIcon: true,
  },
  {
    title: "Upsell",
    icon: Flow2,
    isIcon: true,
  },
  {
    title: "Thank you",
    icon: Flow3,
    isIcon: true,
  },
  {
    title: "Terms and Agreement",
    icon: Flow4,
    isIcon: true,
  },
  {
    title: "Privacy Policy",
    icon: Flow5,
    isIcon: true,
  },
  {
    title: "Contact us",
    icon: Flow6,
    isIcon: true,
  },
  {
    title: "Down sell",
    icon: Flow7,
    isIcon: true,
  },
];

const EditFlowCard = () => {
  return (
    <Box sx={{ p: 11, backgroundColor: "#EBECEE" }}>
      <Grid container spacing={2}>
        {" "}
        {flowList.map((item, index) => (
          <Grid item xs={3} key={index}>
            {" "}
            <CustomCard
              isIcon={item.isIcon}
              title={item.title}
              style={{ height: "305px",textAlign:"center",m:3 }}
            >
              <img
                src={item.icon}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EditFlowCard;
