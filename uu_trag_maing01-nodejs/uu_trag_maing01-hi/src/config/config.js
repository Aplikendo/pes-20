// This file was auto-generated according to the "namespace" setting in package.json.
// Manual changes to this file are discouraged, if values are inconsistent with package.json setting.

export default {
  TAG: "uuTrag.",
  CSS: "uutrag-",

  LEFT_MENU_CCR_KEY: "UuTrag.LeftMenu",

  AUTH_HOME_ROUTE: "trip",
  NOT_AUTH_HOME_ROUTE: "login",

  FEEDBACK: {
    LOADING: "loading",
    READY: "ready",
    ERROR: "error",
    INITIAL: "initial",
    SUCCESS: "success"
  },

  SCREEN_SIZE: {
    XS: "xs",
    S: "s",
    M: "m",
    L: "L",
    XL: "xl"
  },

  PROFILES: {
    AUTHORITIES: "Authorities",
    EXECUTIVES: "Executives"
  },

  STATES: {
    ACTIVE: "active",
    CLOSED: "closed",
    UNDER_CONSTRUCTION: "underConstruction"
  },

  ERROR_CODES: {
    LOAD_INSTANCE_CLOSED: "uu-trag-main/tragInstance/load/tragInstanceNotInProperState",
    LOAD_INSTANCE_UNDER_CONSTRUCTION: "uu-trag-main/tragInstance/load/tragInstanceIsUnderConstruction",
    APP_NOT_AUTHORIZED: "uu-appg01/authorization/accessDenied",
    TRIP_RATING_NOT_AUTHORIZED: "uu-trag-main/trip/addRating/userNotAuthorized",
    TRIP_DELETE_NOT_AUTHORIZED: "uu-trag-main/trip/delete/userNotAuthorized",
    TRIP_UPDATE_NOT_AUTHORIZED: "uu-trag-main/trip/update/userNotAuthorized",
    PARTICIPANT_CONTAIN_TRIPS: "uu-trag-main/participant/delete/relatedTripsExist",
    PARTICIPANT_NAME_NOT_UNIQUE: "uu-trag-main/participant/create/participantNameNotUnique",
    LOCATION_CONTAIN_TRIPS: "uu-trag-main/location/delete/relatedTripsExist",
    LOCATION_NAME_NOT_UNIQUE: "uu-trag-main/location/create/locationNameNotUnique"
  }
};
