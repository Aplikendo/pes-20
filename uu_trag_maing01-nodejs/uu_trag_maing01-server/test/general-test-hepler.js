const path = require("path");
const fs = require("fs");
const { DaoFactory } = require("uu_appg01_server").ObjectStore;

const TRAG_INSTANCE_INIT = "tragInstance/init";
const TRAG_INSTANCE_LOAD = "tragInstance/load";
const TRAG_INSTANCE_UPDATE = "tragInstance/update";
const TRAG_INSTANCE_SET_LOGO = "tragInstance/setLogo";
const TRAG_INSTANCE_SET_ICONS = "tragInstance/setIcons";
const TRAG_INSTANCE_GET_UVE_META_DATA = "tragInstance/getUveMetaData";
const TRIP_CREATE = "trip/create";
const TRIP_GET = "trip/get";
const TRIP_UPDATE = "trip/update";
const TRIP_UPDATE_VISIBILITY = "trip/updateVisibility";
const TRIP_DELETE = "trip/delete";
const TRIP_LIST = "trip/list";
const TRIP_ADD_RATING = "trip/addRating";
const PARTICIPANT_CREATE = "participant/create";
const PARTICIPANT_GET = "participant/get";
const PARTICIPANT_UPDATE = "participant/update";
const PARTICIPANT_DELETE = "participant/delete";
const PARTICIPANT_LIST = "participant/list";
const MONGO_ID = "012345678910111213141516";

const getImageStream = () => {
  return fs.createReadStream(path.resolve(__dirname, "image.png"));
};

const mockDaoFactory = () => {
  // this mock ensures that all of the abl can be required
  jest.spyOn(DaoFactory, "getDao").mockImplementation(() => {
    let dao = {};
    dao.createSchema = () => {};
    return dao;
  });
};

const getSessionMock = uuIdentity => {
  let identity = {
    getUuIdentity: () => uuIdentity,
    getName: () => {}
  };
  return {
    getIdentity: () => identity
  };
};

const getAuthzResultMock = () => {
  return {
    getAuthorizedProfiles: () => []
  };
};

module.exports = {
  TRAG_INSTANCE_INIT,
  TRAG_INSTANCE_LOAD,
  TRAG_INSTANCE_UPDATE,
  TRAG_INSTANCE_SET_LOGO,
  TRAG_INSTANCE_SET_ICONS,
  TRAG_INSTANCE_GET_UVE_META_DATA,
  TRIP_CREATE,
  TRIP_GET,
  TRIP_UPDATE,
  TRIP_UPDATE_VISIBILITY,
  TRIP_DELETE,
  TRIP_LIST,
  TRIP_ADD_RATING,
  PARTICIPANT_CREATE,
  PARTICIPANT_GET,
  PARTICIPANT_UPDATE,
  PARTICIPANT_DELETE,
  PARTICIPANT_LIST,
  MONGO_ID,
  getImageStream,
  mockDaoFactory,
  getSessionMock,
  getAuthzResultMock
};
