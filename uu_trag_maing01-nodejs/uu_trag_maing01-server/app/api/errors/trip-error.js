"use strict";

const UuTragError = require("./uu-trag-error");
const TRIP_ERROR_PREFIX = `${UuTragError.ERROR_PREFIX}trip/`;

const Create = {
  UC_CODE: `${TRIP_ERROR_PREFIX}create/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  UuBinaryCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}uuBinaryCreateFailed`;
      this.message = "Creating uuBinary failed.";
    }
  },
  TripDaoCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}tripDaoCreateFailed`;
      this.message = "Create trip by trip DAO create failed.";
    }
  },
  InvalidPhotoContentType: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidPhotoContentType`;
      this.message = "ContentType of new photo is invalid.";
    }
  }
};

const Get = {
  UC_CODE: `${TRIP_ERROR_PREFIX}get/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  TragInstanceIsUnderConstruction: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}tragInstanceIsUnderConstruction`;
      this.message = "TragInstance is in underConstruction state.";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TripDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  }
};

const Update = {
  UC_CODE: `${TRIP_ERROR_PREFIX}update/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  UserNotAuthorized: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
  TripDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },
  UuBinaryCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}uuBinaryCreateFailed`;
      this.message = "Creating uuBinary failed.";
    }
  },
  UuBinaryUpdateBinaryDataFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}uuBinaryUpdateBinaryDataFailed`;
      this.message = "Updating uuBinary data failed.";
    }
  },
  TripDaoUpdateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tripDaoUpdateFailed`;
      this.message = "Update trip by trip Dao update failed.";
    }
  }
};

const UpdateVisibility = {
  UC_CODE: `${TRIP_ERROR_PREFIX}updateVisibility/`,
  TripDaoUpdateVisibilityFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateVisibility.UC_CODE}tripDaoUpdateVisibilityFailed`;
      this.message = "Update trip by trip Dao updateVisibility failed";
    }
  },
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateVisibility.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateVisibility.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateVisibility.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Delete = {
  UC_CODE: `${TRIP_ERROR_PREFIX}delete/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TripDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },
  UserNotAuthorized: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
  UuBinaryDeleteFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}uuBinaryDeleteFailed`;
      this.message = "Deleting uuBinary failed.";
    }
  }
};

const List = {
  UC_CODE: `${TRIP_ERROR_PREFIX}list/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  TragInstanceIsUnderConstruction: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}tragInstanceIsUnderConstruction`;
      this.message = "TragInstance is in state underConstruction.";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const AddRating = {
  UC_CODE: `${TRIP_ERROR_PREFIX}addRating/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TripDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },
  UserNotAuthorized: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}userNotAuthorized`;
      this.message = "User is not authorized.";
    }
  },
  TripRatingDaoUpdateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}tripRatingDaoUpdateFailed`;
      this.message = "Update tripRating by tripRating DAO update failed.";
    }
  },
  TripRatingDaoCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}tripRatingDaoCreateFailed`;
      this.message = "Create tripRating by tripRating DAO create failed.";
    }
  },
  TripDaoUpdateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${AddRating.UC_CODE}tripDaoUpdateFailed`;
      this.message = "Update trip by trip DAO update failed.";
    }
  }
};

module.exports = {
  Create,
  Get,
  Update,
  UpdateVisibility,
  Delete,
  List,
  AddRating,
};
