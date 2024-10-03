import React from "react";
import { CustomCard, DropDown } from "../../../common";
import { POST_BACK_PROFILES } from "../../../constant/funnel";
import { useFunnelContext } from "../../../context/FunnelContext";

const PostbackProfileInformation = () => {
  const { handlePrimaryDropdown, dropdownValues } = useFunnelContext();

  return (
    <div>
      <CustomCard title="Post-Back Profiles">
        <DropDown
          name="choose_profile"
          options={POST_BACK_PROFILES.choose_profile}
          value={dropdownValues?.choose_profile}
          handleChange={handlePrimaryDropdown}
          label="Choose Profile"
        />
      </CustomCard>
      {/* POST_BACK_PROFILES */}
    </div>
  );
};

export default PostbackProfileInformation;
