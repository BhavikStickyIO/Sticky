import React from 'react'
import { CustomCard, DropDown } from '../../common';

const PostbackProfileInformation = () => {
  const postbackprofileOptions = [
    { label: "Choose Profile...", value: "Choose Profile" },
  ];
  return (
    <div>
      <CustomCard title="Post-Back Profiles">
      {postbackprofileOptions.map((option, index) => (
        <DropDown key={index} label={option.label} options={[option]} />
      ))}
    </CustomCard>
    </div>
  )
}

export default PostbackProfileInformation
