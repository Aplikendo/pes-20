"use strict";

const TragInstanceAbl = require("../../abl/trag-instance-abl.js");

const CACHE_VALUE = "public, max-age=86400, s-maxage=86400";

class TragInstanceController {
  static init(ucEnv) {
    return TragInstanceAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  static plugInBt(ucEnv) {
    return TragInstanceAbl.plugInBt(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
  static load(ucEnv) {
    return TragInstanceAbl.load(ucEnv.uri.getAwid(), ucEnv.getAuthorizationResult());
  }

  static update(ucEnv) {
    return TragInstanceAbl.update(ucEnv.uri.getAwid(), ucEnv.parameters);
  }

  static setLogo(ucEnv) {
    return TragInstanceAbl.setLogo(ucEnv.uri.getAwid(), ucEnv.parameters);
  }

  static setIcons(ucEnv) {
    return TragInstanceAbl.setIcons(ucEnv.uri.getAwid(), ucEnv.parameters, ucEnv.getUri());
  }

  static getProductInfo(ucEnv) {
    ucEnv.getResponse().setHeaders({ "Cache-Control": CACHE_VALUE });
    return TragInstanceAbl.getProductInfo(ucEnv.uri.getAwid());
  }

  static async getProductLogo(ucEnv) {
    let dtoOut = await TragInstanceAbl.getProductLogo(ucEnv.getUri().getAwid(), ucEnv.parameters);
    ucEnv.getResponse().setHeaders({ "Cache-Control": CACHE_VALUE });
    return ucEnv.setBinaryDtoOut(dtoOut);
  }

  static async getUveMetaData(ucEnv) {
    let dtoOut = await TragInstanceAbl.getUveMetaData(ucEnv.getUri().getAwid(), ucEnv.parameters);
    ucEnv.getResponse().setHeaders({ "Cache-Control": CACHE_VALUE });
    return ucEnv.setBinaryDtoOut(dtoOut);
  }

  static async getIndex(ucEnv) {
    ucEnv.getResponse().setHeaders({ "Cache-Control": CACHE_VALUE });
    return TragInstanceAbl.getIndex(ucEnv.uri.getAwid(), ucEnv.getUri());
  }
}

module.exports = TragInstanceController;
