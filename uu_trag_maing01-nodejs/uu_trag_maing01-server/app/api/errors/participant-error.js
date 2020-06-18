"use strict";

const UuTragError = require("./uu-trag-error");
const PARTICIPANT_ERROR_PREFIX = `${UuTragError.ERROR_PREFIX}participant/`;

const Create = {
  UC_CODE: `${PARTICIPANT_ERROR_PREFIX}create/`,
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
  ParticipantNameNotUnique: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}participantNameNotUnique`;
      this.message = "Participant name is not unique in awid.";
    }
  },
  ParticipantDaoCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}participantDaoCreateFailed`;
      this.message = "Create participant by participant DAO create failed.";
    }
  }
};

const Get = {
  UC_CODE: `${PARTICIPANT_ERROR_PREFIX}get/`,
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
  ParticipantDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}participantDoesNotExist`;
      this.message = "Participant does not exist.";
    }
  }
};

const Update = {
  UC_CODE: `${PARTICIPANT_ERROR_PREFIX}update/`,
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
  ParticipantNameNotUnique: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}participantNameNotUnique`;
      this.message = "Participant name is not unique in awid.";
    }
  },
  ParticipantDaoUpdateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}participantDaoUpdateFailed`;
      this.message = "Update participant by participant Dao update failed.";
    }
  }
};

const Delete = {
  UC_CODE: `${PARTICIPANT_ERROR_PREFIX}delete/`,
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
  TripDaoGetCountByParticipantFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDaoGetCountByParticipantFailed`;
      this.message = "Get count by trip Dao getCountByParticipant failed.";
    }
  },
  RelatedTripsExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}relatedTripsExist`;
      this.message = "Participant has trips.";
    }
  },
  TripDaoRemoveParticipantFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDaoRemoveParticipantFailed`;
      this.message = "Removing participant by trip Dao removeParticipant failed.";
    }
  }
};

const List = {
  UC_CODE: `${PARTICIPANT_ERROR_PREFIX}list/`,
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
