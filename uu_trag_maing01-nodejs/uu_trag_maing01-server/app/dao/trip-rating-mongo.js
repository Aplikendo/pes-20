"use strict";

const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const { ObjectId } = require("bson");

class TripRatingMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, tripId: 1, uuIdentity: 1 }, { unique: true });
  }

  async create(uuObject) {
    uuObject.tripId = new ObjectId(uuObject.tripId);
    return await super.insertOne(uuObject);
  }

  async getByTripIdAndUuIdentity(awid, tripId, uuIdentity) {
    return await super.findOne({ awid, tripId, uuIdentity });
  }

  async update(uuObject) {
    let filter = { id: uuObject.id, awid: uuObject.awid };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async deleteByTripId(awid, tripId) {
    await super.deleteMany({ awid, tripId });
  }
}

module.exports = TripRatingMongo;
