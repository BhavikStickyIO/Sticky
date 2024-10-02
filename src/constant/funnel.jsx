export const CONFIGURATIONS = [
  "Payment Routing Include Tax",
  "Post Back URL",
  "Include Returns",
  "Coupons",
];

export const OPTIONS = [
  {
    name: "third_Party_Providers",
    label: "Third Party Providers",
  },
  {
    name: "block_Pre_Paid_Cards",
    label: "Block Pre-Paid Cards",
  },
  {
    name: "bIN_Blocking",
    label: "BIN Blocking",
  },
  {
    name: "allow_Custom_Pricing",
    label: "Allow Custom Pricing",
  },
  {
    name: "daily_Subscription_Limit",
    label: "Daily Subscription Limit",
  },
  {
    name: "collections",
    label: "Collections",
  },
  {
    name: "others",
    label: "Others",
  },
];

export const GENERAL_INFORMATION = {
  default_channel: [
    { label: "Channel 1", value: "channel_1" },
    { label: "Channel 2", value: "channel_2" },
    { label: "Channel 3", value: "channel_3" },
  ],
  expense_assumption_profile: [
    {
      label: "Expense assumption profile 1",
      value: "Expense assumption profile 1",
    },
    {
      label: "Expense assumption profile 2",
      value: "Expense assumption profile 2",
    },
  ],
  max_grace_period: [
    {
      label: "5 Months",
      value: "5 Months",
    },
    {
      label: "10 Months",
      value: "10 Months",
    },
  ],
};

export const SHOPIFY_CONFIG = {
  sticky_checkout_domain: [
    { label: "checkout.mynutrasite.com", value: "checkout.mynutrasite.com" },
    { label: "checkout.sample.com", value: "checkout.sample.com" },
  ],
  traffic_source: [
    { label: "Shopify", value: "Shopify" },
    { label: "Facebook", value: "Facebook" },
  ],
};

export const OFFER_CONFIG = {
  select_offer: [
    { label: "Auto-Offer", value: "Auto-Offer" },
    { label: "Manually-Offer", value: "Manually-Offer" },
  ],
};

export const SHIPPING_INFORMATION = {
  shipping_methods: [
    { label: "Free Delivery", value: "Free" },
    { label: "Express Delivery", value: "Express" },
    { label: "Standard Delivery", value: "Standard" },
  ],
};

export const POST_BACK_PROFILES = {
  choose_profile: [{ label: "Choose Profile...", value: "Choose Profile" }],
};

export const PAYMENT_INFORMATION = {
  payment_type: [
    { label: "Visa", value: "Visa" },
    { label: "American Express", value: "American Express" },
  ],
  payment_routing_configuration: [
    { label: "Add Payment Routing", value: "Add Payment Routing" },
  ],
  return_profile: [
    { label: "Return Profile Example", value: "Return Profile Example" },
  ],
  coupons: [{ label: "Coupon Example", value: "Coupon Example" }],
  countries: [
    { label: "India", value: "India" },
    { label: "Canada", value: "Canada" },
    { label: "USA", value: "USA" },
  ],
};
