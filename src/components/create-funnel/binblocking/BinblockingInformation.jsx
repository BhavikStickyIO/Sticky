import React from "react";
import { CustomCard, DropDown } from "../../../common";

const BinBlockingInformation = () => {
  const binProfileOptions = [
    { label: "BIN Profile 1", value: "Test insureship product ID 1" },
  ];

  return (
    <CustomCard title="BIN Blocking">
      {binProfileOptions.map((option, index) => (
        <DropDown key={index} label={option.label} options={[option]} />
      ))}
    </CustomCard>
  );
};

export default BinBlockingInformation;
