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
  expense_assumption_profile: [],
  max_grace_period: [],
};

export const SHOPIFY_CONFIG = {
  sticky_checkout_domain: [],
  traffic_source: [],
};

export const OFFER_CONFIG = {
  select_offer: [],
};

export const SHIPPING_INFORMATION = {
  shipping_methods: [
    { label: "Free Delivery", value: "Free Delivery" },
    { label: "Express Delivery", value: "Express Delivery" },
    { label: "Standard Delivery", value: "Standard Delivery" },
  ],
};
