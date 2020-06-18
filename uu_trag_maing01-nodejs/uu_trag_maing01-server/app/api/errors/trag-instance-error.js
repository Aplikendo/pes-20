"use strict";

const UuTragError = require("./uu-trag-error");
const TRAG_INSTANCE_ERROR_PREFIX = `${UuTragError.ERROR_PREFIX}tragInstance/`;

const Init = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}init/`,
  TragInstanceAlreadyInitialized: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}tragInstanceAlreadyInitialized`;
      this.message = "TragInstance is already initialized.";
    }
  },
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateAwscFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}createAwscFailed`;
      this.message = "Create uuAwsc failed.";
    }
  },
  SysSetProfileFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Create uuAppProfile failed.";
    }
  },
  UuBinaryCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}uuBinaryCreateFailed`;
      this.message = "Creating uuBinary failed.";
    }
  },
  TragInstanceDaoCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}tragInstanceDaoCreateFailed`;
      this.message = "Create tragInstance by tragInstance DAO create failed.";
    }
  }
};

const Load = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}load/`,
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  TragInstanceIsUnderConstruction: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}tragInstanceIsUnderConstruction`;
      this.message = "TragInstance is in state underConstruction.";
    }
  }
};

const Update = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TragInstanceDaoUpdateByAwidFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tragInstanceDaoUpdateByAwidFailed`;
      this.message = "Update tragInstance by tragInstance Dao updateByAwid failed.";
    }
  }
};

const SetLogo = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}setLogo/`,
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetLogo.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetLogo.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetLogo.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  UuBinaryCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetLogo.UC_CODE}uuBinaryCreateFailed`;
      this.message = "Creating uuBinary failed.";
    }
  },
  UuBinaryUpdateBinaryDataFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetLogo.UC_CODE}uuBinaryUpdateBinaryDataFailed`;
      this.message = "Updating uuBinary data failed.";
    }
  },
  TragInstanceDaoUpdateByAwidFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetLogo.UC_CODE}tragInstanceDaoUpdateByAwidFailed`;
      this.message = "Update tragInstance by tragInstance Dao updateByAwid failed.";
    }
  }
};

const GetProductLogo = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}getProductLogo/`,
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${GetProductLogo.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const GetIndex = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}getIndex/`,
  UnableToReadHtmlFile: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${GetIndex.UC_CODE}unableToReadHtmlFile`;
      this.message = "Unable to read html file.";
    }
  }
};

const GetUveMetaData = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}getUveMetaData/`,
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${GetUveMetaData.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const SetIcons = {
  UC_CODE: `${TRAG_INSTANCE_ERROR_PREFIX}setIcons/`,
  InvalidDtoIn: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetIcons.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  UuBinaryUpdateBinaryDataFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetIcons.UC_CODE}uuBinaryUpdateBinaryDataFailed`;
      this.message = "Updating uuBinary data failed.";
    }
  },
  UuBinaryCreateFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetIcons.UC_CODE}uuBinaryCreateFailed`;
      this.message = "Creating uuBinary failed.";
    }
  },
  TragInstanceDoesNotExist: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetIcons.UC_CODE}tragInstanceDoesNotExist`;
      this.message = "TragInstance does not exist.";
    }
  },
  TragInstanceNotInProperState: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetIcons.UC_CODE}tragInstanceNotInProperState`;
      this.message = "TragInstance is not in proper state [active|underConstruction].";
    }
  },
  TragInstanceDaoUpdateByAwidFailed: class extends UuTragError {
    constructor() {
      super(...arguments);
      this.code = `${SetIcons.UC_CODE}tragInstanceDaoUpdateByAwidFailed`;
      this.message = "Update tragInstance by tragInstance Dao updateByAwid failed.";
    }
  }
};

module.exports = {
  Init,
  Load,
  Update,
  SetLogo,
  GetProductLogo,
  GetIndex,
  GetUveMetaData,
  SetIcons
};
