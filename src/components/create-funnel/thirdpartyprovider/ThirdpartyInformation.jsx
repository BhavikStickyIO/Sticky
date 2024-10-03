import React from "react";
import { CustomCard, DropDown } from "../../../common";
import { THIRD_PARTY_PROVIDERS } from "../../../constant/funnel";
import { useFunnelContext } from "../../../context/FunnelContext";


const ThirdpartyInformation = () => {
  const { handlePrimaryDropdown, dropdownValues } = useFunnelContext();

  return (
    <div>
      <CustomCard title="Third-Party Providers">

        <DropDown
          name="fullfillment"
          options={THIRD_PARTY_PROVIDERS.fullfillment}
          label="Fullfillment"
          value={dropdownValues?.fullfillment}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="risk_mitigation"
          options={THIRD_PARTY_PROVIDERS.risk_mitigation}
          label="Risk Mitigation"
          value={dropdownValues?.risk_mitigation}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="prospect"
          options={THIRD_PARTY_PROVIDERS.prospect}
          label="Prospect"
          value={dropdownValues?.prospect}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="order_confirmation"
          options={THIRD_PARTY_PROVIDERS.order_confirmation}
          label="Order Confirmation"
          value={dropdownValues?.order_confirmation}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="chargeback"
          options={THIRD_PARTY_PROVIDERS.chargeback}
          label="Chargeback"
          value={dropdownValues?.chargeback}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="membership"
          options={THIRD_PARTY_PROVIDERS.membership}
          label="Membership"
          value={dropdownValues?.membership}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="auto_responder"
          options={THIRD_PARTY_PROVIDERS.auto_responder}
          label="Auto Responder"
          value={dropdownValues?.auto_responder}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="tax"
          options={THIRD_PARTY_PROVIDERS.tax}
          label="Tax"
          value={dropdownValues?.tax}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="data_verification"
          options={THIRD_PARTY_PROVIDERS.data_verification}
          label="Data Verification"
          value={dropdownValues?.data_verification}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="collection"
          options={THIRD_PARTY_PROVIDERS.collection}
          label="Collection"
          value={dropdownValues?.collection}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="account_updater"
          options={THIRD_PARTY_PROVIDERS.account_updater}
          label="Account Updater"
          value={dropdownValues?.account_updater}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="loyalty"
          options={THIRD_PARTY_PROVIDERS.loyalty}
          label="Loyalty"
          value={dropdownValues?.loyalty}
          handleChange={handlePrimaryDropdown}
        />
      </CustomCard>
    </div>
  );
};

export default ThirdpartyInformation;
