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

export const couponList = [
  { value: 24, label: '(24) Coupon Shipping Free' },
  { value: 23, label: '(23) SU-Product-Coupon (expired)' },
  { value: 22, label: '(22) SU-Order-Coupon (expired)' },
  { value: 21, label: '(21) Product Level - pprod' },
  { value: 20, label: '(20) Shipping Level - ship' },
  { value: 19, label: '(19) Product Level' },
  { value: 18, label: '(18) Order Level - ord' },
  { value: 17, label: '(17) bogo' },
  { value: 16, label: '(16) B2G1' },
  { value: 11, label: '(11) 10off' },
  { value: 9, label: '(9) 5off' },
  { value: 8, label: '(8) 5off' },
  { value: 7, label: '(7) 5off' },
  { value: 6, label: '(6) Fifty Off' },
  { value: 5, label: '(5) 50 Off' },
  { value: 4, label: '(4) Product Coupon Lifetime' },
  { value: 3, label: '(3) Product Coupon Limited' },
  { value: 2, label: '(2) Order Coupon Lifetime' },
  { value: 1, label: '(1) Order Coupon Limited' }
];
