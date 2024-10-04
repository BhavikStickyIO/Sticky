export const CONFIGURATIONS = [
  { label: "Payment Routing Include Tax", name: "paymentRoutingIncludeTax" },
  { label: "Post Back URL", name: "postBackURL" },
  { label: "Include Returns", name: "include_returns" },
  { label: "Coupons", name: "coupons" },
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
  { value: '(24) Coupon Shipping Free', label: '(24) Coupon Shipping Free' },
  { value: '(23) SU-Product-Coupon (expired)', label: '(23) SU-Product-Coupon (expired)' },
  { value: '(22) SU-Order-Coupon (expired)', label: '(22) SU-Order-Coupon (expired)' },
  { value: '(21) Product Level - pprod', label: '(21) Product Level - pprod' },
  { value: '(20) Shipping Level - ship', label: '(20) Shipping Level - ship' },
  { value: '(19) Product Level', label: '(19) Product Level' },
  { value: '(18) Order Level - ord', label: '(18) Order Level - ord' },
  { value: '(17) bogo', label: '(17) bogo' },
  { value: '(16) B2G1', label: '(16) B2G1' },
  { value: '(10) 10off', label: '(10) 10off' },
  { value: '(5) 5off', label: '(5) 5off' },
  { value: '(5) 5off', label: '(5) 5off' },
  { value: '(5) 5off', label: '(5) 5off' },
  { value: '(50) Fifty Off', label: '(50) Fifty Off' },
  { value: '(50) 50 Off', label: '(50) 50 Off' },
  { value: '(4) Product Coupon Lifetime', label: '(4) Product Coupon Lifetime' },
  { value: '(3) Product Coupon Limited', label: '(3) Product Coupon Limited' },
  { value: '(2) Order Coupon Lifetime', label: '(2) Order Coupon Lifetime' },
  { value: '(1) Order Coupon Limited', label: '(1) Order Coupon Limited' }
];

export const ReturnList = [
  { value: 'Include Returns', label: 'Include Returns' },
  { value: 'Include Returns2', label: 'Include Returns2' },
];

