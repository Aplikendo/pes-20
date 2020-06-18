"use strict";

const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class TragInstanceMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }

  async create(tragInstance) {
    return await super.insertOne(tragInstance);
  }

  async getByAwid(awid) {
    return await super.findOne({ awid });
  }

  async updateByAwid(tragInstance) {
    return await super.findOneAndUpdate({ awid: tragInstance.awid }, tragInstance, "NONE");
  }
}

module.exports = TragInstanceMongo;
