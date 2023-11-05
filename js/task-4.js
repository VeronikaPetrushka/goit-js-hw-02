function getShippingCost(country) {
  let message;

  switch (country) {
    case "China":
      message = "Shipping to China will cost 100 credits";
      break;
    case "Chile":
      message = "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      message = "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      message = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }

  return message;
}
