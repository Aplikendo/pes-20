import Config from "../../config/config.js";

export default {
  ...Config,

  TAG: Config.TAG + "Trip.",
  CSS: Config.CSS + "trip-"
};
