"use strict";

const UuTragError = require("./uu-trag-error");
const LOCATION_ERROR_PREFIX = `${UuTragError.ERROR_PREFIX}location/`;

const Create = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}create/`,
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
  LocationNameNotUnique: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationNameNotUnique`;
      this.message = "Location name is not unique in awid.";
    }
  },
  LocationDaoCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationDaoCreateFailed`;
      this.message = "Create location by location DAO create failed.";
    }
  }
};

const Get = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}get/`,
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
      this.message = "TragInstance is in state underConstruction.";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  LocationDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}locationDoesNotExist`;
      this.message = "Location does not exist.";
    }
  }
};

const Update = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}update/`,
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
  LocationNameNotUnique: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}locationNameNotUnique`;
      this.message = "Location name is not unique in awid.";
    }
  },
  LocationDaoUpdateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}locationDaoUpdateFailed`;
      this.message = "Update location by location Dao update failed.";
    }
  }
};

const Delete = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}delete/`,
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
  TripDaoGetCountByLocationFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDaoGetCountByLocationFailed`;
      this.message = "Get count by trip Dao getCountByLocation failed.";
    }
  },
  RelatedTripsExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}relatedTripsExist`;
      this.message = "Location has trips.";
    }
  },
  TripDaoRemoveLocationFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDaoRemoveLocationFailed`;
      this.message = "Removing location by trip Dao removeLocation failed.";
    }
  }
};

const List = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}list/`,
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

module.exports = {
  Create,
  Get,
  Update,
  Delete,
  List
};
